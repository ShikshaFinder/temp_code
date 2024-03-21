"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import useModal, { ModalType } from "@/hooks/useModal";
import { cn } from "@/utils/cn";
import { X } from "lucide-react";

type Props = {
  children: React.ReactNode;
  type: ModalType;
  className?: string;
};

const Modal = ({ children, type: lModalType, className }: Props) => {
  const { type, closeModal, isOpen } = useModal();
  const open = isOpen && type == lModalType;
  useEffect(() => {
    function handleEscapeKey(e: KeyboardEvent) {
      if (e.key === "Escape" || e.key === "Esc") {
        closeModal();
      }
    }
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [closeModal]);
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0, translateY: "100%" }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
              "fixed z-20 bottom-0 left-0 right-0 rounded-t-xl bg-gray-800 p-6 min-h-[400px] max-h-screen overflow-auto",
              className
            )}
          >
            <header>
              <button
                onClick={closeModal}
                className="absolute right-6 top-6 text-white p-2 center bg-white/20 rounded-full transition_sl hover:bg-white/30"
                title="Close modal"
              >
                <X />
              </button>
            </header>
            <div className="py-6 px-4 mt-4">{children}</div>
          </motion.div>
          {/* overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed z-[16] top-0 left-0 right-0 bottom-0 bg-white/10 backdrop-blur-lg cursor-pointer overflow-hidden"
            onClick={closeModal}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
