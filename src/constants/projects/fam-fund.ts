import {
  apiContributors,
  githubUrl,
  owner,
  repositories,
} from "@/constants/contributors";
import { ProjectInterface } from "@/interface";

const FamFundConstants: ProjectInterface = {
  id: "fam-fund",
  title: "FamFund - Family Financial Management",
  description: "description",
  type: "Web & Mobile Application",
  imageSrc: "/projects/fam-fund/fam-fund.png",
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
    "Tailwind CSS",
    "PostgreSQL",
    "Amqplib",
    "Redis",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Open Telemetry",
    "GraphQL",
    "CI/CD",
    "Socket.IO",
    "Microservices",
    "Syncfusion",
    "Font Awesome",
    "Expo Go",
    "Ant Design",
    "React Native Elements",
  ],
  technologies: "Technologies",
  contributors: "Contributors",
  detailInfo: {
    imageList: [
      "/projects/hotel-booking/hotel-booking-search.png",
      "/projects/hotel-booking/hotel-booking-detail.png",
      "/projects/hotel-booking/hotel-booking-list.png",
    ],
    overview: {
      id: "overview",
      name: "Overview",
      applications: [
        {
          id: "mobile",
          application: "Mobile",
          overviewList: [
            "overview-01",
            "overview-02",
            "overview-03",
            "overview-04",
            "overview-05",
            "overview-06",
          ],
          imageList: [
            "/projects/fam-fund/mobile/mobile-01.png",
            "/projects/fam-fund/mobile/mobile-02.png",
            "/projects/fam-fund/mobile/mobile-03.png",
            "/projects/fam-fund/mobile/mobile-04.png",
            "/projects/fam-fund/mobile/mobile-05.png",
            "/projects/fam-fund/mobile/mobile-06.png",
            "/projects/fam-fund/mobile/mobile-07.png",
          ],
        },
        {
          id: "web",
          application: "Web",
          overviewList: [
            "overview-01",
            "overview-02",
            "overview-03",
            "overview-04",
            "overview-05",
          ],
          imageList: [
            "/projects/fam-fund/web/web-login.png",
            "/projects/fam-fund/web/web-signup.png",
            "/projects/fam-fund/web/web-finance-01.png",
            "/projects/fam-fund/web/web-finance-02.png",
            "/projects/fam-fund/web/web-chat-01.png",
            "/projects/fam-fund/web/web-chat-02.png",
            "/projects/fam-fund/web/web-scheduler.png",
            "/projects/fam-fund/web/web-education.png",
          ],
        },
        {
          id: "admin",
          application: "Administator",
          overviewList: [
            "overview-01",
            "overview-02",
            "overview-03",
            "overview-04",
            "overview-05",
          ],
          imageList: [
            "/projects/fam-fund/admin/admin-01.png",
            "/projects/fam-fund/admin/admin-02.png",
            "/projects/fam-fund/admin/admin-03.png",
          ],
        },
        {
          id: "ci-cd",
          application: "CI/CD Process",
          overviewList: [],
          imageList: ["/projects/fam-fund/backend/cicd-process.png"],
        },
      ],
    },
    technologies: {
      id: "technologies",
      name: "Technologies",
      techs: [
        {
          id: "mobile",
          application: "Mobile",
          techList: [
            {
              name: "React Native",
              description: "tech-01",
            },
            {
              name: "Expo",
              description: "tech-02",
            },
            {
              name: "Font Awesome",
              description: "tech-03",
            },
            {
              name: "Socket.IO",
              description: "tech-04",
            },
          ],
          techImages: [
            "/technologies/react-native.png",
            "/technologies/expo.png",
            "/technologies/font-awesome.png",
            "/technologies/socket-io.png",
          ],
        },
        {
          id: "web",
          application: "Website",
          techList: [
            {
              name: "React.Js",
              description: "tech-01",
            },
            {
              name: "Next.Js",
              description: "tech-02",
            },
            {
              name: "Syncfusion",
              description: "tech-03",
            },
            {
              name: "Ant Design",
              description: "tech-04",
            },
            {
              name: "Socket.IO",
              description: "tech-05",
            },
          ],
          techImages: [
            "/technologies/react-js.png",
            "/technologies/next-js.png",
            "/technologies/syncfusion.png",
            "/technologies/ant-design.png",
            "/technologies/socket-io.png",
          ],
        },
        {
          id: "backend",
          application: "Backend",
          techList: [
            {
              name: "Nest.Js",
              description: "tech-01",
            },
            {
              name: "Socket.IO",
              description: "tech-02",
            },
            {
              name: "PostgreSQL",
              description: "tech-03",
            },
            {
              name: "Redis",
              description: "tech-04",
            },
            {
              name: "Docker",
              description: "tech-05",
            },
            {
              name: "Kubernetes",
              description: "tech-06",
            },
            {
              name: "Jenkins",
              description: "tech-07",
            },
            {
              name: "Open Telemetry",
              description: "tech-08",
            },
            {
              name: "GraphQL",
              description: "tech-09",
            },
          ],
          techImages: [
            "/technologies/nest-js.png",
            "/technologies/socket-io.png",
            "/technologies/postgresql.png",
            "/technologies/redis.png",
            "/technologies/docker.png",
            "/technologies/kubernetes.png",
            "/technologies/jenkins.png",
            "/technologies/opentelemetry.png",
            "/technologies/graph-ql.png",
          ],
        },
      ],
    },
    architectures: {
      id: "architectures",
      name: "Architectures",
      architectureList: [
        {
          id: "backend",
          image: "/architectures/fam-fund/backend.png",
          application: "Backend",
          architectureList: null,
        },
        {
          id: "websocket",
          image: "/architectures/fam-fund/websocket.png",
          application: "Websocket",
          architectureList: null,
        },
      ],
    },
  },
};

export default FamFundConstants;
export type FamFundConstantsType = typeof FamFundConstants;
