import { m as createComponent, n as renderTemplate, p as maybeRenderHead, v as unescapeHTML } from './astro/server_CRWa3zks.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"overview\">Overview</h1>\n<p>My KTP is a mobile application that helps users scan and extract information from Indonesian ID cards (KTP) using OCR technology. The app uses the device’s camera to capture an image of the ID card and then extracts the relevant information, such as name, address, and ID number, using optical character recognition (OCR) server written in Python. The app also provides a history of scanned ID cards, allowing users to keep track of their scanned documents.</p>";

				const frontmatter = {"title":"My KTP","publishDate":"2023-10-12T12:00:00.000Z","img":"/assets/works/myktp/cover.png","img_alt":"My KTP Screenshoot","description":"App to scan and extract information from Indonesian ID card (KTP) using OCR technology.\n","tags":["Mobile","Flutter"],"repo":"https://github.com/tioirawan/myocr","featured":true,"minutesRead":"1 min read"};
				const file = "/Users/mac/Projects/web/tioirawan.github.io/src/content/work/myktp.md";
				const url = undefined;
				function rawContent() {
					return "\n# Overview\n\nMy KTP is a mobile application that helps users scan and extract information from Indonesian ID cards (KTP) using OCR technology. The app uses the device's camera to capture an image of the ID card and then extracts the relevant information, such as name, address, and ID number, using optical character recognition (OCR) server written in Python. The app also provides a history of scanned ID cards, allowing users to keep track of their scanned documents.";
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
