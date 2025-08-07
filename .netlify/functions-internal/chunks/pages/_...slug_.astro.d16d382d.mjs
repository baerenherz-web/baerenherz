/* empty css                         */import { h as createCollectionToGlobResultMap, i as createGetCollection, c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, $ as $$Image, d as renderSlot, b as addAttribute } from '../../renderers.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Link, a as $$Layout } from './404.astro.d5157cb0.mjs';

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/aktivitaeten/ch/charity-golfturnier-2022.mdx": () => import('../charity-golfturnier-2022.b7335296.mjs'),"/src/content/aktivitaeten/ch/charity-golfturnier-2024.mdx": () => import('../charity-golfturnier-2024.4d7a580b.mjs'),"/src/content/aktivitaeten/ch/charity-golfturnier-2025.mdx": () => import('../charity-golfturnier-2025.100ee049.mjs'),"/src/content/aktivitaeten/ch/charity-golfturnier-bericht2023.mdx": () => import('../charity-golfturnier-bericht2023.a09f96f5.mjs'),"/src/content/aktivitaeten/ch/charity-skitag-bericht2023.mdx": () => import('../charity-skitag-bericht2023.368eb8a0.mjs'),"/src/content/aktivitaeten/ch/charity-skitag-bericht2024.mdx": () => import('../charity-skitag-bericht2024.f453d025.mjs'),"/src/content/aktivitaeten/ch/charity-skitag-bericht2025.mdx": () => import('../charity-skitag-bericht2025.072dae7d.mjs'),"/src/content/aktivitaeten/ch/save-date-ski-2025.mdx": () => import('../save-date-ski-2025.b002903e.mjs'),"/src/content/aktivitaeten/ch/save-the-date-golfturnier-2026.mdx": () => import('../save-the-date-golfturnier-2026.37a45414.mjs'),"/src/content/aktivitaeten/ch/save-the-date-skitag-2026.mdx": () => import('../save-the-date-skitag-2026.ef93b584.mjs'),"/src/content/aktivitaeten/de/save-the-date-golfturnier-2025-de.mdx": () => import('../save-the-date-golfturnier-2025-de.fcb6b4cc.mjs'),"/src/content/news/bericht-charity-skitag-2023.mdx": () => import('../bericht-charity-skitag-2023.d7e90701.mjs'),"/src/content/news/besuch-bitola.mdx": () => import('../besuch-bitola.78d24fb0.mjs'),"/src/content/news/besuch-nordmazedonien.mdx": () => import('../besuch-nordmazedonien.a6b361f7.mjs'),"/src/content/news/charity-skitage-davos.mdx": () => import('../charity-skitage-davos.d0e140b2.mjs'),"/src/content/news/golf-charity-hope.mdx": () => import('../golf-charity-hope.14366b43.mjs'),"/src/content/news/save-the-date-golfturnier-2025.mdx": () => import('../save-the-date-golfturnier-2025.aaa9bf05.mjs'),"/src/content/news/tom-luther-neues-mitglied.mdx": () => import('../tom-luther-neues-mitglied.853bb574.mjs'),"/src/content/news/uebergabe-charity-erloese-2023-HOPE.mdx": () => import('../uebergabe-charity-erloese-2023-HOPE.6ca7c041.mjs'),"/src/content/news/uebergabe-charity-erloese-2924.mdx": () => import('../uebergabe-charity-erloese-2924.8b5a0a5d.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"news":{"type":"content","entries":{"bericht-charity-skitag-2023":"/src/content/news/bericht-charity-skitag-2023.mdx","besuch-bitola":"/src/content/news/besuch-bitola.mdx","golf-charity-hope":"/src/content/news/golf-charity-hope.mdx","besuch-nordmazedonien":"/src/content/news/besuch-nordmazedonien.mdx","charity-skitage-davos":"/src/content/news/charity-skitage-davos.mdx","tom-luther-neues-mitglied":"/src/content/news/tom-luther-neues-mitglied.mdx","save-the-date-golfturnier-2025":"/src/content/news/save-the-date-golfturnier-2025.mdx","uebergabe-charity-erloese-2924":"/src/content/news/uebergabe-charity-erloese-2924.mdx","uebergabe-charity-erloese-2023-hope":"/src/content/news/uebergabe-charity-erloese-2023-HOPE.mdx"}},"aktivitaeten":{"type":"content","entries":{"ch/charity-golfturnier-2022":"/src/content/aktivitaeten/ch/charity-golfturnier-2022.mdx","ch/charity-golfturnier-2024":"/src/content/aktivitaeten/ch/charity-golfturnier-2024.mdx","ch/charity-golfturnier-2025":"/src/content/aktivitaeten/ch/charity-golfturnier-2025.mdx","ch/charity-skitag-bericht2025":"/src/content/aktivitaeten/ch/charity-skitag-bericht2025.mdx","ch/charity-golfturnier-bericht2023":"/src/content/aktivitaeten/ch/charity-golfturnier-bericht2023.mdx","ch/charity-skitag-bericht2023":"/src/content/aktivitaeten/ch/charity-skitag-bericht2023.mdx","ch/save-date-ski-2025":"/src/content/aktivitaeten/ch/save-date-ski-2025.mdx","ch/save-the-date-golfturnier-2026":"/src/content/aktivitaeten/ch/save-the-date-golfturnier-2026.mdx","ch/save-the-date-skitag-2026":"/src/content/aktivitaeten/ch/save-the-date-skitag-2026.mdx","de/save-the-date-golfturnier-2025-de":"/src/content/aktivitaeten/de/save-the-date-golfturnier-2025-de.mdx","ch/charity-skitag-bericht2024":"/src/content/aktivitaeten/ch/charity-skitag-bericht2024.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/aktivitaeten/ch/charity-golfturnier-2022.mdx": () => import('../charity-golfturnier-2022.84965478.mjs'),"/src/content/aktivitaeten/ch/charity-golfturnier-2024.mdx": () => import('../charity-golfturnier-2024.5ac16148.mjs'),"/src/content/aktivitaeten/ch/charity-golfturnier-2025.mdx": () => import('../charity-golfturnier-2025.b1d34ad2.mjs'),"/src/content/aktivitaeten/ch/charity-golfturnier-bericht2023.mdx": () => import('../charity-golfturnier-bericht2023.8905fb71.mjs'),"/src/content/aktivitaeten/ch/charity-skitag-bericht2023.mdx": () => import('../charity-skitag-bericht2023.72519110.mjs'),"/src/content/aktivitaeten/ch/charity-skitag-bericht2024.mdx": () => import('../charity-skitag-bericht2024.b544e839.mjs'),"/src/content/aktivitaeten/ch/charity-skitag-bericht2025.mdx": () => import('../charity-skitag-bericht2025.41d88a2a.mjs'),"/src/content/aktivitaeten/ch/save-date-ski-2025.mdx": () => import('../save-date-ski-2025.e7b4c106.mjs'),"/src/content/aktivitaeten/ch/save-the-date-golfturnier-2026.mdx": () => import('../save-the-date-golfturnier-2026.334624bd.mjs'),"/src/content/aktivitaeten/ch/save-the-date-skitag-2026.mdx": () => import('../save-the-date-skitag-2026.eb45ba7a.mjs'),"/src/content/aktivitaeten/de/save-the-date-golfturnier-2025-de.mdx": () => import('../save-the-date-golfturnier-2025-de.750f5e29.mjs'),"/src/content/news/bericht-charity-skitag-2023.mdx": () => import('../bericht-charity-skitag-2023.ac700ce8.mjs'),"/src/content/news/besuch-bitola.mdx": () => import('../besuch-bitola.87a2a6ec.mjs'),"/src/content/news/besuch-nordmazedonien.mdx": () => import('../besuch-nordmazedonien.908ebbf0.mjs'),"/src/content/news/charity-skitage-davos.mdx": () => import('../charity-skitage-davos.a8372ac2.mjs'),"/src/content/news/golf-charity-hope.mdx": () => import('../golf-charity-hope.995603a2.mjs'),"/src/content/news/save-the-date-golfturnier-2025.mdx": () => import('../save-the-date-golfturnier-2025.6aad885e.mjs'),"/src/content/news/tom-luther-neues-mitglied.mdx": () => import('../tom-luther-neues-mitglied.12e7545b.mjs'),"/src/content/news/uebergabe-charity-erloese-2023-HOPE.mdx": () => import('../uebergabe-charity-erloese-2023-HOPE.01221391.mjs'),"/src/content/news/uebergabe-charity-erloese-2924.mdx": () => import('../uebergabe-charity-erloese-2924.30803055.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$7 = createAstro();
const $$NewsPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$NewsPost;
  const { title, cover, coverAlt } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<article class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="m-6 rounded bg-white p-8 shadow-lg">
      <div class="py-6">
        ${renderComponent($$result2, "Link", $$Link, { "href": "/news" }, { "default": ($$result3) => renderTemplate`« News` })}
      </div>
      <div class="">
        ${cover && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "width": 1020, "src": cover, "alt": coverAlt })}`}
      </div>

      <div class="my-8 py-4">
        <h1 class="py-4 text-3xl">${title}</h1>
        <div class="max-width-80 prose max-w-prose lg:prose-xl">
          ${renderSlot($$result2, $$slots["default"])}
        </div>
      </div>
    </div>
  </article>
` })}`;
}, "D:/B\xE4renherz/Repository/baerenherz/src/layouts/NewsPost.astro", void 0);

const $$Astro$6 = createAstro();
const $$NewsPostPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$NewsPostPage;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "NewsPost", $$NewsPost, { ...post.data }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Content", Content, {})}
` })}`;
}, "D:/B\xE4renherz/Repository/baerenherz/src/components/NewsPostPage.astro", void 0);

const $$Astro$5 = createAstro();
const $$$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$$4;
  const posts = await getCollection("news");
  const { slug } = Astro2.params;
  const post = posts.find((page) => page.slug === slug);
  if (!post)
    return Astro2.redirect("/404");
  return renderTemplate`${renderComponent($$result, "NewsPostPage", $$NewsPostPage, { "post": post })}`;
}, "D:/B\xE4renherz/Repository/baerenherz/src/pages/news/[...slug].astro", void 0);

const $$file$4 = "D:/Bärenherz/Repository/baerenherz/src/pages/news/[...slug].astro";
const $$url$4 = "/news/[...slug]";

const ____slug_$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$$4,
	file: $$file$4,
	url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$AktivitaetenPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AktivitaetenPost;
  const { title, cover, coverAlt, link } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<article class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="m-6 rounded bg-white p-8 shadow-lg">
      <div class="py-6">
        ${renderComponent($$result2, "Link", $$Link, { "href": "/aktivitaeten" }, { "default": ($$result3) => renderTemplate`« Aktivitäten` })}
      </div>
      <div class="">
        ${cover && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "width": 1020, "src": cover, "alt": coverAlt })}`}
      </div>

      <div class="my-8">
        <h1 class="py-4 text-3xl">${title}</h1>

        <div class="max-width-80 prose max-w-prose lg:prose-xl">
          ${link ? renderTemplate`<div class="my-5">
                <a${addAttribute(link, "href")} class="my-3 p-2 text-2xl font-bold text-[#043c91bb] hover:text-[#033277] hover:no-underline hover:shadow-md active:text-[#0023a5]">
                  »Bildgalerie
                </a>
              </div>` : null}

          ${renderSlot($$result2, $$slots["default"])}
        </div>
      </div>

      
      <!-- <div class="flex gap-10">
        <div class="flex-1">
          <h3 class="text-3xl font-bold">Unsere Partner:</h3>
        </div>
        <div class="flex-2">
          <Image src={partners} alt="random" />
        </div>
      </div> -->
    </div>
  </article>
