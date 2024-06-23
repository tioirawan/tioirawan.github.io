import { m as createComponent, n as renderTemplate, p as maybeRenderHead, v as unescapeHTML } from './astro/server_CRWa3zks.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"overview\">Overview</h1>\n<p>Diiket or Digital Market is an e-commerce platform for traditional market. Diiket was born due to concerns about traditional market traders facing other competitors in this digital era.</p>\n<h1 id=\"repositories\">Repositories</h1>\n<ul>\n<li><a href=\"https://github.com/Innodev-K8/diiket-core\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">Core</a> - Core package, used by the user, driver, and seller mobile app</li>\n<li><a href=\"https://github.com/Innodev-K8/diiket\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">Mobile App</a> - Mobile app for customer</li>\n<li><a href=\"https://github.com/Innodev-K8/diiket-driver\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">Driver Mobile App</a> - Mobile app for delivery driver</li>\n<li><a href=\"https://github.com/Innodev-K8/diiket-seller\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">Seller Mobile App</a> - Mobile app for market sellers</li>\n<li><a href=\"https://github.com/Innodev-K8/diiket-server\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">Server</a> - Backend Server</li>\n</ul>";

				const frontmatter = {"title":"Diiket - Digital Market","publishDate":"2022-08-24T14:00:00.000Z","img":"/assets/works/diiket/cover.png","img_alt":"Diiket Screenshot","description":"Diiket or Digital Market is an e-commerce platform for traditional market.\n","tags":["Mobile","Web","Flutter","Laravel"],"repo":"https://github.com/Innodev-K8/diiket","minutesRead":"1 min read"};
				const file = "/Users/mac/Projects/web/tioirawan.github.io/src/content/work/diiket.md";
				const url = undefined;
				function rawContent() {
					return "\n# Overview\n\nDiiket or Digital Market is an e-commerce platform for traditional market. Diiket was born due to concerns about traditional market traders facing other competitors in this digital era.\n\n# Repositories\n\n- [Core](https://github.com/Innodev-K8/diiket-core) - Core package, used by the user, driver, and seller mobile app\n- [Mobile App](https://github.com/Innodev-K8/diiket) - Mobile app for customer\n- [Driver Mobile App](https://github.com/Innodev-K8/diiket-driver) - Mobile app for delivery driver\n- [Seller Mobile App](https://github.com/Innodev-K8/diiket-seller) - Mobile app for market sellers\n- [Server](https://github.com/Innodev-K8/diiket-server) - Backend Server";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"overview","text":"Overview"},{"depth":1,"slug":"repositories","text":"Repositories"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
