import {
  apiContributors,
  githubUrl,
  owner,
  repositories,
} from "@/constants/contributors";
import { ProjectInterface } from "@/interface";

const PaintAppConstants: ProjectInterface = {
  id: "paint-app",
  title: "Paint App - Windows Application",
  description: "description",
  type: "Windows Application",
  imageSrc: "/projects/paint-app/paint-app.png",
  githubUrl: githubUrl(owner[0].name, repositories[5].name),
  apiContributors: apiContributors(owner[0].name, repositories[5].name),
  multipleGit: false,
  owner: owner[0].name,
  repository: repositories[5].name,
  techs: [
    "C#",
    "WPF",
    "MVVM Architecture",
    "XAML",
    "Plugin Architecture",
    "Design Patterns",
  ],
  technologies: "Technologies",
  contributors: "Contributors",
  detailInfo: {
    imageList: [
      "/projects/paint-app/paint-app.png",
      "/projects/paint-app/paint-app-detail.png",
    ],
    overview: {
      id: "overview",
      name: "Overview",
      applications: [
        {
          id: "frontend",
          application: "Frontend",
          overviewList: ["overview-01", "overview-02", "overview-03"],
          imageList: null,
        },
      ],
    },
    technologies: {
      id: "technologies",
      name: "Technologies",
      techs: [
        {
          id: "frontend",
          application: "Frontend",
          techList: [
            {
              name: "WPF",
              description: "tech-01",
            },
          ],
          techImages: ["/technologies/wpf.png"],
        },
      ],
    },
    architectures: {
      id: "architectures",
      name: "Architectures",
      architectureList: null,
    },
  },
};

export default PaintAppConstants;
export type PaintAppConstantsType = typeof PaintAppConstants;
