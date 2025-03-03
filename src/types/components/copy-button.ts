import { Event } from "@/lib/events";
import { ButtonProps } from "@/ui/button";

type CopyButtonProps = ButtonProps & {
  value: string;
  src?: string;
  event?: Event["name"];
};

export type { CopyButtonProps };
