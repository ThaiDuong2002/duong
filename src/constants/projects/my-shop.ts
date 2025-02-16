import {
  apiContributors,
  githubUrl,
  owner,
  repositories,
} from "../contributors";

const MyShopConstants = {
  id: "my-shop",
  title: "My Shop - Shop Management System",
  description: "description",
  type: "Windows Application",
  imageSrc: "/projects/my-shop/my-shop-dashboard.png",
  imageList: [
    "/projects/my-shop/my-shop-dashboard.png",
    "/projects/my-shop/my-shop-list.png",
    "/projects/my-shop/my-shop-login.png",
  ],
  githubUrl: githubUrl(owner[0].name, repositories[6].name),
  apiContributors: apiContributors(owner[0].name, repositories[6].name),
  multipleGit: false,
  owner: owner[0].name,
  repository: repositories[6].name,
  techs: ["C#", "WPF", "MVVM", "XAML", "Entity Framework", "MSSQL Server"],
  technologies: "Technologies",
  contributors: "Contributors",
};

export default MyShopConstants;
