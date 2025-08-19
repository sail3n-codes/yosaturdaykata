import type { UserRole } from "@/models/User";

// Auth request/response types
export interface LoginRequest {
  username: string;
  password: string;
}

export interface CreateUserRequest {
  username: string;
  password: string;
  role?: UserRole;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: {
    id: string;
    username: string;
    role: UserRole;
    isActive: boolean;
  };
  token?: string;
}

export interface JWTPayload {
  userId: string;
  username: string;
  role: UserRole;
  iat?: number;
  exp?: number;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
