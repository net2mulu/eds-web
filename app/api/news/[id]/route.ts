import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getCollection } from "@/lib/mongodb";
import { getAuthFromRequest } from "@/lib/auth";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const collection = await getCollection("newsArticles");
    const doc = await collection.findOne({ _id: new ObjectId(id) });
    if (!doc) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    const { _id, ...rest } = doc;
    return NextResponse.json({ news: { id: _id.toString(), ...rest } });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = getAuthFromRequest(request);
  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  try {
    const body = await request.json();
    const collection = await getCollection("newsArticles");
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          title: body.title,
          description: body.description,
          content: body.content,
          image: body.image,
          category: body.category,
          featured: body.featured,
          date: body.date ? new Date(body.date) : undefined,
          updatedAt: new Date(),
        },
      }
    );
    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update news" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = getAuthFromRequest(request);
  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  try {
    const collection = await getCollection("newsArticles");
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete news" },
      { status: 500 }
    );
  }
}
