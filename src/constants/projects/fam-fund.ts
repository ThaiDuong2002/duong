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
          overviewList: ["overview-01", "overview-02", "overview-03"],
          imageList: [
            "/projects/car-booking/customer/car-booking-customer-1.png",
            "/projects/car-booking/customer/car-booking-customer-2.png",
            "/projects/car-booking/customer/car-booking-customer-3.png",
            "/projects/car-booking/customer/car-booking-customer-4.png",
            "/projects/car-booking/customer/car-booking-customer-5.png",
            "/projects/car-booking/customer/car-booking-customer-6.png",
            "/projects/car-booking/customer/car-booking-customer-7.png",
          ],
        },
        {
          id: "web",
          application: "Web",
          overviewList: ["overview-01", "overview-02", "overview-03"],
          imageList: [
            "/projects/car-booking/driver/car-booking-driver-1.png",
            "/projects/car-booking/driver/car-booking-driver-2.png",
            "/projects/car-booking/driver/car-booking-driver-3.png",
          ],
        },
        {
          id: "admin",
          application: "Administator",
          overviewList: ["overview-01", "overview-02", "overview-03"],
          imageList: [
            "/projects/car-booking/call-center/car-booking-callcenter-1.png",
            "/projects/car-booking/call-center/car-booking-callcenter-2.png",
            "/projects/car-booking/call-center/car-booking-callcenter-3.png",
            "/projects/car-booking/call-center/car-booking-callcenter-4.png",
            "/projects/car-booking/call-center/car-booking-callcenter-5.png",
          ],
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
              name: "Flutter",
              description: "tech-01",
            },
            {
              name: "Google Maps",
              description: "tech-02",
            },
          ],
          techImages: [
            "/technologies/flutter.png",
            "/technologies/google-maps.png",
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
              name: "Materail UI",
              description: "tech-02",
            },
            {
              name: "Socket.IO",
              description: "tech-03",
            },
          ],
          techImages: [
            "/technologies/react-js.png",
            "/technologies/material-ui.png",
            "/technologies/socket-io.png",
          ],
        },
        {
          id: "backend",
          application: "Backend",
          techList: [
            {
              name: "Express.Js",
              description: "tech-01",
            },
            {
              name: "Socket.IO",
              description: "tech-02",
            },
            {
              name: "MongoDB",
              description: "tech-03",
            },
          ],
          techImages: [
            "/technologies/express-js.png",
            "/technologies/socket-io.png",
            "/technologies/mongo-db.png",
            "/technologies/rabbitmq.png",
            "/technologies/docker.png",
          ],
        },
      ],
    },
    architectures: {
      id: "architectures",
      name: "Architectures",
      architectureList: [
        {
          id: "system",
          image: "/architectures/car-booking/system.png",
          application: "System",
          architectureList: null,
        },
        {
          id: "broker-topology",
          image: "/architectures/car-booking/broker-topology.png",
          application: "Broker Topology",
          architectureList: null,
        },
        {
          id: "microservices",
          image: "/architectures/car-booking/microservices.png",
          application: "Microservices",
          architectureList: null,
        },
      ],
    },
  },
};

export default FamFundConstants;
export type FamFundConstantsType = typeof FamFundConstants;
