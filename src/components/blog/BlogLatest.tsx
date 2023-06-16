import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import ClientSideRoute from "@/components/ClientSideRoute";
import { urlForImage } from "../../../sanity/lib/image";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default async function BlogLatest() {
  const query = groq`
    *[_type=='post'][0...1] {
      ...,
      categories[]->,
      author->,
      "slug": slug.current
    } | order(_createdAt desc)
  `;

  const posts = await client.fetch(query);
  return (
    <>
      <section
        id="blog"
        className="w-full xl:pt-10 xl:pb-24 pb-12 p-4 flex flex-col gap-10 xl:gap-0 align-middle items-center border-b-[1px] border-b-gray-300 dark:border-b-gray-500"
      >
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Latest Post
          </h1>
          {posts.map((post) => (
            <ClientSideRoute key={post._id} route={`/blog/post/${post.slug}`}>
              <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                <div className="relative w-full lg:mx-6 lg:w-1/2 h-72 lg:h-96">
                  <Image
                    className="object-cover rounded-xl "
                    src={urlForImage(post.mainImage).url()}
                    alt={post.author.name}
                    fill
                  />
                </div>

                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((category) => {
                      return (
                        <div
                          key={post._id}
                          className="text-xs inline-flex items-center font-normal leading-sm lowercase py-1  text-gray-500 dark:text-gray-400"
                        >
                          #{category.title}
                        </div>
                      );
                    })}
                  </div>

                  <h1 className="block mt-4 text-2xl font-semibold text-gray-700 hover:underline dark:text-gray-100">
                    {post.title}
                  </h1>

                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    {post.description}
                  </p>

                  <div className="inline-block mt-2 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400">
                    <div className="flex gap-1">
                      <span>Read post</span>
                      <BsBoxArrowUpRight className="text-sm" />
                    </div>
                  </div>

                  <div className="flex items-center mt-6">
                    <Image
                      className="rounded-full"
                      src={urlForImage(post.author.image).url()}
                      alt={post.author.name}
                      width={50}
                      height={20}
                    />

                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">
                        {post.author.name}
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(post._createdAt).toLocaleDateString("en-UK", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ClientSideRoute>
          ))}
        </div>
      </section>
    </>
  );
}
