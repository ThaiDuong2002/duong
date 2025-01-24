import { ReactNode } from "react";

interface NavbarItemsProps {
  id: string;
  items: Array<{
    id: string;
    icon: ReactNode;
  }>;
}

export type { NavbarItemsProps };
