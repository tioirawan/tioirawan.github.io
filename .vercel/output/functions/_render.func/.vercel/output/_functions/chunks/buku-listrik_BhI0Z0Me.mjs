import { m as createComponent, n as renderTemplate, p as maybeRenderHead, v as unescapeHTML } from './astro/server_CRWa3zks.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"overview\">Overview</h1>\n<p>Buku Listrik is a mobile application that helps users manage their electricity usage by tracking daily token usage and purchases. The app calculates the average daily usage, remaining balance, and forecasted days remaining based on the user’s input. The app also provides a history of token purchases and usage, allowing users to track their electricity consumption over time.</p>\n<p><a href=\"https://play.google.com/store/apps/details?id=id.indmind.bukulistrik&#x26;hl=id\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">PlayStore</a></p>";

				const frontmatter = {"title":"Buku Listrik","publishDate":"2022-07-08T12:00:00.000Z","img":"/assets/works/buku-listrik/cover.png","img_alt":"Buku Listrik - Electricity bill app screenshot","description":"App to manage electricity usage by tracking daily token usage and purchases to calculate average daily usage, remaining balance, and forecasted days remaining.\n","tags":["Mobile","Flutter"],"repo":"https://github.com/tioirawan/bukulistrik","minutesRead":"1 min read"};
				const file = "/Users/mac/Projects/web/tioirawan.github.io/src/content/work/buku-listrik.md";
				const url = undefined;
				function rawContent() {
					return "\n# Overview\n\nBuku Listrik is a mobile application that helps users manage their electricity usage by tracking daily token usage and purchases. The app calculates the average daily usage, remaining balance, and forecasted days remaining based on the user's input. The app also provides a history of token purchases and usage, allowing users to track their electricity consumption over time.\n\n[PlayStore](https://play.google.com/store/apps/details?id=id.indmind.bukulistrik&hl=id)";
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
