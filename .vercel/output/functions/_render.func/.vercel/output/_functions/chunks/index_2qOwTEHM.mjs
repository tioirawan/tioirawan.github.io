import { q as createAstro, m as createComponent, n as renderTemplate, o as renderComponent, p as maybeRenderHead, t as renderSlot, s as addAttribute } from './astro/server_CRWa3zks.mjs';
import 'kleur/colors';
import './_astro_content_Cbqj-FSa.mjs';
import { c as cn, $ as $$Button, a as $$BaseLayout } from './BaseLayout_wOAhKR6_.mjs';
import { $ as $$Image } from './_astro_assets_weAN4tru.mjs';
import { $ as $$ProjectCard } from './ProjectCard_DTRJuX8O.mjs';
import 'clsx';
import { $ as $$PostPreview } from './PostPreview_PUTpQ74_.mjs';
import { g as getAllPosts, s as sortMDByDate } from './post_CdDrguks.mjs';
import { b as getFeaturedWorks } from './work_C56Vcbuo.mjs';

const $$Astro$3 = createAstro("https://tioirawan.github.io");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    as: Tag = "div",
    class: className,
    href,
    heading,
    subheading,
    date,
    imagePath,
    altText,
    imageClass,
    target
  } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/about-astro.png": () => import('./about-astro_Dg1TtVCS.mjs'),"/src/assets/bpjs.jpeg": () => import('./bpjs_CbNF4NQK.mjs'),"/src/assets/coming-soon.png": () => import('./coming-soon_Dfx8ziwb.mjs'),"/src/assets/dicoding.jpeg": () => import('./dicoding_DnNwCdMO.mjs'),"/src/assets/ezy.jpeg": () => import('./ezy_SUpSWYNl.mjs'),"/src/assets/hummatech.jpeg": () => import('./hummatech_C9HbyguC.mjs'),"/src/assets/polinema.jpeg": () => import('./polinema_8JSmaFsr.mjs'),"/src/assets/profile.png": () => Promise.resolve().then(() => profile),"/src/assets/smkn8.jpeg": () => import('./smkn8_CbPie4Ad.mjs'),"/src/assets/wripolinema_logo.jpeg": () => import('./wripolinema_logo_Dpy3MZd3.mjs')});
  if (imagePath) {
    if (!images[imagePath])
      throw new Error(`"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`);
  }
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "relative rounded-2xl border border-border bg-primary-foreground px-5 py-3",
    href && "transition-all hover:border-foreground/25 hover:shadow-sm"
  ), "href": href, "target": target }, { "default": ($$result2) => renderTemplate`${imagePath && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": images[imagePath](), "alt": altText, "class": cn("mb-3 rounded-lg md:absolute md:mb-0", imageClass), "loading": "eager" })}`}${maybeRenderHead()}<div class="flex flex-col gap-y-1.5"> <div class="flex flex-col gap-y-0.5"> <h1 class="text-lg font-medium">${heading}</h1> <h2 class="text-muted-foreground">${subheading}</h2> <h2 class="text-muted-foreground">${date}</h2> </div> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "/Users/mac/Projects/web/tioirawan.github.io/src/components/Card.astro", void 0);

const $$Astro$2 = createAstro("https://tioirawan.github.io");
const $$Label = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Label;
  const { class: className, as: Tag = "div", title, href, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "flex flex-row items-center justify-center gap-x-2",
    href && "hover:opacity-75 transition-all"
  ), "href": href, ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["icon"])} ${maybeRenderHead()}<p>${title}</p> ` })}`;
}, "/Users/mac/Projects/web/tioirawan.github.io/src/components/Label.astro", void 0);

const $$Astro$1 = createAstro("https://tioirawan.github.io");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const { class: className, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn(className, "flex flex-col gap-y-5 md:flex-row md:gap-y-0"), "class")}> <div class="text-xl font-semibold md:w-1/3"> <h2>${title}</h2> </div> <div class="flex flex-col gap-y-3 md:w-2/3"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/mac/Projects/web/tioirawan.github.io/src/components/Section.astro", void 0);

const $$Astro = createAstro("https://tioirawan.github.io");
const $$SkillLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SkillLayout;
  const { title, skills } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-2 md:flex-row md:gap-x-5 md:gap-y-0"> <h3 class="w-1/5 font-medium">${title}</h3> <div class="flex w-4/5 flex-row flex-wrap gap-x-4 gap-y-2"> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "Button", $$Button, { "as": "button", "title": skill, "style": "pill" })}`)} </div> </div>`;
}, "/Users/mac/Projects/web/tioirawan.github.io/src/components/SkillLayout.astro", void 0);

