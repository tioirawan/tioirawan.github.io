import { m as createComponent, n as renderTemplate, p as maybeRenderHead, v as unescapeHTML } from './astro/server_CRWa3zks.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"This post doesn't have any content","description":"This post is purely for testing the table of content, which should not be rendered","publishDate":"22 Feb 2023","tags":["test","toc"],"minutesRead":"0 min read"};
				const file = "/Users/mac/Projects/web/tioirawan.github.io/src/content/post-back/missing-content.md";
				const url = undefined;
				function rawContent() {
					return "";
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
