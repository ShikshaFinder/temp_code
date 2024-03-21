"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const EventLayout = ({ children }: Props) => {
  const pathname = usePathname();
  const lastPathname = pathname.split("/")[2];
  return (
    <div className="bg-primaryBlue h-full w-full">
      <div className="container py-20">
        <ul className="flex flex-wrap text-sm font-medium text-center border-gray-700 border-b  text-gray-400">
          <li className="me-2">
            <Link
              href="/events/team"
              aria-current="page"
              className={cn(
                "inline-block hover:bg-gray-800 hover:text-blue-500 transition-all duration-300 p-4 rounded-t-lg active  text-white/80",
                { "bg-gray-800 text-blue-500": lastPathname === "team" }
              )}
            >
              Team Events
            </Link>
          </li>
          <li className="me-2">
            <Link
              href="/events/solo"
              className={cn(
                "inline-block hover:bg-gray-800 hover:text-blue-500 transition-all duration-300 p-4 rounded-t-lg active  text-white/80",
                { "bg-gray-800 text-blue-500": lastPathname === "solo" }
              )}
            >
              Solo Events
            </Link>
          </li>
        </ul>
        {children}
      </div>
    </div>
  );
};

export default EventLayout;