const astro = new Proxy({"src":"/_astro/profile.DkAjdMmh.png","width":919,"height":1097,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/Projects/web/tioirawan.github.io/src/assets/profile.png";
							}
							
							return target[name];
						}
					});

const profile = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: astro
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const languages = ["English", "Bahasa Indonesia"];
  const frontend = ["Flutter", "Jetpack Compose", "SwiftUI", "Vue", "React"];
  const backend = ["Laravel", "Express", "Nest.js", "Solana - Seahorse"];
  const others = ["CI/CD", "Unit & Integration Testing", "Jira", "UI/UX", "Figma"];
  const MAX_POSTS = 10;
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate(allPosts).slice(0, MAX_POSTS);
  const allWorks = await getFeaturedWorks();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": { title: "Home" } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full flex-col gap-y-10"> <section class="flex flex-col items-center gap-y-7"> ${renderComponent($$result2, "Image", $$Image, { "src": astro, "alt": "profile photo", "class": "h-40 w-auto rounded-full bg-slate-200 p-1", "loading": "eager" })} <div class="flex flex-col items-center gap-y-4"> <h1 class="text-3xl font-bold">Tio Irawan</h1> <a href="mailto:tioirawan063@gmail.com" class="flex flex-row items-center gap-x-3 rounded-3xl border border-input px-4 py-2 text-sm shadow-sm transition-all hover:shadow-md"> <span class="relative flex items-center justify-center"> <span class="absolute inline-flex h-2 w-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span> <span class="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span> </span> <p class="font-medium">Currently looking for internship</p> </a> <div class="flex flex-wrap justify-center gap-x-7 gap-y-3"> ${renderComponent($$result2, "Label", $$Label, { "title": "State Polytechnic of Malang" }, { "icon": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M4.615 20q-.69 0-1.152-.462Q3 19.075 3 18.385v-9.77q0-.69.463-1.152Q3.925 7 4.615 7H9V5.615q0-.69.463-1.152Q9.925 4 10.615 4h2.77q.69 0 1.153.463q.462.462.462 1.152V7h4.385q.69 0 1.152.463q.463.462.463 1.152v9.77q0 .69-.462 1.152q-.463.463-1.153.463zm0-1h14.77q.23 0 .423-.192q.192-.193.192-.423v-9.77q0-.23-.192-.423Q19.615 8 19.385 8H4.615q-.23 0-.423.192Q4 8.385 4 8.615v9.77q0 .23.192.423q.193.192.423.192M10 7h4V5.615q0-.23-.192-.423Q13.615 5 13.385 5h-2.77q-.23 0-.423.192q-.192.193-.192.423zM4 19V8z"></path></svg>` })} ${renderComponent($$result2, "Label", $$Label, { "title": "Malang, Indonesia" }, { "icon": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M12.003 11.73q.668 0 1.14-.475q.472-.475.472-1.143t-.475-1.14q-.476-.472-1.143-.472t-1.14.476q-.472.475-.472 1.143t.475 1.14q.476.472 1.143.472M12 19.677q2.82-2.454 4.458-4.991q1.638-2.538 1.638-4.39q0-2.744-1.737-4.53T12 3.981q-2.621 0-4.359 1.785t-1.737 4.53q0 1.852 1.638 4.39q1.639 2.537 4.458 4.99m0 1.343q-3.525-3.117-5.31-5.814q-1.786-2.697-1.786-4.909q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 2.212-1.785 4.909q-1.786 2.697-5.311 5.814m0-10.904"></path></svg>` })} ${renderComponent($$result2, "Label", $$Label, { "title": "Connect on Linkedin", "as": "a", "href": "https://www.linkedin.com/in/tioirawan/", "target": "_blank" }, { "icon": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="h-5 w-5 text-foreground/75"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path></svg>` })} </div> </div> </section> ${renderComponent($$result2, "Section", $$Section, { "title": "About" }, { "default": ($$result3) => renderTemplate` <p class="text-muted-foreground">
Started coding 7 years ago, I have been working on various projects and have experience in a
				lot of different technologies. Currently, I am a student at State Polytechnic of Malang
				majoring in Informatics Engineering. Recently finished my internship at BPJS Ketenagakerjaan
				as a Mobile Developer Intern. I am looking for an internship opportinities to further
				develop my skills and knowledge.
</p> ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Experience" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "heading": "Mobile Developer Intern", "subheading": "BPJS Ketenagakerjaan", "date": "Feb 2024 - Jun 2024", "imagePath": "/src/assets/bpjs.jpeg", "altText": "BPJS Ketenagakerjaan logo", "imageClass": "h-12 w-auto md:-left-16" }, { "default": ($$result4) => renderTemplate`  ` })} ${renderComponent($$result3, "Card", $$Card, { "heading": "External Code Reviewer", "subheading": "Dicoding Academy", "date": "Apr 2020 - Current", "imagePath": "/src/assets/dicoding.jpeg", "altText": "Dicoding Academy logo", "imageClass": "h-12 w-auto md:-left-16" })} ${renderComponent($$result3, "Card", $$Card, { "heading": "Fullstack Developer", "subheading": "Hummatech", "date": "May 2021 - Jun 2022", "imagePath": "/src/assets/hummatech.jpeg", "altText": "Hummatech logo", "imageClass": "h-12 w-auto md:-left-16" })} ${renderComponent($$result3, "Card", $$Card, { "heading": "Mobile Developer Intern", "subheading": "Ezy Industries", "date": "Jan 2020 - Apr 2020", "imagePath": "/src/assets/ezy.jpeg", "altText": "Ezy Industries logo", "imageClass": "h-12 w-auto md:-left-16" })} ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Education" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "heading": "State Polytechnic of Malang", "subheading": "Bachelor of Applied Science - BASc, Informatics Engineering", "date": "Aug 2018 - Jun 2025 (Expected)", "imagePath": "/src/assets/polinema.jpeg", "altText": "State Polytechnic of Malang logo", "imageClass": "h-12 w-auto md:-left-16" })} ${renderComponent($$result3, "Card", $$Card, { "heading": "SMK Negeri 8 Malang", "subheading": "High School Diploma, Computer Software Engineering", "date": "Jul 2018 - Jun 2021", "imagePath": "/src/assets/smkn8.jpeg", "altText": "SMK Negeri 8 Malang logo", "imageClass": "h-12 w-auto md:-left-16" })} ` })} ${allWorks.length > 0 && renderTemplate`${renderComponent($$result2, "Section", $$Section, { "title": "Projects" }, { "default": ($$result3) => renderTemplate` <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"> ${allWorks.map((work) => renderTemplate`${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "href": `work/${work.slug}`, "heading": work.data.title, "subheading": work.data.description, "image": work.data.img, "altText": work.data.title })}`)} </div> <a href="/work" class="hover:text-foreground/75">
See all projects
</a> ` })}`} ${renderComponent($$result2, "Section", $$Section, { "title": "Certifications" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "as": "a", "heading": "Flutter Developer Expert", "subheading": "Dicoding Academy", "date": "expires on Nov 2024", "imagePath": "/src/assets/dicoding.jpeg", "altText": "Lorem, ipsum dolor sit", "imageClass": "h-11 w-auto md:-left-16", "href": "https://www.dicoding.com/certificates/L4PQ3WD7QPO1", "target": "_blank" })} ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Skills" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Languages", "skills": languages })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Frontend", "skills": frontend })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Backend", "skills": backend })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Others", "skills": others })} ` })} ${allPostsByDate.length > 0 && renderTemplate`${renderComponent($$result2, "Section", $$Section, { "title": "Posts" }, { "default": ($$result3) => renderTemplate` <ul class="flex flex-col gap-y-2"> ${allPostsByDate.map((p) => renderTemplate`<li class="flex flex-col gap-x-2 sm:flex-row"> ${renderComponent($$result3, "PostPreview", $$PostPreview, { "post": p })} </li>`)} </ul> ` })}`} </div> <a href="mailto:tioirawan063@gmail.com" class="mt-16 flex flex-row items-center gap-x-3 rounded-3xl border border-input px-4 py-2 text-sm shadow-sm transition-all hover:shadow-md"> <span class="relative flex items-center justify-center"> <span class="absolute inline-flex h-2 w-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span> <span class="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span> </span> <p class="font-medium">Contact me for an internship opportunity</p> </a> ` })}`;
}, "/Users/mac/Projects/web/tioirawan.github.io/src/pages/index.astro", void 0);

const $$file = "/Users/mac/Projects/web/tioirawan.github.io/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
