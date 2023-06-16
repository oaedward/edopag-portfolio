"use client";

import { usePreview } from "../../lib/sanity.preview";
import BlogList from "@/components/blog/BlogList";

type Props = {
  query: string;
};

export default function PreviewBlogList({ query }: Props) {
  const posts = usePreview(null, query);
  return (
    <section
      id="blog"
      className="w-full xl:pt-10 xl:pb-24 pb-12 p-4 flex flex-col gap-10 xl:gap-0 align-middle items-center border-b-[1px] border-b-gray-300 dark:border-b-gray-500"
    >
      <BlogList posts={posts} />
    </section>
  );
}
