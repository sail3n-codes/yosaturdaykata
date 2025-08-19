import { NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import User, { UserRole } from "@/models/User"
import { withRole, type AuthenticatedRequest } from "@/lib/middleware"
import { formatErrorResponse } from "@/lib/errors"

async function getUsersHandler(req: AuthenticatedRequest): Promise<NextResponse> {
  try {
    await connectDB()

    const url = new URL(req.url)
    const page = Number.parseInt(url.searchParams.get("page") || "1")
    const limit = Number.parseInt(url.searchParams.get("limit") || "10")
    const role = url.searchParams.get("role") as UserRole | null

    const skip = (page - 1) * limit

    // Build query
    const query: any = {}
    if (role && Object.values(UserRole).includes(role)) {
      query.role = role
    }

    // Get users with pagination
    const users = await User.find(query).select("-password").sort({ createdAt: -1 }).skip(skip).limit(limit)

    // Get total count for pagination
    const total = await User.countDocuments(query)

    return NextResponse.json({
      success: true,
      message: "Users retrieved successfully",
      data: {
        users: users.map((user) => ({
          id: user._id.toString(),
          username: user.username,
          role: user.role,
          isActive: user.isActive,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        })),
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      },
    })
  } catch (error) {
    console.error("Get users error:", error)
    const errorResponse = formatErrorResponse(error as Error)
    return NextResponse.json(errorResponse, { status: errorResponse.statusCode })
  }
}

// Only admins can view all users
export const GET = withRole(UserRole.ADMIN)(getUsersHandler)
