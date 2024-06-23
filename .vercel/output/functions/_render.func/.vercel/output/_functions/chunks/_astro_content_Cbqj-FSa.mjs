import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError, x as prependForwardSlash } from './astro/assets-service_Bxr6wzEG.mjs';
import { m as createComponent, x as renderUniqueStylesheet, y as renderScriptElement, z as createHeadAndContent, n as renderTemplate, o as renderComponent, v as unescapeHTML } from './astro/server_CRWa3zks.mjs';
import 'kleur/colors';

const siteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: "SRLEOM",
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: "astro-theme-resume",
  // Meta property used as the default description meta property
  description: "The official Astro Resume Theme",
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: "en-GB",
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: "en_GB",
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: "en-GB",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric"
    }
  }
};

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://tioirawan.github.io", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post-back/cover-image/index.md": () => import('./index_CGbMFCOK.mjs'),"/src/content/post-back/draft-post.md": () => import('./draft-post_DBtBW3Ri.mjs'),"/src/content/post-back/long-title.md": () => import('./long-title_CN61dg6G.mjs'),"/src/content/post-back/markdown-elements/index.md": () => import('./index_BdCBkOrj.mjs'),"/src/content/post-back/missing-content.md": () => import('./missing-content_QWCO1Xvd.mjs'),"/src/content/post-back/social-image.md": () => import('./social-image_CzeP-7Fr.mjs'),"/src/content/post-back/unique-tags.md": () => import('./unique-tags_CdEbl40N.mjs'),"/src/content/post/hello-world.md": () => import('./hello-world_B0JHh95o.mjs'),"/src/content/work/baca-tarot.md": () => import('./baca-tarot_W_E--lT8.mjs'),"/src/content/work/buku-listrik.md": () => import('./buku-listrik_DVKTyOv2.mjs'),"/src/content/work/buku-tugas.md": () => import('./buku-tugas_DNDzeZOp.mjs'),"/src/content/work/diiket.md": () => import('./diiket_BZYI8jG1.mjs'),"/src/content/work/elib.md": () => import('./elib_noQjSWo0.mjs'),"/src/content/work/esq.md": () => import('./esq_CjA6lOGd.mjs'),"/src/content/work/game-moral-awareness.md": () => import('./game-moral-awareness_D2UtaMyj.mjs'),"/src/content/work/greeny.md": () => import('./greeny_Bji_QdzR.mjs'),"/src/content/work/kantorkul.md": () => import('./kantorkul_C_zAJuXY.mjs'),"/src/content/work/mangkat.md": () => import('./mangkat_DiKlz8hC.mjs'),"/src/content/work/myktp.md": () => import('./myktp_CjgPYVVG.mjs'),"/src/content/work/rejoin.md": () => import('./rejoin_CPK4NlQd.mjs'),"/src/content/work/rick-morty.md": () => import('./rick-morty_36sPP7ys.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"post":{"type":"content","entries":{"hello-world":"/src/content/post/hello-world.md"}},"post-back":{"type":"content","entries":{"draft-post":"/src/content/post-back/draft-post.md","social-image":"/src/content/post-back/social-image.md","long-title":"/src/content/post-back/long-title.md","missing-content":"/src/content/post-back/missing-content.md","unique-tags":"/src/content/post-back/unique-tags.md","cover-image":"/src/content/post-back/cover-image/index.md","markdown-elements":"/src/content/post-back/markdown-elements/index.md"}},"work":{"type":"content","entries":{"baca-tarot":"/src/content/work/baca-tarot.md","buku-listrik":"/src/content/work/buku-listrik.md","diiket":"/src/content/work/diiket.md","buku-tugas":"/src/content/work/buku-tugas.md","elib":"/src/content/work/elib.md","game-moral-awareness":"/src/content/work/game-moral-awareness.md","greeny":"/src/content/work/greeny.md","kantorkul":"/src/content/work/kantorkul.md","myktp":"/src/content/work/myktp.md","esq":"/src/content/work/esq.md","mangkat":"/src/content/work/mangkat.md","rejoin":"/src/content/work/rejoin.md","rick-morty":"/src/content/work/rick-morty.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post-back/cover-image/index.md": () => import('./index_FGdfdHxq.mjs'),"/src/content/post-back/draft-post.md": () => import('./draft-post_vf2dtgyJ.mjs'),"/src/content/post-back/long-title.md": () => import('./long-title_CGIcPH7R.mjs'),"/src/content/post-back/markdown-elements/index.md": () => import('./index_DLUBT0yQ.mjs'),"/src/content/post-back/missing-content.md": () => import('./missing-content_ptEGAp5k.mjs'),"/src/content/post-back/social-image.md": () => import('./social-image_DPgWgrK3.mjs'),"/src/content/post-back/unique-tags.md": () => import('./unique-tags_BK2y0k5w.mjs'),"/src/content/post/hello-world.md": () => import('./hello-world_CuFmdy97.mjs'),"/src/content/work/baca-tarot.md": () => import('./baca-tarot_DLEUzYw9.mjs'),"/src/content/work/buku-listrik.md": () => import('./buku-listrik_Dn_jBvuO.mjs'),"/src/content/work/buku-tugas.md": () => import('./buku-tugas_Cdzv1ycQ.mjs'),"/src/content/work/diiket.md": () => import('./diiket_ZSmBcWqu.mjs'),"/src/content/work/elib.md": () => import('./elib_CvclIlAu.mjs'),"/src/content/work/esq.md": () => import('./esq_3tYLlw9s.mjs'),"/src/content/work/game-moral-awareness.md": () => import('./game-moral-awareness_BMG7Bnwa.mjs'),"/src/content/work/greeny.md": () => import('./greeny_C9dpMsVd.mjs'),"/src/content/work/kantorkul.md": () => import('./kantorkul_9ifLtQ_8.mjs'),"/src/content/work/mangkat.md": () => import('./mangkat_CnGIczS7.mjs'),"/src/content/work/myktp.md": () => import('./myktp_C8y7dajV.mjs'),"/src/content/work/rejoin.md": () => import('./rejoin_D2JlBLwu.mjs'),"/src/content/work/rick-morty.md": () => import('./rick-morty_DXuChBNG.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g, siteConfig as s };
