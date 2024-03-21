"use client";

import Image from "next/image";
import { useState } from "react";
import { LogInIcon } from "lucide-react";
import { signIn } from "next-auth/react";

import Modal from "../common/Modal";
import Button from "../common/Button";
import Divider from "../common/Divider";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";

const LoginModal = () => {
  const [haveAccount, setHaveAccount] = useState(true);
  return (
    <Modal type="loginModal">
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto px-6 md:px-10 select-none">
        {/* left section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image
            src="/images/logo_440x239.png"
            alt="logo"
            height={300}
            width={500}
            className="pointer-events-none"
          />
        </div>
        {/* right section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl hidden md:block font-bold text-center md:text-left mb-6 font-arial">
            {haveAccount
              ? "Have you already been here?"
              : "Step in to the journey"}
          </h1>
          {haveAccount ? <LoginForm /> : <SignUpForm />}
          <Divider label="or" />
          <div className="flex flex-col md:flex-row gap-4 w-full mx-auto md:mx-0 mt-6">
            {/* google login */}
            <Button
              type="button"
              label="Continue with Google"
              variant="primary"
              leftChild={
                <div className="md:flex hidden items-center justify-center  w-8 h-8 rounded-full -ml-2 bg-white mr-1 md:mr-4 ">
                  <Image
                    src="/images/google.png"
                    alt="Google "
                    height={24}
                    width={24}
                  />
                </div>
              }
              className="text-sm md:text-lg h-fit"
              onClick={() => signIn("google")}
            />
            {/* already have an account */}
            <Button
              label={`${!haveAccount ? "Already" : "Don't"} have an account`}
              variant="secondary"
              className="text-sm md:text-lg h-fit"
              leftChild={
                <span className="mr-2 hidden md:block">
                  <LogInIcon size={20} color="#fff" />
                </span>
              }
              onClick={() => {
                setHaveAccount((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
