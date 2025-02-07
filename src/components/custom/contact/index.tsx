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
    <div className="max-md:px-5 py-10">
      <div className="border-gray-200 dark:border-gray-600 mx-auto border rounded-lg max-w-screen-lg">
        <div className="flex justify-center items-center bg-gray-200 dark:bg-gray-700 rounded-t-lg h-20">
          <span className="text-4xl text-slate-600 dark:text-white">
            {t("title")}
          </span>
        </div>
        <div className="flex justify-center items-start bg-white/75 dark:bg-black my-5 h-auto">
          <div className="flex flex-col justify-center items-center gap-5 mx-auto px-10 max-md:px-3 w-full max-w-screen-sm">
            <ContactCard
              icon={<Mail className="size-8 max-md:size-6" />}
              title={t("email")}
              subtitle={EMAIL_ADDRESS}
              copyValue={EMAIL_ADDRESS}
            />
            <ContactCard
              icon={<Phone className="size-8 max-md:size-6" />}
              title={t("phone")}
              subtitle={PHONE_NUMBER}
              copyValue={PHONE_NUMBER}
            />
            <div className="flex justify-between items-center space-x-5">
              <SocialButton
                href={GITHUB_URL}
                tooltip={GITHUB}
                button={
                  <Button
                    size="icon"
                    variant="default"
                    className="dark:hover:bg-gray-300 hover:bg-gray-700 rounded-full [&_svg]:w-7 max-md:[&_svg]:w-5 [&_svg]:h-7 max-md:[&_svg]:h-5 max-md:size-8"
                  >
                    <Github className="dark:fill-black fill-white" />
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
                    className="bg-sky-600 hover:bg-sky-700 rounded-sm [&_svg]:w-7 max-md:[&_svg]:w-5 [&_svg]:h-7 max-md:[&_svg]:h-5 max-md:size-8"
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
export { ContactCard, SocialButton };
