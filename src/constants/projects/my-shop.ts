import {
  apiContributors,
  githubUrl,
  owner,
  repositories,
} from "@/constants/contributors";
import { ProjectInterface } from "@/interface";

const MyShopConstants: ProjectInterface = {
  id: "my-shop",
  title: "My Shop - Shop Management System",
  description: "description",
  type: "Windows Application",
  imageSrc: "/projects/my-shop/my-shop-dashboard.png",
  githubUrl: githubUrl(owner[0].name, repositories[6].name),
  apiContributors: apiContributors(owner[0].name, repositories[6].name),
  multipleGit: false,
  owner: owner[0].name,
  repository: repositories[6].name,
  techs: [
    "C#",
    "WPF",
    "Excel",
    "MVVM Architecture",
    "XAML",
    "Entity Framework",
    "MSSQL Server",
  ],
  technologies: "Technologies",
  contributors: "Contributors",
  detailInfo: {
    imageList: [
      "/projects/my-shop/my-shop-dashboard.png",
      "/projects/my-shop/my-shop-list.png",
      "/projects/my-shop/my-shop-login.png",
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
            {
              name: "Entity Framework",
              description: "tech-02",
            },
            {
              name: "MSSQL Server",
              description: "tech-03",
            },
          ],
          techImages: [
            "/technologies/wpf.png",
            "/technologies/entity-framework.png",
            "/technologies/mssql.png",
          ],
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

export default MyShopConstants;
export type MyShopConstantsType = typeof MyShopConstants;
