import { NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import User from "@/models/User"
import { withAuth, type AuthenticatedRequest } from "@/lib/middleware"
import { AuthError, formatErrorResponse } from "@/lib/errors"

async function meHandler(req: AuthenticatedRequest): Promise<NextResponse> {
  try {
    await connectDB()

    const user = await User.findById(req.user!.userId).select("-password")
    if (!user) {
      throw new AuthError("User not found")
    }

    if (!user.isActive) {
      throw new AuthError("Account is deactivated")
    }

    return NextResponse.json({
      success: true,
      message: "User profile retrieved successfully",
      data: {
        id: user._id.toString(),
        username: user.username,
        role: user.role,
        isActive: user.isActive,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    })
  } catch (error) {
    console.error("Get profile error:", error)
    const errorResponse = formatErrorResponse(error as Error)
    return NextResponse.json(errorResponse, { status: errorResponse.statusCode })
  }
}

export const GET = withAuth(meHandler)
