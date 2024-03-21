"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

import { NAV_ITEMS_ARRAY } from "@/utils/constants";
import useDrawer from "@/hooks/useDrawer";
import useModal from "@/hooks/useModal";

import Button from "./Button";

const Drawer = () => {
  const { isOpen: sideBar, toggleOpen: setSideBar } = useDrawer();
  const session = useSession();
  const modal = useModal();
  return (
    <>
      <AnimatePresence>
        {sideBar && (
          <>
            <motion.div
              initial={{ y: "-100%" }}
              animate={{
                y: 0,
              }}
              exit={{
                y: "100%",
              }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed bg-[#222c5675] backdrop-blur-lg text-white shadow-lg top-0 right-0 z-10 w-full h-screen p-5 overflow-hidden flex flex-col justify-between"
            >
              {/* close button */}
              <div>
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: false }}
                  whileTap={{ scale: 0.8 }}
                  onClick={setSideBar}
                  className=" text-white/80 absolute bottom-10 right-6 m-2"
                >
                  <X size={40} />
                </motion.button>
              </div>
              <div className="flex flex-col items-center justify-evenly my-20 h-full text-3xl opacity-60">
                {NAV_ITEMS_ARRAY.map((item, index) => (
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    key={item.path + item.name + "DRAWER_ITEMS_LINK" + index}
                    onClick={setSideBar}
                  >
                    <Link href={item.path}>{item.name}</Link>
                  </motion.div>
                ))}
              </div>
              <div className=" absolute bottom-10 left-6 m-2">
                <Button
                  label={session?.data?.user?.email ? "Logout" : "Login"}
                  onClick={() => {
                    setSideBar();
                    session?.data?.user?.email
                      ? signOut()
                      : modal.openModal("loginModal");
                  }}
                  variant={session?.data?.user?.email ? "secondary" : "primary"}
                />
              </div>
            </motion.div>

            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{ type: "spring", bounce: 0, duration: 0.2 }}
              onClick={setSideBar}
              className="bg-black/50 px-5 fixed h-full w-full flex items-center justify-center inset-0 z-[5] overflow-hidden backdrop-blur-md"
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Drawer;
