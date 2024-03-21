import Image from "next/image";

const AboutEventSection = () => {
  return (
    <div>
      <div className="bg-orange-500 px-10 md:px-20 py-[150px] group">
        <div className="grid md:grid-cols-2">
          <div className="image md:m-[1rem]">
            <Image
              src="/images/ldtalks.jpg"
              alt="About Us"
              width={600}
              height={600}
              className="rounded-lg pointer-events-none group-hover:scale-110 transition_sl"
            />
          </div>
          <div className="text mt-[2rem] md:m-[1rem]">
            <h1 className="text-[24px] text-bold">About the Event</h1> <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              iure, ut molestiae blanditiis magnam aliquam possimus natus est in
              et voluptates expedita earum, porro quis non vel asperiores
              similique fugiat, nihil saepe ullam obcaecati eveniet? Corporis
              perspiciatis enim esse nihil?
            </p>{" "}
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              iure, ut molestiae blanditiis magnam aliquam possimus natus est in
              et voluptates expedita earum, porro quis non vel asperiores
              similique fugiat, nihil saepe ullam obcaecati eveniet? Corporis
              perspiciatis enim esse nihil?
            </p>{" "}
            <br />
            <p>
              <span className="rounded-full bg-blue-800 p-[1rem] text-bold">
                25th
              </span>{" "}
              March 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEventSection;
