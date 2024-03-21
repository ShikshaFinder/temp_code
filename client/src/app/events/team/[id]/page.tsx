/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Suspense } from "react";

import SimpleLoader from "../../_components/SimpleLoader";
import RenderMD from "@/components/common/RenderMD";

import { getTeamEventById } from "@/actions/getEvebtsById";
import ClientClickHandler from "./ClientClickHandler";

type Props = {
  params: { id: string };
};

const TeamEventDetail = async ({ params }: Props) => {
  const event = await getTeamEventById(params.id);
  if (event == null)
    return (
      <div className="my-20 mx-auto">
        Event not found for some reason... <br />
        Please contact to the admin.
      </div>
    );
  return (
    <Suspense fallback={<SimpleLoader />}>
      <div className="my-20 mx-8 md:mx-0">
        <img
          src={event.e_image}
          alt="Event Image"
          className="w-full h-[700px] rounded-[30px] pointer-events-none object-cover"
        />
        <div className="my-20 divider bg-gray-400 h-[0.2px]" />
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
          {/* content */}
          <div>
            <RenderMD markdown={event.e_description} />
          </div>
          {/* register now section */}
          <div className="static md:sticky md:top-10 w-full min-w-[400px] md:w-auto">
            <div className="bg-primary rounded-[20px] px-4 py-8 mt-20 md:mt-0">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-semibold">Register Now!</h1>
                <Image
                  src="/images/logo_95x48.png"
                  alt="Logo"
                  height={88}
                  width={96}
                  className="pointer-events-none"
                />
              </div>
              <ClientClickHandler event={event} />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default TeamEventDetail;
