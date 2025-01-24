import { ReactNode } from "react";

interface FooterItemsProps {
  id: string;
  items: Array<{
    id: string;
    icon: ReactNode;
  }>;
}

export type { FooterItemsProps };
