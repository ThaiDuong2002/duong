import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  EMAIL_ADDRESS,
  GITHUB,
  GITHUB_URL,
  LINKEDIN,
  LINKEDIN_URL,
  PHONE_NUMBER,
} from "@/constants";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import CopyButton from "../copy-button";

const Contact = () => {
  const t = useTranslations("contact");

  return (
    <div className="py-10">
      <div className="mx-auto max-w-screen-lg border rounded-lg">
        <div className="flex items-center justify-center h-20 bg-gray-200 dark:bg-gray-700 rounded-t-lg">
          <span className="text-4xl text-slate-600 dark:text-white">
            {t("title")}
          </span>
        </div>
        <div className="flex items-start justify-center h-auto bg-white/75 dark:bg-black my-5">
          <div className="max-w-screen-sm mx-auto w-full px-10 flex flex-col items-center justify-center gap-5">
            <div className="flex items-center justify-between w-full border rounded-md p-4">
              <div className="flex items-center space-x-4">
                <Mail size={32} />
                <div className="flex-1 space-y-1">
                  <p className="text-lg font-medium leading-none">
                    {t("email")}
                  </p>
                  <p className="text-lg text-muted-foreground">
                    {EMAIL_ADDRESS}
                  </p>
                </div>
              </div>
              <CopyButton value={EMAIL_ADDRESS} />
            </div>
            <div className="flex items-center justify-between w-full border rounded-md p-4">
              <div className="flex items-center space-x-4">
                <Phone size={32} />
                <div className="flex-1 space-y-1">
                  <p className="text-lg font-medium leading-none">
                    {t("phone")}
                  </p>
                  <p className="text-lg text-muted-foreground">
                    {PHONE_NUMBER}
                  </p>
                </div>
              </div>
              <CopyButton value={PHONE_NUMBER} />
            </div>
            <div className="flex items-center justify-between space-x-5">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={GITHUB_URL} target="_blank">
                      <Button
                        size="icon"
                        variant="default"
                        className="[&_svg]:h-7 [&_svg]:w-7 rounded-full dark:hover:bg-gray-300 hover:bg-gray-700"
                      >
                        <Github className="fill-white dark:fill-black" />
                        <span className="sr-only">github</span>
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>{GITHUB}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={LINKEDIN_URL} target="_blank">
                      <Button
                        size="icon"
                        variant="default"
                        className="[&_svg]:h-7 [&_svg]:w-7 rounded-sm bg-sky-600 hover:bg-sky-700"
                      >
                        <Linkedin fill="white" color="white" />
                        <span className="sr-only">linkedin</span>
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>{LINKEDIN}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
