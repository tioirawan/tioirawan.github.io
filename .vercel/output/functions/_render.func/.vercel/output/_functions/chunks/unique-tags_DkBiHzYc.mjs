import { m as createComponent, n as renderTemplate, p as maybeRenderHead, v as unescapeHTML } from './astro/server_CRWa3zks.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"this-post-is-to-test-zod-transform\">This post is to test zod transform</h2>\n<p>If you open the file <code>src/content/post/unique-tags.md</code>, the tags array has a number of duplicate blog strings of various cases.</p>\n<p>These are removed as part of the removeDupsAndLowercase function found in <code>src/content/config.ts</code>.</p>";

				const frontmatter = {"title":"Unique tags validation","publishDate":"30 January 2023","description":"This post is used for validating if duplicate tags are removed, regardless of the string case","tags":["blog","blog","Blog","test","bloG","Test","BLOG"],"minutesRead":"1 min read"};
				const file = "/Users/mac/Projects/web/tioirawan.github.io/src/content/post-back/unique-tags.md";
				const url = undefined;
				function rawContent() {
					return "\n## This post is to test zod transform\n\nIf you open the file `src/content/post/unique-tags.md`, the tags array has a number of duplicate blog strings of various cases.\n\nThese are removed as part of the removeDupsAndLowercase function found in `src/content/config.ts`.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"this-post-is-to-test-zod-transform","text":"This post is to test zod transform"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
