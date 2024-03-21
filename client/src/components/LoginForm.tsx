"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { enqueueSnackbar } from "notistack";

import useModal from "@/hooks/useModal";

import Button from "./common/Button";
import InputComponent from "./common/Textfield";

type FormSchema = {
  email: string;
  password: string;
};
const LoginForm = () => {
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
  const [loading, setLoading] = useState(false);
  function onSubmit(data: FormSchema) {
    setLoading(true);
    signIn("credentials", { ...data, redirect: false })
      .then((res) => {
        if (!res?.ok) {
          enqueueSnackbar(res?.error ?? "something went wrong", {
            variant: "error",
          });
          setError("root", { message: res?.error ?? "Something went wrong" });
        } else {
          enqueueSnackbar("Login Success", { variant: "success" });
          closeModal();
        }
      })
      .catch((_) => {
        enqueueSnackbar("Something went wrong", { variant: "error" });
      })
      .finally(() => setLoading(false));
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
          disabled={loading}
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
          disabled={loading}
          errorMessage="Please enter valid password"
          isInvalid={!!errors.password}
          required
        />
        <div>
          <Button
            type="submit"
            label="Login"
            variant="primary"
            disabled={loading}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
