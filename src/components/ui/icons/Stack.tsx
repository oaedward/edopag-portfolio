import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiVuedotjs,
  SiNodedotjs,
} from "react-icons/si";

export default function Stack() {
  return (
    <div className="flex gap-4 justify-center">
      <div className="stackIcon hover:-translate-y-1 hover:bg-opacity-40">
        <SiJavascript className="dark:text-gray-300" />
      </div>
      <div className="stackIcon hover:-translate-y-1 hover:bg-opacity-40">
        <SiTypescript className="dark:text-gray-300" />
      </div>
      <div className="stackIcon hover:-translate-y-1 hover:bg-opacity-40">
        <SiNodedotjs className="dark:text-gray-300" />
      </div>
      <div className="stackIcon hover:-translate-y-1 hover:bg-opacity-40">
        <SiNextdotjs className="dark:text-gray-300" />
      </div>
      <div className="stackIcon hover:-translate-y-1 hover:bg-opacity-40">
        <SiReact className="dark:text-gray-300" />
      </div>
      <div className="stackIcon hover:-translate-y-1 hover:bg-opacity-40">
        <SiVuedotjs className="dark:text-gray-300" />
      </div>
      <div className="stackIcon hover:-translate-y-1 hover:bg-opacity-40">
        <SiGit className="dark:text-gray-300" />
      </div>
      <div className="stackIcon hover:-translate-y-1 hover:bg-opacity-40">
        <SiFigma className="dark:text-gray-300" />
      </div>
      <div className="stackIcon hover:-translate-y-1 hover:bg-opacity-40">
        <SiTailwindcss className="dark:text-gray-300" />
      </div>
    </div>
  );
}
