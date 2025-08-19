import jwt from "jsonwebtoken"
import type { JWTPayload } from "@/types/auth"
import { UserRole } from "@/models/User"

const JWT_SECRET = process.env.JWT_SECRET

if (!JWT_SECRET) {
  throw new Error("Please define the JWT_SECRET environment variable")
}

// JWT token generation
export function generateToken(payload: {
  userId: string
  username: string
  role: UserRole
}): string {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d", // Token expires in 7 days
    issuer: "express-backend",
  })
}

// JWT token verification
export function verifyToken(token: string): JWTPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload
    return decoded
  } catch (error) {
    console.error("Token verification failed:", error)
    return null
  }
}

// Extract token from Authorization header
export function extractTokenFromHeader(authHeader: string | null): string | null {
  if (!authHeader) return null

  // Expected format: "Bearer <token>"
  const parts = authHeader.split(" ")
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return null
  }

  return parts[1]
}

// Password validation utility
export function validatePassword(password: string): {
  isValid: boolean
  errors: string[]
} {
  const errors: string[] = []

  if (password.length < 6) {
    errors.push("Password must be at least 6 characters long")
  }

  if (password.length > 128) {
    errors.push("Password cannot exceed 128 characters")
  }

  if (!/(?=.*[a-z])/.test(password)) {
    errors.push("Password must contain at least one lowercase letter")
  }

  if (!/(?=.*[A-Z])/.test(password)) {
    errors.push("Password must contain at least one uppercase letter")
  }

  if (!/(?=.*\d)/.test(password)) {
    errors.push("Password must contain at least one number")
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

// Username validation utility
export function validateUsername(username: string): {
  isValid: boolean
  errors: string[]
} {
  const errors: string[] = []

  if (username.length < 3) {
    errors.push("Username must be at least 3 characters long")
  }

  if (username.length > 30) {
    errors.push("Username cannot exceed 30 characters")
  }

  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    errors.push("Username can only contain letters, numbers, and underscores")
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

// Role-based authorization check
export function hasPermission(userRole: UserRole, requiredRole: UserRole): boolean {
  const roleHierarchy = {
    [UserRole.USER]: 1,
    [UserRole.MODERATOR]: 2,
    [UserRole.ADMIN]: 3,
  }

  return roleHierarchy[userRole] >= roleHierarchy[requiredRole]
}

// Generate a secure random string for session IDs
export function generateSecureId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}
