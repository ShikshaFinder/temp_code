"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";

import { amatic_sc } from "@/utils/fonts";
import Button from "@/components/common/Button";

const HeroSection = () => {
  return (
    <section className="select-none w-full h-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/ldtalks.jpg"
        alt="ldtalks"
        className="w-full h-full absolute z-0 inset-0"
      />
      <div className="min-h-dvh h-full w-full bg-primaryBlue center opacity-90 pt-[80px]">
        {/* center text container */}
        <div>
          {/* venue container */}
          <div className="center w-full my-10">
            <a
              href="https://maps.app.goo.gl/ofggcbMtvG7sE7xy7"
              className="bg-white/10 group select-none hover:bg-white/20 px-6 py-4 rounded-md transition-all"
              target="_blank"
            >
              <div className="flex items-center opacity-80 group-hover:opacity-100">
                <MapPin />
                &nbsp;&nbsp;{" "}
                <p className="underline-offset-2">LDEC College, Navrangpura!</p>
              </div>
            </a>
          </div>
          <div>
            <h1 className="text-white text-4xl font-bold text-center">
              Innovator club LDCE presents
            </h1>
            {/* <div className={styles.box__wraps_img}> */}
            <Image
              src="/images/profinno_1.png"
              alt="profinno"
              width={400}
              className="pointer-events-none mx-auto"
              height={200}
            />
            {/* </div> */}
            <h3
              className={`text-center text-5xl text-white ${amatic_sc.className} font-bold`}
            >
              Let your talent{" "}
              <span className="text-[var(--primary-orange)]">shine!</span>
            </h3>
            {/* register now button */}
            <Button
              label="Show events"
              size="small"
              className="my-10 mx-auto"
            />
          </div>
        </div>
      </div>
      {/* <div className="overflow-hidden h-screen w-screen absolute inset-0">
        <Boxes />
      </div> */}
    </section>
  );
};

export default HeroSection;
