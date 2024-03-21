import { User, Users } from "lucide-react";
import Link from "next/link";

const CONSTANTS = [
  {
    icon: User,
    title: "Solo events",
    description:
      "Step into the spotlight and embrace the thrill of independence. This event is your opportunity to break free from the constraints of group dynamics and shine as the sole architect of your destiny. Whether you're an aspiring artist, a budding entrepreneur, or a fearless adventurer, the stage is yours to conquer.",
    link: "/events/solo",
  },
  {
    icon: Users,
    title: "Group events",
    description:
      "Immerse yourself in a dynamic array of workshops, seminars, and activities designed to ignite your curiosity, spark creativity, and unleash your potential. Whether you're exploring new skills, honing your talents, or seeking inspiration, there's something for everyone to enjoy.",
    link: "/events/team",
  },
];

const Events = async () => {
  return (
    <div className="py-20 flex flex-col gap-y-10">
      {CONSTANTS.map((item, index) => (
        <div key={index + "EVENTS_PAGE_HERO_CARDS"}>
          <div className="w-full p-6 border border-gray-600 rounded-lg hover:shadow-lg hover:shadow-gray-800 transition-all duration-300">
            {/* icon and name */}
            <div className="flex items-center gap-x-5">
              <item.icon />
              <h1 className="text-2xl font-bold">{item.title}</h1>
            </div>
            {/* content */}
            <div className="mt-[100px]">
              <p className="text-xl font-bold text-gray-500 my-4">
                {item.description}
              </p>
              <Link href={item.link} className="btn btn-primary mt-10">
                Go to {item.title}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
