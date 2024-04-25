import { Card, CardContent } from "@/components/ui/card";
import Hero from "./components/Hero";
import { mediaCard } from "./lib/interface";
import { sanityClient, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";


async function getData() {
  const query = `
  *[_type == 'media']| order(_createdAt desc){
    title,
      articledescription,
      "currentSlug" : slug.current,
      articleImage
  }`;
  const data = await sanityClient.fetch(query);
  return data;
}

export default async function Home() {
  const data: mediaCard[] = await getData();

  return (
    <main>
     < Hero />
     <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5">
      {data.map((post, index) => ( 
        <Card key ={index}>
          <Image src={urlFor(post.articleImage).url()}
           alt= "article-Image"
           width={500}
           height={500}
           className="rounded-t-lg h-[200px] object-cover"
            />
            <CardContent className="mt-5">
              <h3 className="text-md font-bold ine-clamp-2">{post.title}</h3>
              <p className="text-sm line-clamp-3 mt-2 text-gray-600 dark: text-gray-300">
                {post.articledescription}
              </p>
              <Button asChild className="w-full mt-7">
                <Link href={`/article/${post.currentSlug}`}>
                  Read More
                </Link>
              </Button>
            </CardContent>

        </Card>
      ))}
     </div>
    </main>
  );
}
 