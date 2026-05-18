import { NextRequest, NextResponse } from "next/server";
import { getCollection } from "@/lib/mongodb";
import { getAuthFromRequest } from "@/lib/auth";

export async function GET() {
  try {
    const collection = await getCollection("events");
    const events = await collection
      .find({})
      .sort({ date: -1 })
      .toArray();
    return NextResponse.json({
      events: events.map(({ _id, ...rest }) => ({
        id: _id.toString(),
        ...rest,
      })),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const auth = getAuthFromRequest(request);
  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const collection = await getCollection("events");
    const result = await collection.insertOne({
      title: body.title,
      description: body.description,
      content: body.content || "",
      image: body.image,
      location: body.location || "",
      category: body.category,
      featured: body.featured || false,
      date: body.date ? new Date(body.date) : new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return NextResponse.json(
      { event: { id: result.insertedId.toString(), ...body } },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create event" },
      { status: 500 }
    );
  }
}
