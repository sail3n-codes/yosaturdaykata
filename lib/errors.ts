// Custom error classes for better error handling
export class AuthError extends Error {
  constructor(
    message: string,
    public statusCode = 401,
  ) {
    super(message)
    this.name = "AuthError"
  }
}

export class ValidationError extends Error {
  constructor(
    message: string,
    public errors: string[] = [],
  ) {
    super(message)
    this.name = "ValidationError"
  }
}

export class DatabaseError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "DatabaseError"
  }
}

// Error response formatter
export function formatErrorResponse(error: Error) {
  if (error instanceof AuthError) {
    return {
      success: false,
      message: error.message,
      statusCode: error.statusCode,
    }
  }

  if (error instanceof ValidationError) {
    return {
      success: false,
      message: error.message,
      errors: error.errors,
      statusCode: 400,
    }
  }

  if (error instanceof DatabaseError) {
    return {
      success: false,
      message: "Database operation failed",
      statusCode: 500,
    }
  }

  // Generic error
  return {
    success: false,
    message: "An unexpected error occurred",
    statusCode: 500,
  }
}

// Async error handler wrapper
export function asyncHandler(fn: Function) {
  return async (...args: any[]) => {
    try {
      return await fn(...args)
    } catch (error) {
      console.error("Async handler error:", error)
      throw error
    }
  }
}
