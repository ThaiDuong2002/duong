import {
  apiContributors,
  githubUrl,
  owner,
  repositories,
} from "@/constants/contributors";

const FamFundConstants = {
  id: "fam-fund",
  title: "FamFund - Family Financial Management",
  description: "description",
  type: "Web & Mobile Application",
  imageSrc: "/projects/fam-fund/fam-fund.png",
  imageList: ["/projects/fam-fund/fam-fund.png"],
  githubUrl: githubUrl(owner[1].name, repositories[3].name),
  apiContributors: apiContributors(owner[1].name, repositories[3].name),
  multipleGit: false,
  owner: owner[1].name,
  repository: repositories[3].name,
  techs: [
    "TypeScript",
    "ReactJs",
    "React Native",
    "NextJs",
    "NodeJs",
    "NestJs",
    "PostgreSQL",
    "Amqplib",
    "Redis",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Open Telemetry",
    "GraphQL",
    "CI/CD",
    "Microservices",
    "Syncfusion",
    "Font Awesome",
    "Expo Go",
    "Ant Design",
    "React Native Elements",
  ],
  technologies: "Technologies",
  contributors: "Contributors",
};

export default FamFundConstants;
export type FamFundConstantsType = typeof FamFundConstants;
