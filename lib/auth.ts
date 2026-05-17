import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

const secret = process.env.JWT_SECRET;
if (!secret) {
  throw new Error(
    "JWT_SECRET environment variable is not set. Admin login will not work."
  );
}
const JWT_SECRET = new TextEncoder().encode(secret);

const SESSION_COOKIE = "admin_session";

export type AdminUser = {
  email: string;
  name: string;
};

export async function createToken(user: AdminUser): Promise<string> {
  return new SignJWT({ email: user.email, name: user.name })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(JWT_SECRET);
}

export async function verifyToken(
  token: string
): Promise<AdminUser | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return { email: payload.email as string, name: payload.name as string };
  } catch {
    return null;
  }
}

export async function createSession(user: AdminUser): Promise<string> {
  const token = await createToken(user);
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
    path: "/",
  });
  return token;
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });
}

export async function getSession(): Promise<AdminUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifyToken(token);
}

export async function requireAdmin(): Promise<AdminUser> {
  const user = await getSession();
  if (!user) {
    throw new Error("Unauthorized");
  }
  return user;
}

export async function validateCredentials(
  email: string,
  password: string
): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPasswordHash = process.env.ADMIN_PASSWORD;
  if (!adminEmail || !adminPasswordHash) return false;
  if (email !== adminEmail) return false;
  try {
    return await bcrypt.compare(password, adminPasswordHash);
  } catch {
    return false;
  }
}
