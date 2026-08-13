import { NextResponse } from "next/server";
import { SignJWT } from "jose";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const password = body.password;

    const correctPassword = process.env.PROJECT_365_PASSWORD;
    const authSecret = process.env.PROJECT_365_AUTH_SECRET;

    if (!correctPassword || !authSecret) {
      console.error("Project 365 environment variables are missing.");

      return NextResponse.json(
        {
          error: "Server configuration error.",
        },
        {
          status: 500,
        }
      );
    }

    if (password !== correctPassword) {
      return NextResponse.json(
        {
          error: "Incorrect password",
        },
        {
          status: 401,
        }
      );
    }

    const secretKey = new TextEncoder().encode(authSecret);

    const token = await new SignJWT({
      authenticated: true,
    })
      .setProtectedHeader({
        alg: "HS256",
      })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(secretKey);

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set("project365_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;

  } catch (error) {
    console.error("Login error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}