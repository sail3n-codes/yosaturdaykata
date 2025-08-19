// API Usage Examples and Documentation

export const API_EXAMPLES = {
  // Authentication Examples
  login: {
    method: "POST",
    url: "/api/auth/login",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      username: "johndoe",
      password: "SecurePass123",
    },
    response: {
      success: true,
      message: "Login successful",
      user: {
        id: "64f8a1b2c3d4e5f6a7b8c9d0",
        username: "johndoe",
        role: "user",
        isActive: true,
      },
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    },
  },

  getProfile: {
    method: "GET",
    url: "/api/auth/me",
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    },
    response: {
      success: true,
      message: "User profile retrieved successfully",
      data: {
        id: "64f8a1b2c3d4e5f6a7b8c9d0",
        username: "johndoe",
        role: "user",
        isActive: true,
        createdAt: "2024-01-15T10:30:00.000Z",
        updatedAt: "2024-01-15T10:30:00.000Z",
      },
    },
  },

  getUsers: {
    method: "GET",
    url: "/api/users?page=1&limit=10&role=user",
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // Admin token required
    },
    response: {
      success: true,
      message: "Users retrieved successfully",
      data: {
        users: [
          {
            id: "64f8a1b2c3d4e5f6a7b8c9d0",
            username: "johndoe",
            role: "user",
            isActive: true,
            createdAt: "2024-01-15T10:30:00.000Z",
            updatedAt: "2024-01-15T10:30:00.000Z",
          },
        ],
        pagination: {
          page: 1,
          limit: 10,
          total: 1,
          pages: 1,
        },
      },
    },
  },

  updateUser: {
    method: "PUT",
    url: "/api/users/64f8a1b2c3d4e5f6a7b8c9d0",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    },
    body: {
      password: "NewSecurePass123", // optional
      role: "moderator", // admin only
      isActive: false, // admin only
    },
    response: {
      success: true,
      message: "User updated successfully",
      data: {
        id: "64f8a1b2c3d4e5f6a7b8c9d0",
        username: "johndoe",
        role: "moderator",
        isActive: false,
        updatedAt: "2024-01-15T11:30:00.000Z",
      },
    },
  },
};

// Error Response Examples
export const ERROR_EXAMPLES = {
  validation: {
    success: false,
    message: "Invalid password",
    errors: [
      "Password must contain at least one uppercase letter",
      "Password must contain at least one number",
    ],
  },
  authentication: {
    success: false,
    message: "Invalid or expired token",
  },
  authorization: {
    success: false,
    message: "Insufficient permissions",
  },
  rateLimit: {
    success: false,
    message: "Too many requests",
  },
};
