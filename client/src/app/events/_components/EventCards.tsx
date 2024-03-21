/* eslint-disable @next/next/no-img-element */
"use client";

import { EventSolo, EventTeam } from "@prisma/client";
import Link from "next/link";

type Props =
  | { isTeam: false; event: EventSolo }
  | { isTeam: true; event: EventTeam };

const EventCard = ({ event, isTeam }: Props) => {
  return (
    <div className="p-[10px] rounded-[25px] w-[90%] h-[470px] md:h-[450px] md:w-[390px] bg-primary select-none overflow-auto">
      <img
        className="h-[200px] w-full object-cover rounded-[25px]"
        src={event.e_image}
        alt={event.e_name + " image"}
        title={event.e_image + " image"}
      />
      <div className="pl-4">
        <div className="py-6 flex items-center text-3xl font-bold text-white tracking-wide">
          <h1>{event.e_name}</h1>
          {isTeam ? (
            <span className="text-sm px-2 py-1 ml-4 bg-green-500 rounded-3xl">
              Team Event
            </span>
          ) : (
            <span className="text-sm px-2 py-1 ml-4 bg-sky-500 rounded-3xl">
              Solo Event
            </span>
          )}
        </div>
        <p className="text-white text-lg tracking-wide line-clamp-3 md:line-clamp-2">
          {event.e_description}
        </p>
      </div>
      <Link
        href={`/events/${isTeam ? "team" : "solo"}/${event.id}`}
        className="rounded-[34px] btn w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white border-none"
      >
        View More
      </Link>
    </div>
  );
};

export default EventCard;
