import { ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  copyValue: string;
}

interface SocialButtonProps {
  href: string;
  button: ReactNode;
  tooltip: string;
}

export type { ContactCardProps, SocialButtonProps };
