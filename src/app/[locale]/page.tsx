import About from "@/components/custom/about";
import Contact from "@/components/custom/contact";
import Education from "@/components/custom/education";
import Footer from "@/components/custom/footer";
import Home from "@/components/custom/home";
import Projects from "@/components/custom/projects";
import { I18nConstants } from "@/constants";

const Root = () => {
  const listId = I18nConstants.list;
  const components = [Home, About, Education, Projects, Contact];

  return (
    <div className="flex flex-col bg-white/20 dark:bg-black/20 w-full">
      {components.map((Component, index) => (
        <Component key={listId.items[index].id} id={listId.items[index].id} />
      ))}
      <Footer />
    </div>
  );
};

export default Root;
