import {
  Award,
  BookOpenText,
  FlaskConical,
  Home,
  PhoneCall,
  User,
} from "lucide-react";

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
      {
        id: "education",
        icon: <BookOpenText size={24} />,
      },
      {
        id: "experience",
        icon: <Award size={24} />,
      },
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
