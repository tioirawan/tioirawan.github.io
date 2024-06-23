import { q as createAstro, m as createComponent, n as renderTemplate, o as renderComponent, p as maybeRenderHead, t as renderSlot } from './astro/server_CRWa3zks.mjs';
import 'kleur/colors';
import './_astro_content_Cbqj-FSa.mjs';
import { c as cn } from './BaseLayout_wOAhKR6_.mjs';
import { $ as $$Image } from './_astro_assets_weAN4tru.mjs';

const $$Astro = createAstro("https://tioirawan.github.io");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { as: Tag = "a", class: className, href, heading, subheading, image, altText } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "flex flex-col gap-y-3 rounded-2xl border border-border bg-primary-foreground ",
    href && "transition-all hover:border-foreground/25 hover:shadow-sm"
  ), "href": href }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": altText, "width": 400, "height": 200, "class": "h-48 w-full rounded-2xl rounded-bl-none rounded-br-none object-cover", "loading": "eager" })} ${maybeRenderHead()}<div class="flex flex-col gap-y-0.5 px-5 py-4"> <h1 class="text-lg font-medium">${heading}</h1> <h2 class="text-muted-foreground">${subheading}</h2> </div> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/mac/Projects/web/tioirawan.github.io/src/components/ProjectCard.astro", void 0);

export { $$ProjectCard as $ };
