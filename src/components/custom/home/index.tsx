"use client";

import { Button } from "@/components/ui/button";
import { I18nConstants } from "@/constants";
import { scrollToSection } from "@/functions";
import { useTranslations } from "next-intl";
import Image from "next/image";
import MaxWidthWrapper from "../max-width-wrapper";

const Home = ({ id }: { id?: string }) => {
  const home = I18nConstants.home;
  const t = useTranslations(home.id);
  return (
    <div className="relative min-h-screen" id={id}>
      <div className="-z-50 absolute inset-0 min-h-screen">
        <Image
          src="/profile-background.jpg"
          fill
          alt=""
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-0"></div>
      </div>
      <MaxWidthWrapper className="flex flex-col justify-center items-center mt-28 sm:mt-40 mb-12 text-center">
        <div className="flex justify-center items-center space-x-2 bg-white hover:bg-white/50 shadow-md backdrop-blur mb-4 px-7 py-2 border border-gray-200 hover:border-gray-300 rounded-full max-w-fit overflow-hidden transition-all x-auto">
          <p className="font-semibold text-gray-700 text-sm">
            {t(home.greeting)}
          </p>
        </div>
        <h1 className="max-w-5xl font-bold text-white text-5xl md:text-6xl lg:text-7xl">
          {t(home.pronouns)}{" "}
          <span className="text-blue-400">{t(home.job)}</span>
        </h1>
        <p className="mt-5 max-w-prose text-zinc-200 sm:text-lg">
          {t(home.description)}
        </p>
        <div className="flex space-x-3">
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 mt-5 rounded-full text-white"
            onClick={() => scrollToSection(home.projects)}
          >
            {t(home.projects)}
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="bg-white mt-5 rounded-full text-black"
            onClick={() => scrollToSection(home.contact)}
          >
            {t(home.contact)}
          </Button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Home;
