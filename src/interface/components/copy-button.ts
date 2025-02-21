import { Event } from "@/lib/events";
import { ButtonProps } from "@/ui/button";

interface CopyButtonProps extends ButtonProps {
  value: string;
  src?: string;
  event?: Event["name"];
}

export type { CopyButtonProps };
