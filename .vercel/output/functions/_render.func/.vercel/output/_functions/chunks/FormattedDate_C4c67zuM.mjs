import { q as createAstro, m as createComponent, n as renderTemplate, p as maybeRenderHead, s as addAttribute, u as spreadAttributes } from './astro/server_CRWa3zks.mjs';
import { s as siteConfig } from './_astro_content_Cbqj-FSa.mjs';
import 'clsx';

const dateFormat = new Intl.DateTimeFormat(siteConfig.date.locale, siteConfig.date.options);
function getFormattedDate(date, options) {
  if (typeof options !== "undefined") {
    return new Date(date).toLocaleDateString(siteConfig.date.locale, {
      ...siteConfig.date.options,
      ...options
    });
  }
  return dateFormat.format(new Date(date));
}

const $$Astro = createAstro("https://tioirawan.github.io");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date, dateTimeOptions, ...attrs } = Astro2.props;
  const postDate = getFormattedDate(date, dateTimeOptions);
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}${spreadAttributes(attrs)}> ${postDate} </time>`;
}, "/Users/mac/Projects/web/tioirawan.github.io/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
