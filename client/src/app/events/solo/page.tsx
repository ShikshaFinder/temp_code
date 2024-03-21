import { Suspense } from "react";

import { getSoloEvent } from "@/actions/getAllEvents";
import EventCard from "../_components/EventCards";
import SimpleLoader from "../_components/SimpleLoader";

const SoloEventsPage = async () => {
  const soloEvents = await getSoloEvent();
  return (
    <Suspense fallback={<SimpleLoader />}>
      <div className="py-20">
        <div className="flex justify-center flex-wrap gap-[120px] gap-y-20 w-full items-center">
          {soloEvents.map((event) => (
            <EventCard event={event} key={event.id} isTeam={false} />
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export default SoloEventsPage;
