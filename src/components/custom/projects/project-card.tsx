import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const ProjectCard = ({
  imageSrc,
  projectType,
  title,
  description,
  githubUrl,
  multipleGit,
  children,
}: {
  imageSrc: string;
  projectType: string;
  title: string;
  description: string;
  githubUrl?: string;
  multipleGit: boolean;
  children?: ReactNode;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="shadow-lg border rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer transform">
          <div className="relative w-full h-56">
            <Image
              src={imageSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="space-y-3 px-10 py-5">
            <p className="text-gray-500 text-md uppercase">{projectType}</p>
            <h3 className="h-16 font-bold text-2xl line-clamp-2">{title}</h3>
            <p className="max-w-full h-12 text-gray-700 text-md dark:text-gray-300 line-clamp-2">
              {description}
            </p>
            {multipleGit && (
              <div className="flex justify-center mt-4">
                <Link
                  href={githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "outline",
                    size: "sm",
                  })}
                >
                  View on GitHub
                </Link>
              </div>
            )}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="[&>button]:hidden">
        <DialogTitle>{title}</DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