` })}`;
}, "D:/B\xE4renherz/Repository/baerenherz/src/layouts/AktivitaetenPost.astro", void 0);

const $$Astro$3 = createAstro();
const $$$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$$3;
  const posts = await getCollection("aktivitaeten/ch");
  const { slug } = Astro2.params;
  const post = posts.find((page) => page.slug === slug);
  if (!post)
    return Astro2.redirect("/404");
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "AktivitaetenPost", $$AktivitaetenPost, { ...post.data }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Content", Content, {})}
` })}`;
}, "D:/B\xE4renherz/Repository/baerenherz/src/pages/ch/aktivitaeten/[...slug].astro", void 0);

const $$file$3 = "D:/Bärenherz/Repository/baerenherz/src/pages/ch/aktivitaeten/[...slug].astro";
const $$url$3 = "/ch/aktivitaeten/[...slug]";

const ____slug_$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$$3,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$$2;
  const posts = await getCollection("news");
  const { slug } = Astro2.params;
  const post = posts.find((page) => page.slug === slug);
  if (!post)
    return Astro2.redirect("/404");
  return renderTemplate`${renderComponent($$result, "NewsPostPage", $$NewsPostPage, { "post": post })}`;
}, "D:/B\xE4renherz/Repository/baerenherz/src/pages/ch/news/[...slug].astro", void 0);

