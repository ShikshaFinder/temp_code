import { Heart, Megaphone, Mic2, Smile, Trophy, Users } from "lucide-react";
import { BenefitCardType } from "./types";

export const NAV_ITEMS_ARRAY = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Teams",
    path: "/teams",
  },
  {
    name: "Events",
    path: "/events",
  },
  {
    name: "Sponsors",
    path: "/sponsors",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const BENEFITS_CARDS: BenefitCardType[] = [
  {
    icon: Mic2,
    title: "Great speaker",
    description:
      "Profinno is the one of the most great event where you can showcase your marketing skills Lorem ipsum dolor sitamet consectetur,adipisicing elit. Beatae sapiente at consequuntur ipsa voluptas",
  },

  {
    icon: Users,
    title: "New people",
    description:
      "Profinno is the one of the most great event where you can showcase your marketing skills Lorem ipsum dolor sitamet consectetur,adipisicing elit. Beatae sapiente at consequuntur ipsa voluptas",
  },
  {
    icon: Megaphone,
    title: "College event",
    description:
      "Profinno is the one of the most great event where you can showcase your marketing skills Lorem ipsum dolor sitamet consectetur,adipisicing elit. Beatae sapiente at consequuntur ipsa voluptas",
  },
  {
    icon: Heart,
    title: "Great inspired",
    description:
      "Profinno is the one of the most great event where you can showcase your marketing skills Lorem ipsum dolor sitamet consectetur,adipisicing elit. Beatae sapiente at consequuntur ipsa voluptas",
  },
  {
    icon: Trophy,
    title: "Networking session",
    description:
      "Profinno is the one of the most great event where you can showcase your marketing skills Lorem ipsum dolor sitamet consectetur,adipisicing elit. Beatae sapiente at consequuntur ipsa voluptas",
  },
  {
    icon: Smile,
    title: "Meet new faces",
    description:
      "Profinno is the one of the most great event where you can showcase your marketing skills Lorem ipsum dolor sitamet consectetur,adipisicing elit. Beatae sapiente at consequuntur ipsa voluptas",
  },
];
