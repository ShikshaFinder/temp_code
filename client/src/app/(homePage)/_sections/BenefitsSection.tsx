"use client";

import BenefitCard from "@/components/BenefitCard";
import { BENEFITS_CARDS } from "@/utils/constants";

const BenefitsSection = () => {
  return (
    <section className="py-[200px] container select-none">
      {/* top text container */}
      <div className="w-full center">
        <div className="w-[90%] md:w-[1000px] font-arial text-center">
          <div className="flex items-center justify-center gap-x-3">
            <div className="h-[1px] w-[40px] bg-orange-400" />
            <p className="text-orange-400 ">Why Profinno?</p>
            <div className="h-[1px] w-[40px] bg-orange-400" />
          </div>
          <h2 className="text-center text-3xl font-bold leading-[40px] my-6">
            Why you should join Event
          </h2>
          <p className="opacity-70">
            Profinno is the one of the most great event where you can showcase
            your marketing skills Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Beatae sapiente at consequuntur ipsa voluptas
            voluptates in accusamus culpa aut vel!
          </p>
        </div>
      </div>

      {/* benefits cards */}
      <div className="flex gap-6 mx-auto flex-wrap items-center justify-center mt-40">
        {BENEFITS_CARDS.map((item, index) => (
          <BenefitCard
            index={index}
            data={item}
            key={item.title + item.description + index + "BENEFITS_CARDS"}
          />
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
