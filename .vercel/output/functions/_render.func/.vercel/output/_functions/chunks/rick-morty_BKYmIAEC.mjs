import { m as createComponent, n as renderTemplate, p as maybeRenderHead, v as unescapeHTML } from './astro/server_CRWa3zks.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"overview\">Overview</h1>\n<p>This is a simple app that uses the Rick and Morty API to display a list of characters and their details. Users can search for characters by name, add characters to their favorites, and view their favorites.</p>\n<p>This app is built with Flutter for BIGIO’s Mobile App Developer Internship Take Home Challange. Built with Riverpod for state management, Dio for networking, and Sqflite for local storage.</p>";

				const frontmatter = {"title":"Rick Morty","publishDate":"2023-08-15T12:00:00.000Z","img":"/assets/works/rick-morty/cover.png","img_alt":"Rick Morty Screenshoot","description":"App to display a list of characters and their details from Rick and Morty API. Users can search for characters by name, add characters to their favorites, and view their favorites.\n","tags":["Mobile","Flutter"],"repo":"https://github.com/tioirawan/rick-morty-app","minutesRead":"1 min read"};
				const file = "/Users/mac/Projects/web/tioirawan.github.io/src/content/work/rick-morty.md";
				const url = undefined;
				function rawContent() {
					return "\n# Overview\n\nThis is a simple app that uses the Rick and Morty API to display a list of characters and their details. Users can search for characters by name, add characters to their favorites, and view their favorites.\n\nThis app is built with Flutter for BIGIO's Mobile App Developer Internship Take Home Challange. Built with Riverpod for state management, Dio for networking, and Sqflite for local storage.";
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
