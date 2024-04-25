import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({ 
    apiVersion: "2021-03-25",
    dataset: "production",
    projectId: "v8mi7fdj",
    useCdn: false,
 });

 const builder = imageUrlBuilder(sanityClient);

 export function urlFor(source: any) {
    return builder.image(source);
 }
 