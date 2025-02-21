import Education from "@/components/custom/about/education";
import Introduction from "@/components/custom/about/introduction";
import MaxWidthWrapper from "@/components/custom/max-width-wrapper";

const About = ({ id }: { id?: string }) => {
  return (
    <div
      className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen"
      id={id}
    >
      <MaxWidthWrapper className="flex flex-col justify-center gap-10 max-md:gap-10 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-500 m-10 p-10 md:p-20 border rounded-xl max-w-screen-lg h-auto">
        <Introduction />
        <Education />
      </MaxWidthWrapper>
    </div>
  );
};

export default About;
