"use client";

import { EventTeam } from "@prisma/client";
import Modal from "../common/Modal";
import { useFieldArray, useForm } from "react-hook-form";
import InputComponent from "../common/Textfield";
import { cn } from "@/utils/cn";

type Props = {
  event: EventTeam;
  leaderEmail: string;
};
type FormSchema = {
  leaderCollegeName: string;
  areAllMemberFromSameClg: boolean;
  leaderEmail: string;
  teamMemberEmails: { email: string }[];
};

const TeamEventRegistrationModal = ({ event, leaderEmail }: Props) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    defaultValues: {
      areAllMemberFromSameClg: true,
      leaderCollegeName: "",
      leaderEmail,
      teamMemberEmails: [],
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "teamMemberEmails",
    control,
  });
  function onSubmit(values: FormSchema) {
    console.log(values);
  }
  return (
    <Modal type={`team-event-register-modal-${event.id}`}>
      <h1 className="text-2xl font-bold">{event.e_name}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputComponent<FormSchema>
          label="Team Leader Email"
          name="leaderEmail"
          register={register}
          disabled
        />
        <InputComponent<FormSchema>
          label="Leader college name"
          name="leaderCollegeName"
          register={register}
          required
          errorMessage="Please enter the college name of leader"
          isInvalid={!!errors.leaderCollegeName}
          type="text"
        />
        <h1>Enter team members</h1>
        <button onClick={() => append({ email: "" })}>Add Member</button>
        <div className="flex flex-col gap-y-4">
          {fields.map((field, index) => (
            <input
              key={field.id}
              {...register(`teamMemberEmails.${index}.email`, {
                required: true,
              })}
              // className={cn(
              //   "caret-white input-ghost input-md md:input-lg outline-none bg-white/20 text-white/70 placeholder:text-white/50   transition-all duration-300 disabled:opacity-30 rounded-lg ring-0",
              //   !!errors.teamMemberEmails[index] &&
              //     "input-error caret-rose-200 bg-red-500/30"
              // )}
            />
          ))}
        </div>
        <h1>TODO</h1>
      </form>
    </Modal>
  );
};

export default TeamEventRegistrationModal;
