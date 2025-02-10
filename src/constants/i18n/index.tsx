import { FlaskConical, Home, PhoneCall, User } from "lucide-react";

const I18nConstants = {
  metadata: {
    id: "metadata",
    title: "title",
    description: "description",
  },
  navbar: {
    id: "navbar",
    title: "title",
  },
  footer: {
    id: "footer",
    title: "title",
    design: "design",
    copyright: "copyright",
  },
  home: {
    id: "home",
    greeting: "greeting",
    pronouns: "pronouns",
    job: "job",
    description: "description",
    projects: "projects",
    contact: "contact",
  },
  about: {
    id: "about",
    title: "title",
    paragraph1: "paragraph1",
    paragraph2: "paragraph2",
  },
  education: {
    id: "education",
    title: "title",
    university: "university",
    degree: "degree",
    gpa: "gpa",
    award1: "award1",
    certificates: "certificates",
    certificate1: "certificate1",
    certificate2: "certificate2",
  },
  list: {
    id: "list",
    items: [
      {
        id: "home",
        icon: <Home size={24} />,
      },
      {
        id: "about",
        icon: <User size={24} />,
      },
      // {
      //   id: "experience",
      //   icon: <Award size={24} />,
      // },
      {
        id: "projects",
        icon: <FlaskConical size={24} />,
      },
      {
        id: "contact",
        icon: <PhoneCall size={24} />,
      },
    ],
  },
};

const localeConstants = {
  en: "en",
  vi: "vi",
};

export { I18nConstants, localeConstants };
