import ProjectCard from "@/components/section/projects/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Web Dev Project 1",
      desc: "Personal portfolio for my freelancing gigs. Uses technologies like Next, React, Prisma",
    },
    // {
    //   title: "Web Dev Project 2",
    //   desc: "Personal portfolio for my freelancing talent and programming. Uses technologies like Next, React, Prisma",
    // },
    // {
    //   title: "Web Dev Project 3",
    //   desc: "Personal portfolio for my freelancing talent and programming. Uses technologies like Next, React, Prisma",
    // },
  ];

  const projectFilter = [
    { name: "All" },
    { name: "Web/UI/UX" },
    { name: "Data Analytics" },
  ];
  return (
    <section
      id="projects"
      className="w-full pt-20 pb-24 p-4 flex flex-col gap-5 xl:gap-0 align-middle items-center border-b-[1px] border-b-gray-300 dark:border-b-gray-500"
    >
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-700 capitalize lg:text-3xl dark:text-white">
          Latest Work
        </h1>

        <div className="flex py-4 mt-4 overflow-x-auto overflow-y-hidden justify-center dark:border-gray-700">
          {projectFilter.map((filter) => (
            <button
              key={filter.name}
              type="button"
              className="h-12 px-8 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400"
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-14 justify-center items-center">
        {projects.length > 0 ? (
          projects.map((proj) => (
            <ProjectCard key={proj.title} title={proj.title} desc={proj.desc} />
          ))
        ) : (
          <span className="text-center justify-center">
            Nothing to show here
          </span>
        )}
      </div>
    </section>
  );
};

export default Projects;
