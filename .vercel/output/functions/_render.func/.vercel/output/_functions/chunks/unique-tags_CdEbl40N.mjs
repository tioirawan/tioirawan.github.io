const id = "unique-tags.md";
						const collection = "post-back";
						const slug = "unique-tags";
						const body = "\n## This post is to test zod transform\n\nIf you open the file `src/content/post/unique-tags.md`, the tags array has a number of duplicate blog strings of various cases.\n\nThese are removed as part of the removeDupsAndLowercase function found in `src/content/config.ts`.\n";
						const data = {title:"Unique tags validation",publishDate:"30 January 2023",description:"This post is used for validating if duplicate tags are removed, regardless of the string case",tags:["blog","blog","Blog","test","bloG","Test","BLOG"]};
						const _internal = {
							type: 'content',
							filePath: "/Users/mac/Projects/web/tioirawan.github.io/src/content/post-back/unique-tags.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
