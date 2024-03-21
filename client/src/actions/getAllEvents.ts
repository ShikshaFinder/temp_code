import { EventSolo, EventTeam } from "@prisma/client";

import db from "@/utils/db";

export default async function getAllEvents(): Promise<{
  soloEvents: EventSolo[];
  teamEvents: EventTeam[];
}> {
  try {
    const teamEvents = await db.eventTeam.findMany();
    const soloEvents = await db.eventSolo.findMany();
    return {
      soloEvents,
      teamEvents,
    };
  } catch (error: any) {
    console.log(error);
    return {
      soloEvents: [],
      teamEvents: [],
    };
  }
}

export async function getSoloEvent(): Promise<EventSolo[] | []> {
  try {
    return await db.eventSolo.findMany();
  } catch (error: any) {
    console.error(error);
    return [];
  }
}

export async function getTeamEvent(): Promise<EventTeam[] | []> {
  try {
    return await db.eventTeam.findMany();
  } catch (error: any) {
    console.error(error);
    return [];
  }
}
