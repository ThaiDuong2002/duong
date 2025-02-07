import About from "@/components/custom/about";
import Contact from "@/components/custom/contact";
import Education from "@/components/custom/education";
import Experience from "@/components/custom/experience";
import Footer from "@/components/custom/footer";
import Home from "@/components/custom/home";
import Projects from "@/components/custom/projects";
import { I18nConstants } from "@/constants";

const Root = () => {
  const listId = I18nConstants.list;
  return (
    <div className="flex flex-col bg-white/75 dark:bg-black w-full">
      <Home id={listId.items[0].id} />
      <About id={listId.items[1].id} />
      <Education id={listId.items[2].id} />
      <Experience id={listId.items[3].id} />
      <Projects id={listId.items[4].id} />
      <Contact id={listId.items[5].id} />
      <Footer  />
    </div>
  );
};

export default Root;
