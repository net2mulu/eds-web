import { prisma } from "./prisma";

export type EventItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
};

export async function getAllEvents(): Promise<EventItem[]> {
  return prisma.event.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getEventById(
  id: number
): Promise<EventItem | null> {
  return prisma.event.findUnique({ where: { id } });
}

export async function createEvent(
  event: Omit<EventItem, "id">
): Promise<EventItem> {
  return prisma.event.create({ data: event });
}

export async function updateEvent(
  id: number,
  data: Partial<Omit<EventItem, "id">>
): Promise<EventItem | null> {
  try {
    return await prisma.event.update({ where: { id }, data });
  } catch {
    return null;
  }
}

export async function deleteEvent(id: number): Promise<boolean> {
  try {
    await prisma.event.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}
