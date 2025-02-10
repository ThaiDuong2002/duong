const Projects = ({ id }: { id?: string }) => {
  return (
    <div
      className="flex flex-col justify-start items-center mx-10 pt-10 min-h-screen"
      id={id}
    >
      <h1 className="font-bold text-3xl">Projects</h1>
      <p className="mt-2 max-md:text-md max-sm:text-sm text-lg text-center">
        Below is a comprehensive list of impactful personal and team projects
        that I have successfully contributed to.
      </p>
      <div></div>
    </div>
  );
};

export default Projects;
