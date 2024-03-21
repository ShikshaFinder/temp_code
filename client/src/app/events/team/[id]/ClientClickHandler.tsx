"use client";

import { EventTeam } from "@prisma/client";
import { useSession } from "next-auth/react";
import { enqueueSnackbar } from "notistack";

import TeamEventRegistrationModal from "@/components/modals/TeamEventRegistrationModal";
import useModal from "@/hooks/useModal";

type Props = {
  event: EventTeam;
};

const ClientClickHandler = ({ event }: Props) => {
  const session = useSession();
  const { openModal } = useModal();
  function handleOpenModal() {
    if (!session.data?.user?.email) {
      enqueueSnackbar("Team leader must need to login for event registration", {
        variant: "info",
      });
      openModal("loginModal");
    } else {
      openModal(`team-event-register-modal-${event.id}`);
    }
  }
  return (
    <>
      <div>
        <button
          onClick={handleOpenModal}
          className="btn btn-md rounded-lg w-full mt-6"
        >
          Register ₹{event.reg_fees}
        </button>
      </div>
      <TeamEventRegistrationModal
        leaderEmail={session.data?.user?.email ?? "Not available"}
        event={event}
      />
    </>
  );
};

export default ClientClickHandler;
