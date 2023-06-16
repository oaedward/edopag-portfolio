import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { urlForImage } from "../../../../../sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "@/components/blog/RichTextComponent";
import BlogSideList from "@/components/blog/BlogSideList";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Post({ params: { slug } }: Props) {
  const query = groq`
  *[_type=='post' && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->
  }
  `;
  const post: Post = await client.fetch(query, { slug });
  return (
    <section
      id="blog"
      className="w-full xl:pt-20 p-4 flex items-center border-b-[1px] border-b-gray-300 dark:border-b-gray-500"
    >
      <div class="container px-6 py-10 mx-auto">
        <div class="lg:flex lg:-mx-6">
          <div class="lg:w-3/4 lg:px-6">
            <div className="w-full h-80 xl:h-[28rem] relative">
              <Image
                className="object-cover object-center rounded-lg"
                src={urlForImage(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
            </div>

            <div>
              <h1 class="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                {post.title}
              </h1>

              <div class="flex items-center mt-6">
                <Image
                  className="rounded-full"
                  src={urlForImage(post.author.image).url()}
                  alt={post.author.name}
                  width={50}
                  height={20}
                />

                <div class="mx-4">
                  <h1 class="text-sm text-gray-700 dark:text-gray-200">
                    {post.author.name}
                  </h1>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post._createdAt).toLocaleDateString("en-UK", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
            <PortableText value={post.body} components={RichTextComponent} />
            <div className="flex flex-wrap gap-2 mt-4">
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

          <BlogSideList />
        </div>
      </div>
    </section>
  );
}
