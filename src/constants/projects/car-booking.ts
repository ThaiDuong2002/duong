import {
  apiContributors,
  githubUrl,
  owner,
  repositories,
} from "../contributors";

const CarBookingConstants = {
  id: "car-booking",
  title: "RideNow - Car Booking System",
  description: "description",
  type: "Mobile Application",
  imageSrc: "/projects/car-booking/car-booking.png",
  imageList: [
    "/projects/car-booking/car-booking.png",
    "/projects/car-booking/car-booking-officials.png",
    "/projects/car-booking/car-booking-residents.png",
  ],
  githubUrl: githubUrl(owner[0].name, repositories[8].name),
  apiContributors: apiContributors(owner[0].name, repositories[8].name),
  multipleGit: false,
  owner: owner[0].name,
  repository: repositories[8].name,
  techs: [
    "NodeJS",
    "ExpressJS",
    "Flutter",
    "Dart",
    "MongoDB",
    "Mongoose",
    "Material UI",
    "ReactJS",
    "S2 Geometry Algorithm",
    "RabbitMQ",
    "Design Pattern",
    "Event Driven Programming",
    "Docker",
    "Socket.IO",
  ],
  technologies: "Technologies",
  contributors: "Contributors",
};

export default CarBookingConstants;
