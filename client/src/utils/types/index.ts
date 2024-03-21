import { LucideIcon } from "lucide-react";

export type IconType = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>
>;

export type BenefitCardType = {
  icon: LucideIcon;
  title: string;
  description: string;
};
