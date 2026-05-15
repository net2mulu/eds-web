"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageUpload } from "./image-upload";
import type { NewsItem } from "@/lib/news-data";

interface NewsFormProps {
  initialData?: NewsItem;
  isEditing?: boolean;
}

const categories = [
  "Policy",
  "Event",
  "Technology",
  "Business",
  "Culture",
  "Arts",
  "Leadership",
];

export function NewsForm({ initialData, isEditing }: NewsFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    content: initialData?.content || "",
    category: initialData?.category || categories[0],
    date: initialData?.date || new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    image: initialData?.image || "",
    featured: initialData?.featured || false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = isEditing
        ? `/api/news/${initialData!.id}`
        : "/api/news";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to save");

      router.push("/admin/news");
      router.refresh();
    } catch {
      alert("Failed to save news item");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
              placeholder="News title"
            />
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Select
              value={form.category}
              onValueChange={(v) => setForm({ ...form, category: v })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
              placeholder="e.g. Jan 14, 2025"
            />
          </div>

          <div className="flex items-center gap-2 pt-2">
            <Switch
              id="featured"
              checked={form.featured}
              onCheckedChange={(v) => setForm({ ...form, featured: v })}
            />
            <Label htmlFor="featured">Featured news (shown in carousel)</Label>
          </div>
        </div>

        <div className="space-y-4">
          <ImageUpload
            currentImage={form.image}
            onUpload={(url) => setForm({ ...form, image: url })}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="description">Short Description</Label>
        <Textarea
          id="description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          required
          rows={3}
          placeholder="Brief description for the card view"
        />
      </div>

      <div>
        <Label htmlFor="content">Full Content</Label>
        <Textarea
          id="content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          rows={8}
          placeholder="Full article content (optional)"
        />
      </div>

      <div className="flex gap-4">
        <Button type="submit" disabled={loading} className="bg-navy-900 hover:bg-navy-800">
          {loading ? "Saving..." : isEditing ? "Update News" : "Create News"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/admin/news")}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
