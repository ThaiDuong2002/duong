import { ButtonProps } from "@/components/ui/button";
import { Event } from "@/lib/events";

interface CopyButtonProps extends ButtonProps {
  value: string;
  src?: string;
  event?: Event["name"];
}

export type { CopyButtonProps };
