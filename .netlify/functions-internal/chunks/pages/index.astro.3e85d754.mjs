/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderComponent, $ as $$Image } from '../../renderers.mjs';
import { $ as $$Container, b as $$Layout } from './404.astro.a3cd5782.mjs';
import { g as getCollection } from './_...slug_.astro.020df873.mjs';
import { N as Newsletter } from './about.astro.583b239b.mjs';

const $$Astro$5 = createAstro();
const $$MainTextHome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MainTextHome;
  return renderTemplate`${maybeRenderHead()}<article class="my-10 py-10 lg:mx-auto lg:w-11/12">
  <p class="max-w-screen-2xl text-2xl leading-relaxed md:px-14">
    Bärenherz - Verein für humanitäre Hilfe - wurde 2021 in der Schweiz mit dem
    Ziel gegründet, dort zu helfen, wo lebensnotwendige Unterstützung benötigt
    wird. Wir sind ein unabhängiger Verein, der durch das persönliche und
    ehrenamtliche Engagement der Mitglieder sowie den jeweils im Vorfeld
    definierte Projekte in Sinne der Philosophie des Vereins unterstützt.
  </p>
</article>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/MainTextHome.astro", void 0);

const $$Astro$4 = createAstro();
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}>
  ${date.toLocaleDateString("de-DE", {
    day: "numeric",
    month: "short",
    year: "numeric"
  })}
</time>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/FormattedDate.astro", void 0);

const $$Astro$3 = createAstro();
const $$Aktuelles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Aktuelles;
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${maybeRenderHead()}<div class="my-2 py-6">
  <h1 class="text-center text-3xl font-extrabold tracking-tight">
    Aktuelles von Bärenherz
  </h1>

  <ul class="w-full gap-4 p-10 md:flex">
    ${posts.map((post) => renderTemplate`<li class="flex-1 border-2 border-[#dfecf7] hover:border-2 hover:border-[#033277]">
          <a${addAttribute(`/blog/${post.slug}/`, "href")}>
            ${renderComponent($$result, "Image", $$Image, { "width": 1200, "height": 200, "src": post.data.cover, "alt": post.data.coverAlt, "class": "object-cover object-center md:h-[250px] xl:h-[600] " })}
            <div class="p-5">
              <h4 class="h-14 font-bold">${post.data.title}</h4>
              <p class="pb-2 text-gray-500">
                ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })}
              </p>
              <div class="prose-sm line-clamp-3 lg:prose-xl">
                ${post.data.description}
              </div>
            </div>
          </a>
        </li>`)}
  </ul>
</div>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/Aktuelles.astro", void 0);

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Baerenherz - Verein f\xFCr humanit\xE4re Hilfe" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<div class="p-0">
      ${renderComponent($$result3, "Carousel", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@components/carousel/Carousel.jsx", "client:component-export": "default" })}
    </div>

    ${renderComponent($$result3, "MainTextHome", $$MainTextHome, {})}
  ` })}
  
  ${renderComponent($$result2, "Aktuelles", $$Aktuelles, {})}
  ${renderComponent($$result2, "Newsletter", Newsletter, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/Newsletter.jsx", "client:component-export": "default" })}
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/index.astro", void 0);

const $$file$2 = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/index.astro";
const $$url$2 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = (await getCollection("aktivitaeten")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Aktivit\xE4ten" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, { "class": "mx-14 my-10" }, { "default": ($$result3) => renderTemplate`${posts.map((post) => renderTemplate`${maybeRenderHead()}<li class="list-none">
          <a${addAttribute(`/aktivitaeten/${post.slug}/`, "href")}>
            ${renderComponent($$result3, "Image", $$Image, { "width": 720, "height": 360, "src": post.data.cover, "alt": post.data.coverAlt })}
            <div class="mb-6 mt-2 pb-10 pt-4">
              <h4 class="text-3xl">${post.data.title}</h4>
              <p class="pb-4 pt-2 text-base text-gray-500">
                ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })}
              </p>
              <div class="prose-base line-clamp-4 lg:prose-xl">
                ${post.data.description}
              </div>
              <div class="pt-5">
                <p class="text-2xl italic text-[#033277]">weiterlesen...</p>
              </div>
            </div>
          </a>
        </li>`)}` })}
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/aktivitaeten/index.astro", void 0);

const $$file$1 = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/aktivitaeten/index.astro";
const $$url$1 = "/aktivitaeten";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const headerImg = {"src":"/_astro/postheader.d79c3599.png","width":1483,"height":492,"format":"png"};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, { "class": "mx-14 my-10 flex flex-col" }, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<div class="my-6 justify-items-center py-2">
      ${renderComponent($$result3, "Image", $$Image, { "src": headerImg, "width": 600, "alt": "header post" })}
    </div>
    ${posts.map((post) => renderTemplate`<li class="my-5 list-none">
          <a${addAttribute(`/blog/${post.slug}/`, "href")}>
            ${renderComponent($$result3, "Image", $$Image, { "width": 720, "height": 360, "src": post.data.cover, "alt": post.data.coverAlt })}
            <div class="mb-6 mt-2 pb-10 pt-4">
              <h4 class="text-3xl">${post.data.title}</h4>
              <p class="pb-4 pt-2 text-base text-gray-500">
                ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })}
              </p>
              <div class="prose-base line-clamp-4 lg:prose-xl">
                ${post.data.description}
              </div>
              <div class="pt-5">
                <p class="text-2xl italic text-[#033277]">weiterlesen...</p>
              </div>
            </div>
          </a>
        </li>`)}` })}
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/blog/index.astro", void 0);

const $$file = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/blog/index.astro";
const $$url = "/blog";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
