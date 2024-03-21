import db from "@/utils/db";
import { EventSolo, EventTeam } from "@prisma/client";

export async function getSoloEventById(id: string): Promise<EventSolo | null> {
  try {
    return await db.eventSolo.findUnique({
      where: { id },
    });
  } catch (error: any) {
    console.error(error);
    return null;
  }
}

export async function getTeamEventById(id: string): Promise<EventTeam | null> {
  try {
    return await db.eventTeam.findUnique({
      where: { id },
    });
  } catch (error: any) {
    console.error(error);
    return null;
  }
}
