import About from "@/components/custom/about";
import Contact from "@/components/custom/contact";
import Education from "@/components/custom/education";
import Experience from "@/components/custom/experience";
import Footer from "@/components/custom/footer";
import Projects from "@/components/custom/projects";

const Root = () => {
  return (
    <div className="flex flex-col w-full">
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
