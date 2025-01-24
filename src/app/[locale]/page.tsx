import About from "@/components/custom/about";
import Contact from "@/components/custom/contact";
import Education from "@/components/custom/education";
import Experience from "@/components/custom/experience";
import Footer from "@/components/custom/footer";
import Home from "@/components/custom/home";
import Projects from "@/components/custom/projects";

const Root = () => {
  return (
    <div className="flex flex-col w-full bg-white/75 dark:bg-black">
      <Home />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Root;
