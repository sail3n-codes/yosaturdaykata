import { type NextRequest, NextResponse } from "next/server"
import { verifyToken, extractTokenFromHeader } from "@/lib/auth"
import type { JWTPayload } from "@/types/auth"
import { UserRole } from "@/models/User" // Import UserRole from the correct location

// Extended NextRequest with user data
export interface AuthenticatedRequest extends NextRequest {
  user?: JWTPayload
}

// Authentication middleware for API routes
export function withAuth(handler: (req: AuthenticatedRequest) => Promise<NextResponse>) {
  return async (req: NextRequest): Promise<NextResponse> => {
    try {
      const authHeader = req.headers.get("authorization")
      const token = extractTokenFromHeader(authHeader)

      if (!token) {
        return NextResponse.json({ success: false, message: "Access token is required" }, { status: 401 })
      }

      const decoded = verifyToken(token)
      if (!decoded) {
        return NextResponse.json({ success: false, message: "Invalid or expired token" }, { status: 401 })
      }

      // Add user data to request
      const authenticatedReq = req as AuthenticatedRequest
      authenticatedReq.user = decoded

      return handler(authenticatedReq)
    } catch (error) {
      console.error("Authentication middleware error:", error)
      return NextResponse.json({ success: false, message: "Authentication failed" }, { status: 500 })
    }
  }
}

// Role-based authorization middleware
export function withRole(requiredRole: UserRole) {
  return (handler: (req: AuthenticatedRequest) => Promise<NextResponse>) =>
    withAuth(async (req: AuthenticatedRequest): Promise<NextResponse> => {
      const user = req.user!

      // Check if user has required role
      const roleHierarchy = {
        [UserRole.USER]: 1,
        [UserRole.MODERATOR]: 2,
        [UserRole.ADMIN]: 3,
      }

      if (roleHierarchy[user.role] < roleHierarchy[requiredRole]) {
        return NextResponse.json({ success: false, message: "Insufficient permissions" }, { status: 403 })
      }

      return handler(req)
    })
}

// Rate limiting middleware (simple in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export function withRateLimit(maxRequests = 10, windowMs: number = 15 * 60 * 1000) {
  return (handler: (req: NextRequest) => Promise<NextResponse>) =>
    async (req: NextRequest): Promise<NextResponse> => {
      const ip = req.ip || req.headers.get("x-forwarded-for") || "unknown"
      const now = Date.now()
      const windowStart = now - windowMs

      // Clean up old entries
      for (const [key, value] of rateLimitMap.entries()) {
        if (value.resetTime < now) {
          rateLimitMap.delete(key)
        }
      }

      const current = rateLimitMap.get(ip)

      if (!current) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
        return handler(req)
      }

      if (current.count >= maxRequests) {
        return NextResponse.json({ success: false, message: "Too many requests" }, { status: 429 })
      }

      current.count++
      return handler(req)
    }
}
