import rss from '@astrojs/rss';
import { s as siteConfig } from './_astro_content_Cbqj-FSa.mjs';
import { g as getAllPosts } from './post_CdDrguks.mjs';
import 'clsx';

const GET = async () => {
  const posts = await getAllPosts();
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: "https://tioirawan.github.io",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.slug}`
    }))
  });
};

export { GET };
