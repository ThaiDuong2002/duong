import {
  apiContributors,
  githubUrl,
  owner,
  repositories,
} from "../contributors";

const PaintAppConstants = {
  id: "paint-app",
  title: "Paint App - Windows Application",
  description: "description",
  type: "Windows Application",
  imageSrc: "/projects/paint-app/paint-app.png",
  imageList: [
    "/projects/paint-app/paint-app.png",
    "/projects/paint-app/paint-app-detail.png",
  ],
  githubUrl: githubUrl(owner[0].name, repositories[5].name),
  apiContributors: apiContributors(owner[0].name, repositories[5].name),
  multipleGit: false,
  owner: owner[0].name,
  repository: repositories[5].name,
  techs: ["C#", "WPF", "MVVM", "XAML"],
  technologies: "Technologies",
  contributors: "Contributors",
};

export default PaintAppConstants;
