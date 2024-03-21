"use client";

import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";

import Button from "./common/Button";
import InputComponent from "./common/Textfield";

import { trpc } from "@/app/_trpc/client";
import useModal from "@/hooks/useModal";
import { signIn } from "next-auth/react";

type FormSchema = {
  email: string;
  password: string;
};
const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { closeModal } = useModal();
  const { mutate, isPending } = trpc.user.signUp.useMutation();
  function onSubmit(frmData: FormSchema) {
    mutate(frmData, {
      onSuccess(data) {
        if (data.success) {
          enqueueSnackbar(data.msg, { variant: "success" });
          signIn("credentials", frmData);
          closeModal();
        } else {
          enqueueSnackbar(data.msg, { variant: "warning" });
          setError("root", { message: data.msg });
        }
      },
      onError(error) {
        enqueueSnackbar(error.message, { variant: "error" });
      },
    });
  }
  return (
    <div>
      <form
        className="flex flex-col gap-4 w-full mx-auto md:mx-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputComponent<FormSchema>
          type="text"
          label="email"
          name="email"
          register={register}
          disabled={isPending}
          errorMessage="Invalid email"
          isInvalid={!!errors.email}
          pattern={
            new RegExp(
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            )
          }
          required
        />
        <InputComponent<FormSchema>
          type="password"
          label="password"
          name="password"
          register={register}
          disabled={isPending}
          errorMessage="Please enter valid password"
          isInvalid={!!errors.password}
          required
        />
        <div>
          <Button
            type="submit"
            disabled={isPending}
            label="Create Account"
            variant="secondary"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
