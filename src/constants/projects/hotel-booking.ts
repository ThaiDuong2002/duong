import {
  apiContributors,
  githubUrl,
  owner,
  repositories,
} from "@/constants/contributors";

const HotelBookingConstants = {
  id: "hotel-booking",
  title: "Hotel Booking - Reservation System",
  description: "description",
  type: "Web Application",
  imageSrc: "/projects/hotel-booking/hotel-booking-search.png",
  githubUrl: githubUrl(owner[2].name, repositories[11].name),
  apiContributors: apiContributors(owner[2].name, repositories[11].name),
  multipleGit: false,
  owner: owner[2].name,
  repository: repositories[11].name,
  techs: [
    "Javascript",
    "ReactJS",
    "Fontawesome",
    "Axios",
    "HTML",
    "CSS",
    "Express",
    "NodeJS",
    "MongoDB",
    "Mongoose",
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
          id: "frontend",
          application: "Client",
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
              name: "Material UI",
              description: "tech-01",
            },
            {
              name: "React.Js",
              description: "tech-02",
            },
          ],
          techImages: [
            "/technologies/font-awesome.png",
            "/technologies/react-js.png",
          ],
        },
        {
          id: "backend",
          application: "Backend",
          techList: [
            {
              name: "Express",
              description: "tech-01",
            },
            {
              name: "Node.Js",
              description: "tech-02",
            },
            {
              name: "MongoDB",
              description: "tech-03",
            },
          ],
          techImages: [
            "/technologies/express-js.png",
            "/technologies/node-js.png",
            "/technologies/mongo-db.png",
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

export default HotelBookingConstants;
