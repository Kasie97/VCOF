import { fullArticle } from "@/app/lib/interface";
import { sanityClient, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getData(slug: string) {
  const query = `
  *[_type == 'media' && slug.current == '${slug}']{
    title,
    content,
    "currentSlug" : slug.current,
    articleImage
  }[0]`;

  const data = await sanityClient.fetch(query, { slug });
  return data;
}


export default async function blogArticle({
  params
}:{
  params:{slug: string};
}) {
  const data: fullArticle = await getData(params.slug);
  return (
    <div className="mt-8">
      <h1>
        <span className="block text-base text-center text-orange-600 font-semibold tracking-wide uppercase">
          VCO Media
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl prose dark:text-white">
          {data.title}
        </span>
      </h1>
      <Image 
        src={urlFor(data.articleImage).url()} 
        width={800} 
        height={800} 
        alt="article image"
        priority
        className="rounded-lg mt-8 border" 
      />
      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert ">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}