const $$file$2 = "D:/Bärenherz/Repository/baerenherz/src/pages/ch/news/[...slug].astro";
const $$url$2 = "/ch/news/[...slug]";

const ____slug_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$$1;
  const posts = await getCollection("aktivitaeten/de");
  const { slug } = Astro2.params;
  const post = posts.find((page) => page.slug === slug);
  if (!post)
    return Astro2.redirect("/404");
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "AktivitaetenPost", $$AktivitaetenPost, { ...post.data }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Content", Content, {})}
` })}`;
}, "D:/B\xE4renherz/Repository/baerenherz/src/pages/de/aktivitaeten/[...slug].astro", void 0);

const $$file$1 = "D:/Bärenherz/Repository/baerenherz/src/pages/de/aktivitaeten/[...slug].astro";
const $$url$1 = "/de/aktivitaeten/[...slug]";

const ____slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  return renderTemplate`${renderComponent($$result, "Original", $$$4, {})}`;
}, "D:/B\xE4renherz/Repository/baerenherz/src/pages/de/news/[...slug].astro", void 0);

const $$file = "D:/Bärenherz/Repository/baerenherz/src/pages/de/news/[...slug].astro";
const $$url = "/de/news/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { ____slug_$4 as _, ____slug_$3 as a, ____slug_$2 as b, ____slug_$1 as c, ____slug_ as d, getCollection as g };
