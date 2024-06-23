import { m as createComponent, n as renderTemplate, p as maybeRenderHead, v as unescapeHTML } from './astro/server_CRWa3zks.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"overview\">Overview</h1>\n<p><span style=\"color: #ff0000;\"><strong>Disclaimer</strong>: This project is managed and operated by my client. The publication is intended for portfolio purposes only, and I do not endorse or promote the use of tarot readings for fortune-telling or divination purposes.</span></p>\n<blockquote>\n</blockquote>";

				const frontmatter = {"title":"Baca Tarot","publishDate":"2020-10-14T17:00:00.000Z","img":"/assets/works/baca-tarot/cover.png","img_alt":"Baca Tarot - Tarot reading app screenshot","description":"Platform that bridges tarot readers and seekers, allowing users to get tarot readings from professional readers.\n","tags":["Web","Vue.js"],"minutesRead":"1 min read"};
				const file = "/Users/mac/Projects/web/tioirawan.github.io/src/content/work/baca-tarot.md";
				const url = undefined;
				function rawContent() {
					return "\n# Overview\n\n<span style=\"color: #ff0000;\">**Disclaimer**: This project is managed and operated by my client. The publication is intended for portfolio purposes only, and I do not endorse or promote the use of tarot readings for fortune-telling or divination purposes.</span>\n> ";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"overview","text":"Overview"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
