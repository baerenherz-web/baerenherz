/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderComponent, $ as $$Image } from '../../renderers.mjs';
import { b as $$Container, a as $$Layout } from './404.astro.d5157cb0.mjs';
import { g as getCollection } from './_...slug_.astro.d16d382d.mjs';
import '@astrojs/internal-helpers/path';
import { N as Newsletter } from './about.astro.71db857a.mjs';

const $$Astro$c = createAstro();
const $$MainTextHome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$MainTextHome;
  return renderTemplate`${maybeRenderHead()}<article class="my-10 py-10 lg:mx-auto lg:w-11/12">
  <p class="max-w-screen-2xl text-2xl leading-relaxed md:px-14">
    Bärenherz - Verein für humanitäre Hilfe - wurde 2021 in der Schweiz durch Rainer Mück gegründet. Im April 2025 haben wir auch einen deutschen Verein gegründet – Bärenherz – Verein für humanitäre Hilfe e.V.. Beide Vereine mit dem gleichen Ziel, dort zu helfen, wo lebensnotwendige Unterstützung dringend benötigt wird.
    <br>
    Wir sind ein unabhängiger Verein, der durch das persönliche und ehrenamtliche Engagement der Mitglieder getragen wird und jeweils im Vorfeld definierte Projekte im Sinne der Philosophie des Vereins unterstützt.

  </p>
</article>`;
}, "D:/B\xE4renherz/Repository/baerenherz/src/components/MainTextHome.astro", void 0);

const $$Astro$b = createAstro();
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}>
  ${date.toLocaleDateString("de-DE", {
    day: "numeric",
    month: "short",
    year: "numeric"
  })}
</time>`;
}, "D:/B\xE4renherz/Repository/baerenherz/src/components/FormattedDate.astro", void 0);

const $$Astro$a = createAstro();
const $$Aktuelles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Aktuelles;
  const posts = (await getCollection("news")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const postsToDisplay = posts.slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<div class="my-2 py-6">
  <h1 class="text-center text-3xl font-extrabold tracking-tight">
    Aktuelles von Bärenherz
  </h1>

  <ul class="w-full flex flex-wrap gap-4 justify-center p-10">
    ${postsToDisplay.map((post) => renderTemplate`<li class="flex-1 max-w-[32%] min-w-[300px] border-2 border-[#dfecf7] hover:border-2 hover:border-[#033277]">
          <a${addAttribute(`/news/${post.slug}/`, "href")}>
            <div class="relative h-[250px] bg-white">
              ${renderComponent($$result, "Image", $$Image, { "height": 250, "width": 400, "src": post.data.cover, "alt": post.data.coverAlt, "class": "object-contain h-full w-full" })}
            </div>
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
}, "D:/B\xE4renherz/Repository/baerenherz/src/components/Aktuelles.astro", void 0);

const BaerenherzVideo = "/_astro/Baerenherz_Video.00256947.mp4";

const BaerenherzCover = {"src":"/_astro/Video_Cover.c6b06a90.png","width":1500,"height":1500,"format":"png"};

