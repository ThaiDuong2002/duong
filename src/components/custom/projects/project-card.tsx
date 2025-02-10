import Image from "next/image";

const ProjectCard = ({
  imageSrc,
  projectType,
  title,
  description,
  githubUrl,
}: {
  imageSrc: string;
  projectType: string;
  title: string;
  description: string;
  githubUrl: string;
}) => {
  return (
    <div className="shadow-lg border rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 transform">
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
        <h3 className="h-16 font-bold text-2xl line-clamp-2">
          {title}
        </h3>
        <p className="max-w-full h-12 text-gray-700 text-md dark:text-gray-300 line-clamp-2">
          {description}
        </p>
        <div className="flex justify-center mt-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-blue-500 px-4 py-2 border border-blue-500 rounded-lg text-blue-500 hover:text-white transition-colors duration-300"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
