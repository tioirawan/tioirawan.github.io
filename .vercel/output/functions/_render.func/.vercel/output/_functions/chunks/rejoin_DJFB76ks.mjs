import { m as createComponent, n as renderTemplate, p as maybeRenderHead, v as unescapeHTML } from './astro/server_CRWa3zks.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"overview\">Overview</h1>\n<p>Rejoin is an attendance tracking app designed to simplify workforce management. It focuses on two key features: location capture and selfie verification. By using the GPS on users’ devices, the app records where employees clock in and out. This helps ensure accurate attendance records and provides insights into workforce productivity. With its easy-to-use interface and advanced technology, Rejoin helps businesses manage their workforce more efficiently.</p>";

				const frontmatter = {"title":"Rejoin - Attendance Tracking","publishDate":"2021-10-12T17:00:00.000Z","img":"/assets/works/rejoin/cover.png","img_alt":"Rejoin Screenshots","description":"Attendance tracking app with location capture and selfie verification. It uses device GPS to capture where an employee is clocking in and out.\n","tags":["Mobile","Web","Flutter","Laravel"],"repo":"https://github.com/Innodev-K8/rejoin","featured":true,"minutesRead":"1 min read"};
				const file = "/Users/mac/Projects/web/tioirawan.github.io/src/content/work/rejoin.md";
				const url = undefined;
				function rawContent() {
					return "\n# Overview\n\nRejoin is an attendance tracking app designed to simplify workforce management. It focuses on two key features: location capture and selfie verification. By using the GPS on users' devices, the app records where employees clock in and out. This helps ensure accurate attendance records and provides insights into workforce productivity. With its easy-to-use interface and advanced technology, Rejoin helps businesses manage their workforce more efficiently.";
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
