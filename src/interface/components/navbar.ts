import { JSX } from "react";

interface NavbarItemsProps {
  id: string;
  items: Array<{
    id: string;
    icon: JSX.Element;
  }>;
}

export type { NavbarItemsProps };
