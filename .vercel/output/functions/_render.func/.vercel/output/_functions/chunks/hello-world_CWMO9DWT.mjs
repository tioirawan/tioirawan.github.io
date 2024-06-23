import { m as createComponent, n as renderTemplate, p as maybeRenderHead, v as unescapeHTML } from './astro/server_CRWa3zks.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Hi everyone!</p>\n<p>My name is Tio Irawan, and I am super excited to start this blog. This is a place where I will share bits of my personal life, my journey in learning new things, and all the cool stuff I discover about mobile app development.</p>\n<h2 id=\"why-i-started-this-blog\">Why I Started This Blog</h2>\n<p>I have always been curious about technology. From playing with gadgets to understanding how apps work, it’s been a passion of mine. I thought it would be great to document my learning process and share it with others who might be interested in the same things.</p>\n<h2 id=\"things-i-will-share\">Things I Will Share</h2>\n<h3 id=\"my-learning-journey\">My Learning Journey</h3>\n<p>I am always learning something new. Whether it’s a new programming language, a cool app, or just a new way to solve a problem, I will share my experiences here. Sometimes things work out, and sometimes they don’t, but every experience is a chance to learn.</p>\n<h3 id=\"latest-knowledge\">Latest Knowledge</h3>\n<p>As I dive into new topics, I will share the latest tips, tricks, and trends that I find. This could be anything from coding tips to the latest updates in mobile app development.</p>\n<h3 id=\"personal-stories\">Personal Stories</h3>\n<p>Life isn’t just about technology, right? I’ll also share some personal stories, like interesting things happening in my life, challenges I face, and how I overcome them. This way, you get to know a bit more about the person behind the blog.</p>\n<h3 id=\"mobile-app-development\">Mobile App Development</h3>\n<p>This is my favorite part. I love mobile apps, and I am always exploring how they are made. I will share tutorials, code snippets, and my own projects. If you’re into making apps or just curious about how they work, I hope you find this section useful.</p>\n<p>Thank you for stopping by. Stay tuned for more updates!</p>";

				const frontmatter = {"title":"Welcome to My Blog: A Journey into Tech and Life","description":"Blogging is something I always afraid to start. But here I am, starting my first blog post.","publishDate":"23 Jun 2024","coverImage":{"src":"./hello-world.png","alt":"My, looking at my laptop screen"},"tags":["blog","hello"],"minutesRead":"2 min read"};
				const file = "/Users/mac/Projects/web/tioirawan.github.io/src/content/post/hello-world.md";
				const url = undefined;
				function rawContent() {
					return "\nHi everyone!\n\nMy name is Tio Irawan, and I am super excited to start this blog. This is a place where I will share bits of my personal life, my journey in learning new things, and all the cool stuff I discover about mobile app development.\n\n## Why I Started This Blog\n\nI have always been curious about technology. From playing with gadgets to understanding how apps work, it's been a passion of mine. I thought it would be great to document my learning process and share it with others who might be interested in the same things.\n\n## Things I Will Share\n\n### My Learning Journey\n\nI am always learning something new. Whether it's a new programming language, a cool app, or just a new way to solve a problem, I will share my experiences here. Sometimes things work out, and sometimes they don’t, but every experience is a chance to learn.\n\n### Latest Knowledge\n\nAs I dive into new topics, I will share the latest tips, tricks, and trends that I find. This could be anything from coding tips to the latest updates in mobile app development.\n\n### Personal Stories\n\nLife isn't just about technology, right? I'll also share some personal stories, like interesting things happening in my life, challenges I face, and how I overcome them. This way, you get to know a bit more about the person behind the blog.\n\n### Mobile App Development\n\nThis is my favorite part. I love mobile apps, and I am always exploring how they are made. I will share tutorials, code snippets, and my own projects. If you're into making apps or just curious about how they work, I hope you find this section useful.\n\nThank you for stopping by. Stay tuned for more updates!\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"why-i-started-this-blog","text":"Why I Started This Blog"},{"depth":2,"slug":"things-i-will-share","text":"Things I Will Share"},{"depth":3,"slug":"my-learning-journey","text":"My Learning Journey"},{"depth":3,"slug":"latest-knowledge","text":"Latest Knowledge"},{"depth":3,"slug":"personal-stories","text":"Personal Stories"},{"depth":3,"slug":"mobile-app-development","text":"Mobile App Development"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
