import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getAllEvents, createEvent } from "@/lib/events-data";

export async function GET() {
  const events = await getAllEvents();
  return NextResponse.json(events);
}

export async function POST(request: Request) {
  const user = await getSession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const event = await createEvent(body);
    return NextResponse.json(event, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create event" },
      { status: 500 }
    );
  }
}
