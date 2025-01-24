import { Button } from "@/components/ui/button";
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
import ContactCard from "./contact-card";
import SocialButton from "./social-button";

const Contact = () => {
  const t = useTranslations("contact");

  return (
    <div className="py-10">
      <div className="mx-auto max-w-screen-lg border rounded-lg border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-center h-20 bg-gray-200 dark:bg-gray-700 rounded-t-lg">
          <span className="text-4xl text-slate-600 dark:text-white">
            {t("title")}
          </span>
        </div>
        <div className="flex items-start justify-center h-auto bg-white/75 dark:bg-black my-5">
          <div className="max-w-screen-sm mx-auto w-full px-10 flex flex-col items-center justify-center gap-5">
            <ContactCard
              icon={<Mail size={32} />}
              title={t("email")}
              subtitle={EMAIL_ADDRESS}
              copyValue={EMAIL_ADDRESS}
            />
            <ContactCard
              icon={<Phone size={32} />}
              title={t("phone")}
              subtitle={PHONE_NUMBER}
              copyValue={PHONE_NUMBER}
            />
            <div className="flex items-center justify-between space-x-5">
              <SocialButton
                href={GITHUB_URL}
                tooltip={GITHUB}
                button={
                  <Button
                    size="icon"
                    variant="default"
                    className="[&_svg]:h-7 [&_svg]:w-7 rounded-full dark:hover:bg-gray-300 hover:bg-gray-700"
                  >
                    <Github className="fill-white dark:fill-black" />
                    <span className="sr-only">github</span>
                  </Button>
                }
              />
              <SocialButton
                href={LINKEDIN_URL}
                tooltip={LINKEDIN}
                button={
                  <Button
                    size="icon"
                    variant="default"
                    className="[&_svg]:h-7 [&_svg]:w-7 rounded-sm bg-sky-600 hover:bg-sky-700"
                  >
                    <Linkedin fill="white" color="white" />
                    <span className="sr-only">linkedin</span>
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
