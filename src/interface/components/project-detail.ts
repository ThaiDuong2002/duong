interface ProjectDetailProps {
  id: string;
  imageListOption?: "multiple" | "single";
  detailInfo: {
    imageList: string[] | null;
    overview: {
      id: string;
      name: string;
      applications: {
        application: string;
        overviewList: string[];
        imageList: string[] | null;
      }[];
    };
    technologies: {
      id: string;
      name: string;
      techs: {
        application: string;
        techList: { name: string; description: string }[];
        techImages: string[] | null;
      }[];
    };
    architectures: {
      id: string;
      name: string;
      architectureList:
        | {
            image: string;
            application: string;
            architectureList: string[] | null;
          }[]
        | null;
    };
  };
}

export type { ProjectDetailProps };
