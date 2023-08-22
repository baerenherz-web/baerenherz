/* empty css                         */import { h as createCollectionToGlobResultMap, i as createGetCollection, c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, $ as $$Image, d as renderSlot } from '../../renderers.mjs';
import { $ as $$Container, a as $$Link, b as $$Layout } from './404.astro.c5fc0d6a.mjs';

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/aktivitaeten/charity-golfturnier-2022.mdx": () => import('../charity-golfturnier-2022.48a589c4.mjs'),"/src/content/aktivitaeten/charity-golfturnier-bericht2023.mdx": () => import('../charity-golfturnier-bericht2023.4a0640a3.mjs'),"/src/content/aktivitaeten/charity-skitag-bericht2023.mdx": () => import('../charity-skitag-bericht2023.6eb45125.mjs'),"/src/content/blog/bericht-charity-skitag-2023.mdx": () => import('../bericht-charity-skitag-2023.2ea7b9b5.mjs'),"/src/content/blog/besuch-nordmazedonien.mdx": () => import('../besuch-nordmazedonien.5baff494.mjs'),"/src/content/blog/golf-charity-hope.mdx": () => import('../golf-charity-hope.3802f463.mjs')

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
lookupMap = {"blog":{"type":"content","entries":{"bericht-charity-skitag-2023":"/src/content/blog/bericht-charity-skitag-2023.mdx","besuch-nordmazedonien":"/src/content/blog/besuch-nordmazedonien.mdx","golf-charity-hope":"/src/content/blog/golf-charity-hope.mdx"}},"aktivitaeten":{"type":"content","entries":{"charity-golfturnier-2022":"/src/content/aktivitaeten/charity-golfturnier-2022.mdx","charity-golfturnier-bericht2023":"/src/content/aktivitaeten/charity-golfturnier-bericht2023.mdx","charity-skitag-bericht2023":"/src/content/aktivitaeten/charity-skitag-bericht2023.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/aktivitaeten/charity-golfturnier-2022.mdx": () => import('../charity-golfturnier-2022.134690dd.mjs'),"/src/content/aktivitaeten/charity-golfturnier-bericht2023.mdx": () => import('../charity-golfturnier-bericht2023.ad57b7b9.mjs'),"/src/content/aktivitaeten/charity-skitag-bericht2023.mdx": () => import('../charity-skitag-bericht2023.f14d786d.mjs'),"/src/content/blog/bericht-charity-skitag-2023.mdx": () => import('../bericht-charity-skitag-2023.355df728.mjs'),"/src/content/blog/besuch-nordmazedonien.mdx": () => import('../besuch-nordmazedonien.0c7585ad.mjs'),"/src/content/blog/golf-charity-hope.mdx": () => import('../golf-charity-hope.52722cbe.mjs')

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

const partners = {"src":"/_astro/sponsoren2023.be2b75f6.png","width":2398,"height":727,"format":"png"};

const $$Astro$3 = createAstro();
const $$AktivitaetenPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AktivitaetenPost;
  const { title, cover, coverAlt } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, { "class": "mx-14 my-10" }, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<div class="py-6">
      ${renderComponent($$result3, "Link", $$Link, { "href": "/aktivitaeten" }, { "default": ($$result4) => renderTemplate`« aktivitaeten` })}
    </div>
    <div class="">
      ${cover && renderTemplate`${renderComponent($$result3, "Image", $$Image, { "width": 1020, "src": cover, "alt": coverAlt })}`}
    </div>

    <div class="my-8">
      <h1 class="py-4 text-3xl">${title}</h1>
      <div class="prose-xl lg:prose-xl">
        ${renderSlot($$result3, $$slots["default"])}
      </div>
    </div>

    <div class="flex gap-10">
      <div class="flex-1">
        <h3 class="text-3xl font-bold">Unsere Partner:</h3>
      </div>
      <div class="flex-2">
        ${renderComponent($$result3, "Image", $$Image, { "src": partners, "alt": "random" })}
      </div>
    </div>
  ` })}
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/layouts/AktivitaetenPost.astro", void 0);

const $$Astro$2 = createAstro();
async function getStaticPaths$1() {
  const posts = await getCollection("aktivitaeten");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$$1;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "AktivitaetenPost", $$AktivitaetenPost, { ...post.data }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Content", Content, {})}
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/aktivitaeten/[...slug].astro", void 0);

const $$file$1 = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/aktivitaeten/[...slug].astro";
const $$url$1 = "/aktivitaeten/[...slug]";

const ____slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$$1,
	file: $$file$1,
	getStaticPaths: getStaticPaths$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, cover, coverAlt } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, { "class": "mx-14 my-10" }, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<div class="py-6">
      ${renderComponent($$result3, "Link", $$Link, { "href": "/blog" }, { "default": ($$result4) => renderTemplate`« Blog` })}
    </div>
    <div class="">
      ${cover && renderTemplate`${renderComponent($$result3, "Image", $$Image, { "width": 1020, "src": cover, "alt": coverAlt })}`}
    </div>

    <div class="my-8">
      <h1 class="py-4 text-3xl">${title}</h1>
      <div class="prose-xl lg:prose-xl">
        ${renderSlot($$result3, $$slots["default"])}
      </div>
    </div>
  ` })}
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Content", Content, {})}
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/blog/[...slug].astro", void 0);

const $$file = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { ____slug_$1 as _, ____slug_ as a, getCollection as g };
