import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import ClientSideRoute from "@/components/ClientSideRoute";

export default async function BlogSideList() {
  const query = groq`
  *[_type=='post'][0...5] {
    ...,
    categories[]->,
    author->,
    "slug": slug.current
  } | order(_createdAt desc)
`;
  const posts = await client.fetch(query);
  return (
    <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
      {posts.map((post) => (
        <>
          <div key={post._id}>
            <h3 className="text-gray-500 text-sm capitalize">
              {new Date(post._createdAt).toLocaleDateString("en-UK", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h3>

            <ClientSideRoute
              route={`/blog/post/${post.slug}`}
              className="block mt-2"
            >
              <h1 className="font-medium text-gray-600 hover:underline hover:text-gray-500 dark:text-gray-400">
                {post.title}
              </h1>
            </ClientSideRoute>
          </div>

          <hr className="my-6 border-gray-200 dark:border-gray-700" />
        </>
      ))}
    </div>
  );
}
