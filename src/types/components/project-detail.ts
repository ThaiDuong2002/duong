type ProjectDetailProps = {
  id: string;
  overviewOption?: "multiple" | "single";
  technologiesOption?: "multiple" | "single";
  architecturesOption?: "multiple" | "single";
  detailInfo: {
    imageList: string[] | null;
    overview: {
      id: string;
      name: string;
      applications: {
        id: string;
        application: string;
        overviewList: string[];
        imageList: string[] | null;
      }[];
    };
    technologies: {
      id: string;
      name: string;
      techs: {
        id: string;
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
            id: string;
            image: string;
            application: string;
            architectureList: string[] | null;
          }[]
        | null;
    };
  };
};

export type { ProjectDetailProps };
