import { ReactNode } from "react";

type FooterItemsProps = {
  id: string;
  items: Array<{
    id: string;
    icon: ReactNode;
  }>;
};

export type { FooterItemsProps };
