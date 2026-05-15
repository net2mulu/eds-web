"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageUpload } from "./image-upload";
import type { EventItem } from "@/lib/events-data";

interface EventsFormProps {
  initialData?: EventItem;
  isEditing?: boolean;
}

const categories = [
  { value: "webinar", label: "Webinar" },
  { value: "conference", label: "Conference" },
  { value: "festival", label: "Festival" },
  { value: "workshop", label: "Workshop" },
];

export function EventsForm({ initialData, isEditing }: EventsFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    date: initialData?.date || "",
    time: initialData?.time || "",
    location: initialData?.location || "",
    image: initialData?.image || "",
    category: initialData?.category || "webinar",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = isEditing
        ? `/api/events/${initialData!.id}`
        : "/api/events";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to save");

      router.push("/admin/events");
      router.refresh();
    } catch {
      alert("Failed to save event");
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
              placeholder="Event title"
            />
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Select
              value={form.category}
              onValueChange={(v) =>
                setForm({ ...form, category: v as EventItem["category"] })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
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
            <div>
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                required
                placeholder="e.g. 7:00 PM EST"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              required
              placeholder="e.g. Online via Zoom"
            />
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
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          required
          rows={4}
          placeholder="Event description"
        />
      </div>

      <div className="flex gap-4">
        <Button
          type="submit"
          disabled={loading}
          className="bg-navy-900 hover:bg-navy-800"
        >
          {loading ? "Saving..." : isEditing ? "Update Event" : "Create Event"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/admin/events")}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
