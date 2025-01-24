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
        "relative z-10 h-8 w-8 text-slate-600 dark:text-white hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:h-5 [&_svg]:w-5",
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
