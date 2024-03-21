/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
// import "@/styles/club-head.css"

type Props = {
  name: string;
  url: string;
  position: string;
};

export default function ClubHead({ name, url, position }: Props) {
  return (
    <>
      <div className="card flex flex-col m-auto">
        <Image
          src={url}
          alt={name}
          height={500}
          width={400}
          className="rounded-lg pointer-events-none"
        />
        <h1 className="text-[2rem] text-start mt-[1rem]  bebas-neue-regular">
          {name}
        </h1>
        <h2 className="text-[1rem] text-gray-500 text-start mb-[3rem] bebas-neue-regular">
          {position}
        </h2>
      </div>
    </>
  );
}
