import { m as createComponent, n as renderTemplate, o as renderComponent, p as maybeRenderHead, s as addAttribute } from './astro/server_CRWa3zks.mjs';
import 'kleur/colors';
import { $ as $$Button, a as $$BaseLayout } from './BaseLayout_wOAhKR6_.mjs';
import { g as getAllPosts, b as getUniqueTagsWithCount } from './post_CdDrguks.mjs';
import 'clsx';
import './_astro_content_Cbqj-FSa.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getAllPosts();
  const allTags = getUniqueTagsWithCount(allPosts);
  const meta = {
    description: "A list of all the topics I've written about in my posts",
    title: "All Tags"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full"> ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/blog", "style": "button" }, { "icon-before": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"> <path fill="currentColor" d="m6.921 12.5l5.792 5.792L12 19l-7-7l7-7l.713.708L6.921 11.5H19v1z"></path> </svg>` })} <h1 class="mb-6 mt-5 text-2xl font-bold">Tags</h1> ${allTags.length === 0 && renderTemplate`<p>No posts yet.</p>`} ${allTags.length > 0 && renderTemplate`<ul class="flex flex-col gap-y-3"> ${allTags.map(([tag, val]) => renderTemplate`<li class="flex items-center gap-x-2 "> <a class="inline-block underline underline-offset-4 hover:text-foreground/75" data-astro-prefetch${addAttribute(`/tags/${tag}/`, "href")}${addAttribute(`View posts with the tag: ${tag}`, "title")}>
&#35;${tag} </a> <span class="inline-block">
- ${val} post${val > 1 && "s"} </span> </li>`)} </ul>`} </div> ` })}`;
}, "/Users/mac/Projects/web/tioirawan.github.io/src/pages/tags/index.astro", void 0);

const $$file = "/Users/mac/Projects/web/tioirawan.github.io/src/pages/tags/index.astro";
const $$url = "/tags";

export { $$Index as default, $$file as file, $$url as url };
