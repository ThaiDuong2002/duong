import { JSX } from "react";

interface FooterItemsProps {
  id: string;
  items: Array<{
    id: string;
    icon: JSX.Element;
  }>;
}

export type { FooterItemsProps };
