import { draftMode } from "next/headers";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import BlogList from "@/components/blog/BlogList.tsx";
import BlogHeader from "@/components/blog/BlogHeader";
import PreviewSuspense from "@/components/studio/PreviewSuspense";
import PreviewBlogList from "@/components/studio/PreviewBlogList";
import BlogLatest from "@/components/blog/BlogLatest";

const query = groq`
  *[_type=='post'] {
    ...,
    categories[]->,
    author->,
    "slug": slug.current
  } | order(_createdAt desc)
`;

export default async function page() {
  const { isEnabled } = draftMode();
  if (isEnabled) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-blue-800">
              Loading Draft Data
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch<Post[]>(query);
  return (
    <>
      <BlogHeader />
      <BlogLatest />
      <BlogList posts={posts} />
    </>
  );
}
