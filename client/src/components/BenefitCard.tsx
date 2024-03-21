"use client";

import { BenefitCardType } from "@/utils/types";
import ViewBenefitDetails from "./modals/ViewBenefitDetails";
import useModal from "@/hooks/useModal";

type Props = {
  data: BenefitCardType;
  index: number;
};

const BenefitCard = ({ data: item, index }: Props) => {
  const { openModal } = useModal();
  return (
    <>
      <div
        role="button"
        className="cursor-pointer w-[400px] h-[300px] p-8 rounded-md bg-gray-700/50 hover:bg-gray-700/80 transition duration-300 group"
        onClick={() => openModal(`detail-benefit-card-${index}`)}
      >
        {/* top section */}
        <div className="flex justify-between">
          <div className="bg-primaryBlue p-6 center rounded-md size-[70px] group-hover:opacity-70 transition_sl">
            <item.icon size={60} />
          </div>
          <p className="text-5xl font-bold opacity-20 group-hover:opacity-40 transition transition_sl">
            0{index + 1}
          </p>
        </div>

        {/* content */}
        <div>
          <h1 className="text-2xl tracking-tight opacity-70 font-bold my-6 group-hover:opacity-90 transition_sl">
            {item.title}
          </h1>
          <p className="text-base opacity-60 line-clamp-3 group-hover:opacity-80">
            {item.description}
          </p>
        </div>
      </div>
      <ViewBenefitDetails item={item} index={index} />
    </>
  );
};

export default BenefitCard;
