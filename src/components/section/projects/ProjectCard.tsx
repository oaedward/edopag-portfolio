import { GoLinkExternal } from "react-icons/go";
import { SiGithub } from "react-icons/si";

interface ProjectCardProps {
  title: string;
  desc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, desc }) => {
  return (
    <div className="w-full max-w-md  mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="max-w-md mx-auto">
        <div className="p-2 sm:p-6">
          <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1 mt-2">
            {title}
          </p>
          <p className="text-[#7C7C80] font-[15px] mt-6">{desc}</p>
          <div className="flex justify-between items-center mt-6">
            <div></div>
            <div className="flex gap-1 items-center">
              <a
                target="_blank"
                href="#"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"
              >
                <span className="sr-only">Github</span>
                <SiGithub className="text-lg" />
              </a>
              <a
                target="_blank"
                href="#"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"
              >
                <span className="sr-only">External Link</span>
                <GoLinkExternal className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
