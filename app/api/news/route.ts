import { NextRequest, NextResponse } from "next/server";
import { getCollection } from "@/lib/mongodb";
import { getAuthFromRequest } from "@/lib/auth";
import { newsSchema } from "@/lib/schemas";
import { z } from "zod";

export async function GET() {
  try {
    const collection = await getCollection("newsArticles");
    const news = await collection
      .find({})
      .sort({ date: -1 })
      .toArray();
    return NextResponse.json({
      news: news.map(({ _id, ...rest }) => ({ id: _id.toString(), ...rest })),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch news" },
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
    const body = newsSchema.parse(await request.json());
    const collection = await getCollection("newsArticles");
    const result = await collection.insertOne({
      ...body,
      date: body.date ? new Date(body.date) : new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return NextResponse.json(
      { news: { id: result.insertedId.toString(), ...body } },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to create news" },
      { status: 500 }
    );
  }
}
