import { Suspense } from "react";

import EventCard from "../_components/EventCards";
import SimpleLoader from "../_components/SimpleLoader";

import { getTeamEvent } from "@/actions/getAllEvents";

const TeamEventPage = async () => {
  const teamEvent = await getTeamEvent();
  return (
    <Suspense fallback={<SimpleLoader />}>
      <div className="py-20">
        <div className="flex justify-center flex-wrap gap-[120px] gap-y-20 w-full items-center">
          {teamEvent.map((event) => (
            <EventCard event={event} key={event.id} isTeam={true} />
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export default TeamEventPage;
