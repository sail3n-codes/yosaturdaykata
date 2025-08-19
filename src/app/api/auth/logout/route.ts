import { NextResponse } from "next/server"

// Logout endpoint (mainly for client-side token removal)
// Since we're using stateless JWT tokens, logout is handled client-side
export async function POST() {
  return NextResponse.json({
    success: true,
    message: "Logout successful. Please remove the token from client storage.",
  })
}
