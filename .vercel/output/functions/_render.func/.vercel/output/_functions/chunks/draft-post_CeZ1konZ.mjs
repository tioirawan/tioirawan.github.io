import { m as createComponent, n as renderTemplate, p as maybeRenderHead, v as unescapeHTML } from './astro/server_CRWa3zks.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>If this is working correctly, this post should only be accessible in a dev environment, as well as any tags that are unique to this post.</p>";

				const frontmatter = {"title":"A working draft title","description":"This post is for testing the draft post functionality","publishDate":"10 Sept 2023","tags":["test"],"draft":true,"minutesRead":"1 min read"};
				const file = "/Users/mac/Projects/web/tioirawan.github.io/src/content/post-back/draft-post.md";
				const url = undefined;
				function rawContent() {
					return "\nIf this is working correctly, this post should only be accessible in a dev environment, as well as any tags that are unique to this post.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
