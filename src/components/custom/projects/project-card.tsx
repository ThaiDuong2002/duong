"use client";

import { buttonVariants } from "@/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import Image from "next/legacy/image";
import Link from "next/link";
import { ReactNode } from "react";

const ProjectCard = ({
  imageSrc,
  projectType,
  title,
  description,
  githubUrl,
  multipleGit = false,
  children,
}: {
  imageSrc: string;
  projectType: string;
  title: string;
  description: string;
  githubUrl?: string | { name: string; url: string }[];
  multipleGit: boolean;
  children?: ReactNode;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="shadow-lg dark:shadow-gray-700 border rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer transform">
          <div className="relative pb-[56.25%] w-full h-0">
            <Image
              src={imageSrc}
              alt={title}
              layout="responsive"
              width={16}
              height={9}
              objectFit="cover"
              className="rounded-t-lg"
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="space-y-3 px-10 py-5">
            <p className="text-gray-500 text-md uppercase">{projectType}</p>
            <h3 className="h-16 font-bold text-2xl line-clamp-2">{title}</h3>
            <p className="max-w-full h-12 text-gray-700 text-md dark:text-gray-300 line-clamp-2">
              {description}
            </p>
            {!multipleGit && (
              <div className="flex justify-center mt-4">
                <Link
                  href={(githubUrl as string) || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "outline",
                    size: "sm",
                  })}
                  onClick={(e) => e.stopPropagation()}
                >
                  View on GitHub
                </Link>
              </div>
            )}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="[&>button]:hidden max-w-screen-lg max-sm:max-w-[90vw] max-md:max-w-[90vw] max-h-[80vh] overflow-y-auto scrollbar-hide">
        <DialogTitle></DialogTitle>
        <DialogDescription></DialogDescription>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
