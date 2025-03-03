import { ReactNode } from "react";

type ContactCardProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  copyValue: string;
};

type SocialButtonProps = {
  href: string;
  button: ReactNode;
  tooltip: string;
};

export type { ContactCardProps, SocialButtonProps };
