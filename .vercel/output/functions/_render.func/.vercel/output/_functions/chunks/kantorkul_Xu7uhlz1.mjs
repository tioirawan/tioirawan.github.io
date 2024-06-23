import { m as createComponent, n as renderTemplate, p as maybeRenderHead, v as unescapeHTML } from './astro/server_CRWa3zks.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"overview\">Overview</h1>\n<p>KantorKul is a mobile application that helps users buy and sell office supplies and equipment. The app allows users to list their items for sale, browse items for sale, and contact sellers to make purchases. Users can create an account, list their items for sale, and browse items for sale by category. The app also provides a chat feature that allows users to communicate with sellers to make purchases.</p>\n<p>In this project, my only task is slicing the design from Figma to Flutter code. The design is provided by the client, and I have to implement it as close as possible to the design.</p>";

				const frontmatter = {"title":"KantorKul","publishDate":"2022-12-08T12:00:00.000Z","img":"/assets/works/kantorkul/cover.png","img_alt":"Kantor Kul - Office stuff marketplace app screenshot","description":"KantorKul is a mobile application that helps users buy and sell office supplies and equipment. The app allows users to list their items for sale, browse items for sale, and contact sellers to make purchases.\n","tags":["Mobile","Flutter"],"minutesRead":"1 min read"};
				const file = "/Users/mac/Projects/web/tioirawan.github.io/src/content/work/kantorkul.md";
				const url = undefined;
				function rawContent() {
					return "\n# Overview\n\nKantorKul is a mobile application that helps users buy and sell office supplies and equipment. The app allows users to list their items for sale, browse items for sale, and contact sellers to make purchases. Users can create an account, list their items for sale, and browse items for sale by category. The app also provides a chat feature that allows users to communicate with sellers to make purchases.\n\nIn this project, my only task is slicing the design from Figma to Flutter code. The design is provided by the client, and I have to implement it as close as possible to the design.";
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
