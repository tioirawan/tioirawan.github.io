const id = "social-image.md";
						const collection = "post-back";
						const slug = "social-image";
						const body = "\n## Adding your own social image to a post\n\nThis post is an example of how to add a custom [open graph](https://ogp.me/) social image, also known as an OG image, to a blog post.\nBy adding the optional ogImage property to the frontmatter of a post, you opt out of [satori](https://github.com/vercel/satori) automatically generating an image for this page.\n\nIf you open this markdown file `src/content/post/social-image.md` you'll see the ogImage property set to an image which lives in the public folder[^1].\n\n```yaml\nogImage: \"/social-card.png\"\n```\n\nYou can view the one set for this template page [here](https://astro-cactus.chriswilliams.dev/social-card.png).\n\n[^1]: The image itself can be located anywhere you like.\n";
						const data = {title:"Example OG Social Image",publishDate:"27 January 2023",description:"An example post for Astro Cactus, detailing how to add a custom social image card in the frontmatter",tags:["example","blog","image"],ogImage:"/social-card.png"};
						const _internal = {
							type: 'content',
							filePath: "/Users/mac/Projects/web/tioirawan.github.io/src/content/post-back/social-image.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