const $$Astro$9 = createAstro();
function get({ redirect }) {
  return redirect("/ch/");
}
const $$Index$8 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Index$8;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Baerenherz - Verein f\xFCr humanit\xE4re Hilfe" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<div class="p-0">
      ${renderComponent($$result3, "Carousel", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@components/carousel/Carousel.jsx", "client:component-export": "default" })}
    </div>

    ${renderComponent($$result3, "MainTextHome", $$MainTextHome, {})}
  ` })}
  


<div style="display: flex; justify-content: center; align-items: center; ">
  <video controls${addAttribute(BaerenherzCover.src, "poster")} style="width: 50%; height: auto; border-radius: 8px;">
    <source${addAttribute(BaerenherzVideo, "src")} type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

  ${renderComponent($$result2, "Aktuelles", $$Aktuelles, {})}
  ${renderComponent($$result2, "Newsletter", Newsletter, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/Newsletter.jsx", "client:component-export": "default" })}
` })}`;
}, "D:/B\xE4renherz/Repository/baerenherz/src/pages/index.astro", void 0);

const $$file$8 = "D:/Bärenherz/Repository/baerenherz/src/pages/index.astro";
const $$url$8 = "";

const index$8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$8,
  file: $$file$8,
  get,
  url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro();
const $$Index$7 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index$7;
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
}, "D:/B\xE4renherz/Repository/baerenherz/src/pages/aktivitaeten/index.astro", void 0);

const $$file$7 = "D:/Bärenherz/Repository/baerenherz/src/pages/aktivitaeten/index.astro";
const $$url$7 = "/aktivitaeten";

const index$7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$7,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const headerImg = {"src":"/_astro/postheader.21658caa.webp","width":1483,"height":492,"format":"webp"};

const $$Astro$7 = createAstro();
const $$NewsIndexPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$NewsIndexPage;
  const posts = (await getCollection("news")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "class": "mx-14 my-10 flex flex-col" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="my-6 justify-items-center py-2">
    ${renderComponent($$result2, "Image", $$Image, { "src": headerImg, "width": 600, "height": 400, "alt": "header post" })}
  </div>
  ${posts.map((post) => renderTemplate`<li class="my-5 list-none">
        <a${addAttribute(post.slug === "save-the-date-golfturnier-2025" ? "/aktivitaeten/charity-golfturnier-2025" : `/news/${post.slug}/`, "href")}>
          ${renderComponent($$result2, "Image", $$Image, { "width": 720, "height": 360, "src": post.data.cover, "alt": post.data.coverAlt })}
          <div class="mb-6 mt-2 pb-10 pt-4">
            <h4 class="text-3xl">${post.data.title}</h4>
            <p class="pb-4 pt-2 text-base text-gray-500">
              ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })}
            </p>
            <div class="prose-base line-clamp-4 lg:prose-xl">
              ${post.data.description}
            </div>
            <div class="pt-5">
              <p class="text-2xl italic text-[#033277]">weiterlesen...</p>
            </div>
          </div>
        </a>
      </li>`)}` })}`;
}, "D:/B\xE4renherz/Repository/baerenherz/src/components/NewsIndexPage.astro", void 0);

const $$Astro$6 = createAstro();
const $$Index$6 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$6;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "News" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "NewsIndexPage", $$NewsIndexPage, {})}
` })}`;
}, "D:/B\xE4renherz/Repository/baerenherz/src/pages/news/index.astro", void 0);

const $$file$6 = "D:/Bärenherz/Repository/baerenherz/src/pages/news/index.astro";
const $$url$6 = "/news";

const index$6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$6,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$5;
  return renderTemplate`${renderComponent($$result, "Original", $$Index$8, {})}`;
}, "D:/B\xE4renherz/Repository/baerenherz/src/pages/ch/index.astro", void 0);

const $$file$5 = "D:/Bärenherz/Repository/baerenherz/src/pages/ch/index.astro";
const $$url$5 = "/ch";

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$5,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$4;
  const posts = (await getCollection("aktivitaeten/ch")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Aktivit\xE4ten CH" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, { "class": "mx-14 my-10" }, { "default": ($$result3) => renderTemplate`${posts.map((post) => renderTemplate`${maybeRenderHead()}<li class="list-none">
          <a${addAttribute(`/ch/aktivitaeten/${post.slug}/`, "href")}>
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
}, "D:/B\xE4renherz/Repository/baerenherz/src/pages/ch/aktivitaeten/index.astro", void 0);

const $$file$4 = "D:/Bärenherz/Repository/baerenherz/src/pages/ch/aktivitaeten/index.astro";
const $$url$4 = "/ch/aktivitaeten";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "News" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "NewsIndexPage", $$NewsIndexPage, {})}
` })}`;
}, "D:/B\xE4renherz/Repository/baerenherz/src/pages/ch/news/index.astro", void 0);

const $$file$3 = "D:/Bärenherz/Repository/baerenherz/src/pages/ch/news/index.astro";
const $$url$3 = "/ch/news";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

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
  


<div style="display: flex; justify-content: center; align-items: center; ">
  <video controls${addAttribute(BaerenherzCover.src, "poster")} style="width: 50%; height: auto; border-radius: 8px;">
    <source${addAttribute(BaerenherzVideo, "src")} type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

  ${renderComponent($$result2, "Aktuelles", $$Aktuelles, {})}
  ${renderComponent($$result2, "Newsletter", Newsletter, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/Newsletter.jsx", "client:component-export": "default" })}
` })}`;
}, "D:/B\xE4renherz/Repository/baerenherz/src/pages/de/index.astro", void 0);

const $$file$2 = "D:/Bärenherz/Repository/baerenherz/src/pages/de/index.astro";
const $$url$2 = "/de";

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
  const posts = (await getCollection("aktivitaeten/de")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Aktivit\xE4ten DE" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, { "class": "mx-14 my-10" }, { "default": ($$result3) => renderTemplate`${posts.map((post) => renderTemplate`${maybeRenderHead()}<li class="list-none">
          <a${addAttribute(`/de/aktivitaeten/${post.slug}/`, "href")}>
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
}, "D:/B\xE4renherz/Repository/baerenherz/src/pages/de/aktivitaeten/index.astro", void 0);

const $$file$1 = "D:/Bärenherz/Repository/baerenherz/src/pages/de/aktivitaeten/index.astro";
const $$url$1 = "/de/aktivitaeten";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Original", $$Index$6, {})}`;
}, "D:/B\xE4renherz/Repository/baerenherz/src/pages/de/news/index.astro", void 0);

const $$file = "D:/Bärenherz/Repository/baerenherz/src/pages/de/news/index.astro";
const $$url = "/de/news";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$7 as a, index$6 as b, index$5 as c, index$4 as d, index$3 as e, index$2 as f, index$1 as g, index as h, index$8 as i };
