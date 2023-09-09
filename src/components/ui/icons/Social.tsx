import {
  SiGithub,
  SiLinkedin,
  SiTwitter,
  SiInstagram,
  SiYoutube,
} from "react-icons/si";

import { TbBrandFiverr } from "react-icons/tb";

export default function Social() {
  return (
    <>
      <a
        href="https://github.com/oaedward"
        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"
        aria-label="GitHub"
        target="_blank"
        rel="noopener"
      >
        <SiGithub />
      </a>

      <a
        href="https://www.https://www.linkedin.com/in/ing-edward-opoku-agyemang-pe-ghie-1b406b75/"
        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-600"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener"
      >
        <SiLinkedin />
      </a>

      <a
        href="https://twitter.com/codewithedward"
        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
        aria-label="Twitter"
        target="_blank"
        rel="noopener"
      >
        <SiTwitter />
      </a>

      <a
        href="https://www.instagram.com/eddnedd_"
        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400"
        aria-label="Instagram"
        target="_blank"
        rel="noopener"
      >
        <SiInstagram />
      </a>

      <a
        href="https://www.youtube.com/channel/UCwSQbkavnPZqKZJI_Rdizhg"
        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
        aria-label="Youtube"
        target="_blank"
        rel="noopener"
      >
        <SiYoutube />
      </a>

      <a
        href="https://www.fiverr.com/oaedward?up_rollout=true"
        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
        aria-label="Youtube"
        target="_blank"
        rel="noopener"
      >
        <TbBrandFiverr />
      </a>
    </>
  );
}
