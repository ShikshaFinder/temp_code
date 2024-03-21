"use client";

import { useEffect, useState } from "react";

type Props = {
  eventDate: string;
};
const returnOnlyPositiveVal = (n: number) => (n < 0 ? 0 : n);

const Countdown = ({ eventDate }: Props) => {
  const deadline = new Date(eventDate).toUTCString();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  function getTime(deadline: string) {
    const time = Date.parse(deadline) - Date.now();
    setDays(returnOnlyPositiveVal(Math.floor(time / (1000 * 60 * 60 * 24))));
    setHours(returnOnlyPositiveVal(Math.floor((time / (1000 * 60 * 60)) % 24)));
    setMinutes(returnOnlyPositiveVal(Math.floor((time / 1000 / 60) % 60)));
    setSeconds(returnOnlyPositiveVal(Math.floor((time / 1000) % 60)));
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className="border-[5px] border-white/50 from-blue-800/20 via-transparent to-orange-500/20 bg-gradient-to-r rounded-md py-6 mx-auto font-bold w-full sm:w-fit px-2 sm:px-14 md:px-20 select-none shadow-white/60 shadow-sm">
      <div className="flex justify-center items-center flex-wrap">
        {/* days */}
        <div className="center flex-col">
          <p>{days}</p>
          <p>Days</p>
        </div>
        <div className="separator_colon">:</div>
        {/* hours */}
        <div className="center flex-col">
          <p>{hours}</p>
          <p>Hours</p>
        </div>
        <div className="separator_colon">:</div>
        {/* minutes */}
        <div className="center flex-col">
          <p>{minutes}</p>
          <p>Minutes</p>
        </div>
        <div className="separator_colon">:</div> {/* seconds */}
        <div className="center flex-col">
          <p>{seconds}</p>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
