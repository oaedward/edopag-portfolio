import ServicesImage from "@/components/ServicesImage";
import Stack from "@/components/ui/icons/Stack";

export default function Services() {
  return (
    <section
      id="services"
      className="w-full xl:pt-20 xl:pb-24 pb-0 p-4 flex flex-col gap-10 xl:gap-0 xl:flex-row align-middle items-center border-b-[1px] border-b-gray-300 dark:border-b-gray-500"
    >
      <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-10 ">
        <div className="flex flex-col gap-5 pt-24 md:pt-24 xl:pt-0">
          <h4 className="block text-md font-bold text-gray-500 dark:text-gray-50 md:text-center text-center xl:text-left">
            What I do <span className="text-red-600">&amp; </span>My Stack
            Options
          </h4>
          <h1 className="text-4xl md:text-6xl xl:text-6xl font-bold text-gray-700 dark:text-white md:text-center text-center xl:text-left">
            Together we can build something awesome!
          </h1>
          <p className="container-xl text-md font-normal text-gray-400 text-center md:text-center xl:text-left">
            I build from simple static Corporate Websites for businesses to
            complex and dynamic Web Applications, and MVPs for startups, using
            only the most current technologies available in the tech space.
          </p>
          <div className="flex flex-col xl:flex-row gap-6 lg:gap-0 justify-between">
            <div>
              <h2 className="text-base mb-4 text-gray-500 dark:text-gray-50 font-normal text-center md:text-center xl:text-left">
                My Tech Stack
              </h2>
              <Stack />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center relative">
        <ServicesImage />
      </div>
    </section>
  );
}
