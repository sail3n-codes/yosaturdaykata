import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import User from "@/models/User"
import { generateToken } from "@/lib/auth"
import { withRateLimit } from "@/lib/middleware"
import { AuthError, ValidationError, formatErrorResponse } from "@/lib/errors"
import type { LoginRequest, AuthResponse } from "@/types/auth"

async function loginHandler(req: NextRequest): Promise<NextResponse> {
  try {
    await connectDB()

    const body: LoginRequest = await req.json()
    const { username, password } = body

    // Validate input
    if (!username || !password) {
      throw new ValidationError("Username and password are required")
    }

    // Find user by username
    const user = await User.findOne({ username: username.toLowerCase() })
    if (!user) {
      throw new AuthError("Invalid credentials")
    }

    // Check if user is active
    if (!user.isActive) {
      throw new AuthError("Account is deactivated")
    }

    // Verify password
    const isPasswordValid = await user.comparePassword(password)
    if (!isPasswordValid) {
      throw new AuthError("Invalid credentials")
    }

    // Generate JWT token
    const token = generateToken({
      userId: user._id.toString(),
      username: user.username,
      role: user.role,
    })

    const response: AuthResponse = {
      success: true,
      message: "Login successful",
      user: {
        id: user._id.toString(),
        username: user.username,
        role: user.role,
        isActive: user.isActive,
      },
      token,
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error("Login error:", error)
    const errorResponse = formatErrorResponse(error as Error)
    return NextResponse.json(errorResponse, { status: errorResponse.statusCode })
  }
}

// Apply rate limiting to login
export const POST = withRateLimit(10, 15 * 60 * 1000)(loginHandler) // 10 requests per 15 minutes
