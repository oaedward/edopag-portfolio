import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { BsBoxArrowUpRight } from "react-icons/bs";
import ClientSideRoute from "../ClientSideRoute";
import Link from "next/link";

interface Props {
  posts: Post[];
}

export default function BlogList({ posts }: Props) {
  return (
    <>
      <section
        id="blog"
        className="w-full xl:pt-10 xl:pb-24 pb-12 p-4 flex flex-col gap-10 xl:gap-0 align-middle items-center border-b-[1px] border-b-gray-300 dark:border-b-gray-500"
      >
        <h1 className="text-2xl text-center font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white ">
          All Blog Posts
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <ClientSideRoute key={post._id} route={`/blog/post/${post.slug}`}>
              <div className="group cursor-pointer">
                <div className="relative w-full h-64 lg:h-80 group-hover:scale-105 transition-all drop-shadow-xl">
                  <Image
                    className="object-cover object-center rounded-lg"
                    src={urlForImage(post.mainImage).url()}
                    alt={post.author.name}
                    fill
                  />

                  <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
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

                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                  {post.title}
                </h1>

                <hr className="w-32 my-6 text-blue-500" />

                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex flex-col gap-4">
                  <div className="align-middle mt-4 ext-gray-500 hover:text-gray-600 dark:hover:text-gray-400 gap-2">
                    <div className="flex gap-1">
                      <span>Read post</span>
                      <BsBoxArrowUpRight className="text-sm" />
                    </div>
                  </div>
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
                </div>
              </div>
            </ClientSideRoute>
          ))}
        </div>
      </section>
    </>
  );
}
