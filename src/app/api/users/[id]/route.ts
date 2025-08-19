import { NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import User, { UserRole } from "@/models/User"
import { withAuth, type AuthenticatedRequest } from "@/lib/middleware"
import { AuthError, ValidationError, formatErrorResponse } from "@/lib/errors"
import { validatePassword } from "@/lib/auth"

async function updateUserHandler(
  req: AuthenticatedRequest,
  { params }: { params: { id: string } },
): Promise<NextResponse> {
  try {
    await connectDB()

    const { id } = params
    const currentUser = req.user!
    const body = await req.json()

    // Find the user to update
    const userToUpdate = await User.findById(id)
    if (!userToUpdate) {
      throw new AuthError("User not found", 404)
    }

    // Check permissions: users can only update themselves, admins can update anyone
    if (currentUser.role !== UserRole.ADMIN && currentUser.userId !== id) {
      throw new AuthError("Insufficient permissions", 403)
    }

    // Validate and update fields
    const allowedUpdates = ["password", "isActive"]
    const updates: any = {}

    // Only admins can update role and isActive status
    if (currentUser.role === UserRole.ADMIN) {
      allowedUpdates.push("role")
      if (body.role && Object.values(UserRole).includes(body.role)) {
        updates.role = body.role
      }
      if (typeof body.isActive === "boolean") {
        updates.isActive = body.isActive
      }
    }

    // Password update (available to user and admin)
    if (body.password) {
      const passwordValidation = validatePassword(body.password)
      if (!passwordValidation.isValid) {
        throw new ValidationError("Invalid password", passwordValidation.errors)
      }
      updates.password = body.password
    }

    // Apply updates
    Object.assign(userToUpdate, updates)
    await userToUpdate.save()

    return NextResponse.json({
      success: true,
      message: "User updated successfully",
      data: {
        id: userToUpdate._id.toString(),
        username: userToUpdate.username,
        role: userToUpdate.role,
        isActive: userToUpdate.isActive,
        updatedAt: userToUpdate.updatedAt,
      },
    })
  } catch (error) {
    console.error("Update user error:", error)
    const errorResponse = formatErrorResponse(error as Error)
    return NextResponse.json(errorResponse, { status: errorResponse.statusCode })
  }
}

async function deleteUserHandler(
  req: AuthenticatedRequest,
  { params }: { params: { id: string } },
): Promise<NextResponse> {
  try {
    await connectDB()

    const { id } = params
    const currentUser = req.user!

    // Only admins can delete users
    if (currentUser.role !== UserRole.ADMIN) {
      throw new AuthError("Insufficient permissions", 403)
    }

    // Prevent admin from deleting themselves
    if (currentUser.userId === id) {
      throw new ValidationError("Cannot delete your own account")
    }

    const deletedUser = await User.findByIdAndDelete(id)
    if (!deletedUser) {
      throw new AuthError("User not found", 404)
    }

    return NextResponse.json({
      success: true,
      message: "User deleted successfully",
    })
  } catch (error) {
    console.error("Delete user error:", error)
    const errorResponse = formatErrorResponse(error as Error)
    return NextResponse.json(errorResponse, { status: errorResponse.statusCode })
  }
}

export const PUT = withAuth(updateUserHandler)
export const DELETE = withAuth(deleteUserHandler)
