/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, $ as $$Image, d as renderSlot, b as addAttribute, F as Fragment } from '../../renderers.mjs';
import { a as $$Link, $ as $$Container, b as $$Layout } from './404.astro.c813042e.mjs';
import { $ as $$Newsletter } from './about.astro.2bc0dc7a.mjs';
import { g as getCollection } from './_...slug_.astro.f94f6774.mjs';

const $$Astro$6 = createAstro();
const $$Carousel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Carousel;
  return renderTemplate`${maybeRenderHead()}<div>
  <h1>sds</h1>
</div>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/carousel/Carousel.astro", void 0);

const $$Astro$5 = createAstro();
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Cta;
  const { ctaImage, ctaAlt, ctaLink } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "class": "my-6 gap-5 bg-[#033277] p-0 py-10 md:flex md:justify-items-stretch md:p-0 xl:justify-center" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="m-0 hidden flex-shrink-0 p-0 md:block">
    ${renderComponent($$result2, "Image", $$Image, { "src": ctaImage, "alt": ctaAlt, "loading": "eager", "format": "avif" })}
  </div>
  <div class="flex flex-1 justify-center align-middle">
    <div class="text-center md:flex md:flex-col md:justify-center">
      <p class="max-w-xl text-lg font-bold italic leading-relaxed text-white md:px-10">
        ${renderSlot($$result2, $$slots["content1"], renderTemplate`quote`)}
      </p>
      <p class="mt-4 max-w-xl text-base font-bold text-white">
        ${renderSlot($$result2, $$slots["content2"], renderTemplate`quote`)}
      </p>
      <p class="mt-4 max-w-xl text-sm text-white">
        ${renderSlot($$result2, $$slots["content3"], renderTemplate`quote`)}
      </p>
      <div class="mt-6 flex flex-col gap-3 md:flex-row md:justify-center">
        ${renderComponent($$result2, "Link", $$Link, { "href": "/spenden", "class": "lg flex items-center justify-center gap-1 text-2xl", "size": "xl", "rel": "noopener" }, { "default": ($$result3) => renderTemplate`${ctaLink}` })}
      </div>
    </div>
  </div>
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/Cta.astro", void 0);

const $$Astro$4 = createAstro();
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}>
  ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
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
            ${renderComponent($$result, "Image", $$Image, { "width": 600, "height": 400, "src": post.data.cover, "alt": post.data.coverAlt })}
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

const ctaImage = {"src":"/_astro/cta.edc4962e.jpg","width":300,"height":452,"format":"jpg","orientation":1};

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const ctaAlt = "test";
  const ctaLink = "Jetzt spenden";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Baerenherz - Verein f\xFCr humanit\xE4re Hilfe" }, { "default": ($$result2) => renderTemplate`
  
  ${renderComponent($$result2, "Carousel", $$Carousel, {})}
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<article class="py-10 md:px-14 xl:mx-auto xl:my-6 xl:w-3/4">
      <p>
        Bärenherz - Verein für humanitäre Hilfe - wurde 2021 in der Schweiz mit
        dem Ziel gegründet, dort zu helfen, wo lebensnotwendige Unterstützung
        benötigt wird. Wir sind ein unabhängiger Verein, der durch das
        persönliche und ehrenamtliche Engagement der Mitglieder sowie den
        Einnahmen aus von uns organisierten Charity Events und Spendengeldern
        jeweils im Vor-feld definierte Projekte in Sinne der Philosophie des
        Vereins unterstützt.
      </p>
    </article>
  ` })}
  ${renderComponent($$result2, "Cta", $$Cta, { "ctaImage": ctaImage, "ctaAlt": ctaAlt, "ctaLink": ctaLink }, { "content1": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content1" }, { "default": ($$result4) => renderTemplate`
      „Mit meiner Mitgliedschaft kann ich die großartige Arbeit von Bärenherz
      unterstützen und habe das gute Gefühl eine Hilfe zu leisten, die auch zu
      100% dort ankommt, wo sie auch dringend gebraucht wird.“
    ` })}`, "content2": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content2" }, { "default": ($$result4) => renderTemplate`Natascha Heye` })}`, "content3": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content3" }, { "default": ($$result4) => renderTemplate`Unternehmerin, Zürich` })}` })}
  ${renderComponent($$result2, "Aktuelles", $$Aktuelles, {})}
  ${renderComponent($$result2, "Newsletter", $$Newsletter, {})}
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Aktivitaeten" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, { "class": "mx-14 my-10" }, { "default": ($$result3) => renderTemplate`${posts.map((post) => renderTemplate`${maybeRenderHead()}<li>
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

const headerImg = {"src":"/_astro/postheader.cbe6b8c7.png","width":1483,"height":492,"format":"png"};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, { "class": "mx-14 my-10" }, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<div class="my-2 py-2">
      ${renderComponent($$result3, "Image", $$Image, { "src": headerImg, "alt": "header post" })}
    </div>
    ${posts.map((post) => renderTemplate`<li>
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

export { $$Cta as $, index$1 as a, index as b, ctaImage as c, index$2 as i };
