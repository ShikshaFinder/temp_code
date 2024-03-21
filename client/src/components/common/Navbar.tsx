"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { NAV_ITEMS_ARRAY } from "@/utils/constants";
import { cn } from "@/utils/cn";
import useModal from "@/hooks/useModal";
import useDrawer from "@/hooks/useDrawer";

import Button from "./Button";
import Drawer from "./Drawer";

const Navbar = () => {
  const pathname = usePathname();
  const [scrollFlag, setScrollFlag] = useState(false);
  const session = useSession();
  const modal = useModal();
  const { toggleOpen } = useDrawer();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollFlag(true);
      } else {
        setScrollFlag(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "w-full z-[15] text-white select-none bg-primaryBlue transition duration-300",
        pathname == "/" &&
          `top-0 fixed ${scrollFlag ? "bg-primaryBlue" : "bg-transparent"}`
      )}
    >
      <Drawer />
      <div className="container flex items-center justify-between px-8 md:px-2 py-8">
        <Image
          src="/images/logo_440x239.png"
          alt="Logo"
          height={70}
          width={140}
          className="pointer-events-none"
        />
        <ul className="w-auto items-center justify-around hidden md:flex md:w-[50%]">
          {NAV_ITEMS_ARRAY.map((item, i) => (
            <li
              key={item.name + i + "DESKTOP_NAV_ITEMS"}
              className={cn(
                "text-white opacity-80 hover:opacity-100 transition",
                {
                  "opacity-100 underline underline-offset-4":
                    pathname === item.path,
                }
              )}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
          <Button
            label={session?.data?.user?.email ? "Logout" : "Login"}
            onClick={() =>
              session?.data?.user?.email
                ? signOut()
                : modal.openModal("loginModal")
            }
            variant={session?.data?.user?.email ? "secondary" : "primary"}
          />
        </ul>
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={toggleOpen}
          className="block md:hidden pr-2 opacity-60"
        >
          <Menu size={34} />
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
