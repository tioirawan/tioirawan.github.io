import { m as createComponent, n as renderTemplate, p as maybeRenderHead, v as unescapeHTML } from './astro/server_CRWa3zks.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"overview\">Overview</h1>\n<p>Simple and straightforward. This application is designed for those who prefer a minimalist approach, especially when it comes to managing daily school activities.</p>\n<p>Key Features:</p>\n<ul>\n<li>Task Management: Easily keep track of your school assignments, deadlines, and tasks in one convenient place.\nWhile the current feature set is minimal, we’re open to expanding and enhancing the application based on user feedback and evolving needs. Stay tuned for potential updates and new features in the future!</li>\n<li>Notifications: Receive timely reminders and notifications about upcoming deadlines and tasks to help you stay organized and on top of your workload.</li>\n</ul>\n<p>That’s all there is to it! No unnecessary bells and whistles, just a simple and practical tool to help you manage your schoolwork more efficiently.</p>";

				const frontmatter = {"title":"Buku Tugas","publishDate":"2021-07-31T17:00:00.000Z","img":"/assets/works/buku-tugas/cover.png","img_alt":"Buku Tugas - Homework app screenshot","description":"Note-taking app with an emphasis on simplicity and practicality.\n","tags":["Mobile","Flutter"],"repo":"https://github.com/Innodev-K8/bukutugas","minutesRead":"1 min read"};
				const file = "/Users/mac/Projects/web/tioirawan.github.io/src/content/work/buku-tugas.md";
				const url = undefined;
				function rawContent() {
					return "\n# Overview\n\nSimple and straightforward. This application is designed for those who prefer a minimalist approach, especially when it comes to managing daily school activities.\n\nKey Features:\n\n- Task Management: Easily keep track of your school assignments, deadlines, and tasks in one convenient place.\nWhile the current feature set is minimal, we're open to expanding and enhancing the application based on user feedback and evolving needs. Stay tuned for potential updates and new features in the future!\n- Notifications: Receive timely reminders and notifications about upcoming deadlines and tasks to help you stay organized and on top of your workload.\n\nThat's all there is to it! No unnecessary bells and whistles, just a simple and practical tool to help you manage your schoolwork more efficiently.";
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
