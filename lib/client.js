import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'k5hwfddx',
    dataset: 'production',
    apiVersion: '2023-03-30',
    useCdn: true
});
  

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);