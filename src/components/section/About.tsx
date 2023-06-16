import AboutImage from "@/components/AboutImage";

export default function About() {
  return (
    <section
      id="about"
      className="w-full xl:pt-20 xl:pb-24 pb-0 p-4 flex flex-col-reverse gap-10 xl:gap-0 xl:flex-row align-middle items-center border-b-[1px] border-b-gray-300 dark:border-b-gray-500"
    >
      <div className="w-full lg:w-1/2 flex justify-center items-center relative">
        <AboutImage />
      </div>
      <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-10 ">
        <div className="flex flex-col gap-5 pt-24 md:pt-24 xl:pt-0">
          <h4 className="block text-md font-bold text-gray-500 dark:text-gray-50 md:text-center text-center xl:text-left">
            All there is to know <span className="text-red-600">about me</span>{" "}
            is that
          </h4>
          <h1 className="text-4xl md:text-6xl xl:text-6xl font-bold text-gray-700 dark:text-white md:text-center text-center xl:text-left">
            I build lasting and successful projects
          </h1>
          <p className="container-xl text-md font-normal text-gray-400 text-center md:text-center xl:text-left">
            I am a Professional Biomedical Engineer with an interest in Web
            Development and Data Analytics. I am a self-taught javascript
            developer who freelances to create, build, and maintain web
            applications. I put in all the effort to produce what is right for
            my clients.
          </p>
        </div>
      </div>
    </section>
  );
}
