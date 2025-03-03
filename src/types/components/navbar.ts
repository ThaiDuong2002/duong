import { ReactNode } from "react";

type NavbarItemsProps = {
  id: string;
  items: Array<{
    id: string;
    icon: ReactNode;
  }>;
};

export type { NavbarItemsProps };
