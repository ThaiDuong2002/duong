"use client";

import { Button } from "@/components/ui/button";
import { COPY } from "@/constants";
import { copyToClipboardWithMeta } from "@/functions";
import { CopyButtonProps } from "@/interface";
import { cn } from "@/lib/utils";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import { useEffect, useState } from "react";

const CopyButton = ({
  value,
  className,
  variant = "ghost",
  event,
  ...props
}: CopyButtonProps) => {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <Button
      size="icon"
      variant={variant}
      className={cn(
        "z-10 relative hover:bg-zinc-700 w-8 [&_svg]:w-5 h-8 [&_svg]:h-5 text-slate-600 hover:text-zinc-50 dark:text-white",
        className
      )}
      onClick={() => {
        copyToClipboardWithMeta(
          value,
          event
            ? {
                name: event,
                properties: {
                  code: value,
                },
              }
            : undefined
        );
        setHasCopied(true);
      }}
      {...props}
    >
      <span className="sr-only">{COPY}</span>
      {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
    </Button>
  );
};

export default CopyButton;
