"use client";

import { BenefitCardType } from "@/utils/types";
import Modal from "../common/Modal";

type Props = {
  index: number;
  item: BenefitCardType;
};

const ViewBenefitDetails = ({ index, item }: Props) => {
  return (
    <Modal type={`detail-benefit-card-${index}`}>
      <div className="flex items-center h-full gap-10 flex-col md:flex-row">
        <i className="p-8 center text-white rounded-lg bg-primaryBlue">
          <item.icon size={60} />
        </i>
        <div>
          <h1 className="text-3xl font-bold mb-6 ">{item.title}</h1>
          <p className="text-lg opacity-70 font-semibold">{item.description}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ViewBenefitDetails;
