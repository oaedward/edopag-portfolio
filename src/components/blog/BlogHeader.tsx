import React from "react";
import Stack from "@/components/ui/icons/Stack";

export default function BlogHeader() {
  return (
    <section
      id="blog"
      className="w-full xl:pt-10 p-4 flex items-center border-b-[1px] border-b-gray-300 dark:border-b-gray-500"
    >
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className=" text-3xl font-black text-gray-800 dark:text-white md:text-5xl xl:text-6xl">
            Pick your Read
          </h1>
          <p className="mt-6 text-gray-500 dark:text-gray-300">
            Learn the best practices about modern web development with
            JavaScript and TypeScript with React, Next JS and Vue Frameworks
          </p>
          <Stack />
        </div>
      </div>
    </section>
  );
}
