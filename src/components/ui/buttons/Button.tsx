"use client";
import Link from "next/link";

type ButtonProps = {
  text: string;
  url: string;
};

export default function Button({ text, url }: ButtonProps) {
  return (
    <Link href={url}>
      <button
        type="button"
        className="bg-blue-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 p-3 font-light text-sm rounded-lg dark:hover:bg-gray-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-10 duration-300"
      >
        {text}
      </button>
    </Link>
  );
}
