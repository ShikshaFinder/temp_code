import { Amatic_SC } from "next/font/google";

const amatic_sc = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin", "vietnamese"],
  variable: "--amatic",
  adjustFontFallback: true,
});

export { amatic_sc };
