import { z } from "zod";

export const newsSchema = z.object({
  title: z.string().min(1, "Title is required").max(200),
  description: z.string().min(1, "Description is required").max(500),
  content: z.string().max(10000).optional().default(""),
  image: z.string().url("Image must be a valid URL").min(1, "Image is required"),
  category: z.string().min(1, "Category is required").max(100),
  featured: z.boolean().optional().default(false),
  date: z.string().optional(),
});

export const eventSchema = z.object({
  title: z.string().min(1, "Title is required").max(200),
  description: z.string().min(1, "Description is required").max(500),
  content: z.string().max(10000).optional().default(""),
  image: z.string().url("Image must be a valid URL").min(1, "Image is required"),
  location: z.string().max(200).optional().default(""),
  category: z.string().min(1, "Category is required").max(100),
  featured: z.boolean().optional().default(false),
  date: z.string().optional(),
});
