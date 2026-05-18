import { NextRequest, NextResponse } from "next/server";
import { getCollection } from "@/lib/mongodb";
import { comparePassword, signToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const collection = await getCollection<{
      _id: string;
      email: string;
      password: string;
    }>("admins");
    const admin = await collection.findOne({ email });

    if (!admin) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const valid = await comparePassword(password, admin.password);

    if (!valid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = signToken({
      adminId: admin._id.toString(),
      email: admin.email,
    });

    const response = NextResponse.json({
      token,
      admin: { id: admin._id.toString(), email: admin.email },
    });

    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
