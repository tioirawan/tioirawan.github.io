import { m as createComponent, n as renderTemplate, p as maybeRenderHead, v as unescapeHTML } from './astro/server_CRWa3zks.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"overview\">Overview</h1>\n<p>ESQ is a mobile application for car dealerships that allows salespeople to learn, practice, and test their knowledge of car models, features, and specifications. The app provides a quiz feature that allows users to test their knowledge of car models, features, and specifications. Users can create an account, take quizzes, and view their quiz history. The app also provides a leaderboard feature that allows users to compare their quiz scores with other users.</p>";

				const frontmatter = {"title":"ESQ","publishDate":"2023-12-15T12:00:00.000Z","img":"/assets/works/esq/cover.png","img_alt":"ESQ Screenshoot","description":"App for Car Dealership allowing salespeople to learn, practice, and test their knowledge of car models, features, and specifications.\n","tags":["Mobile","Flutter"],"minutesRead":"1 min read"};
				const file = "/Users/mac/Projects/web/tioirawan.github.io/src/content/work/esq.md";
				const url = undefined;
				function rawContent() {
					return "\n# Overview\n\nESQ is a mobile application for car dealerships that allows salespeople to learn, practice, and test their knowledge of car models, features, and specifications. The app provides a quiz feature that allows users to test their knowledge of car models, features, and specifications. Users can create an account, take quizzes, and view their quiz history. The app also provides a leaderboard feature that allows users to compare their quiz scores with other users.";
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
