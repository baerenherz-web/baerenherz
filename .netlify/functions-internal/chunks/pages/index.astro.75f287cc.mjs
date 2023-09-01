/* empty css                         */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderComponent, $ as $$Image } from '../../renderers.mjs';
import { $ as $$Container, b as $$Layout } from './404.astro.aa9b2365.mjs';
import { useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { g as getCollection } from './_...slug_.astro.10f4e2c7.mjs';
import Slider from 'react-slick';
/* empty css                           */
function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubscribe = async () => {
    const apiKey = "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";
    const url = `https://api.brevo.com/v3/contacts`;
    const headers = {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey
    };
    const data = {
      email
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(data)
      });
      if (response.ok) {
        setSubscribed(true);
      } else {
        console.error("Subscription failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return /* @__PURE__ */ jsx("div", {
    className: "mx-auto mt-6 bg-[#033277] px-5 py-10 text-white md:px-10",
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col gap-6 md:flex-row xl:justify-center",
      children: [/* @__PURE__ */ jsx("div", {
        className: "py-3",
        children: /* @__PURE__ */ jsx("h2", {
          className: "text-3xl font-bold  text-white",
          children: "Bleiben Sie Informiert!"
        })
      }), subscribed ? /* @__PURE__ */ jsx("p", {
        className: "mb-4 text-green-500",
        children: "Thank you for subscribing!"
      }) : /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col leading-7 md:w-4/5 xl:w-7/12",
        children: [/* @__PURE__ */ jsx("div", {
          children: /* @__PURE__ */ jsx("p", {
            className: "prose text-base text-white",
            children: "Wir informieren Sie über unsere laufenden Projekte, wie ihre Spenden vor Ort Gutes tun und senden ihnen Einladungen zu unseren Veranstaltungen."
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "mt-6 flex max-w-md gap-x-4",
          children: [/* @__PURE__ */ jsx("input", {
            type: "email",
            placeholder: "Email",
            autoComplete: "email",
            "aria-placeholder": "Email",
            required: true,
            minLength: "5",
            maxLength: "50",
            className: "min-w-0 flex-auto border-0 bg-white px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6",
            onChange: handleEmailChange
          }), /* @__PURE__ */ jsx("button", {
            className: "flex-none border-2 border-transparent bg-[#dfecf7] px-3.5 py-2.5 text-sm font-semibold text-[#2b2523] shadow-sm hover:border-2 hover:border-[#dfecf7] hover:bg-[#033277] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
            onClick: handleSubscribe,
            children: "Absenden"
          })]
        })]
      })]
    })
  });
}
__astro_tag_component__(Newsletter, "@astrojs/react");

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

const photos = [
	{
		id: "1",
		url: "1-leben-retten.jpeg",
		css_id: "banner-image-one",
		heading: "unsere mission",
		description: "Lebensrettende Hilfe für die Schwächsten",
		link: "/projekte",
		link_text: "mehr erfahren"
	},
	{
		id: "2",
		url: "2-2jahre.JPG",
		css_id: "banner-image-two",
		link_text: "mehr erfahren",
		link: "/",
		description: "Hilfe, die dort ankommt, wo sie am dringendsten gebraucht wird",
		golflink: "/events#golf-turnier"
	},
	{
		id: "3",
		url: "3-besuch.jpg",
		css_id: "banner-image-three",
		heading: "unsere projekte",
		description: "Hilfe, die dort ankommt, wo sie am dringendsten gebraucht wird",
		link: "/projekte",
		link_text: "mehr erfahren"
	},
	{
		id: "4",
		url: "4-golf-2023.jpg",
		css_id: "banner-image-three",
		heading: "unsere projekte",
		description: "Hilfe, die dort ankommt, wo sie am dringendsten gebraucht wird",
		link: "/projekte",
		link_text: "mehr erfahren"
	}
];

function Photo({
  photo
}) {
  return /* @__PURE__ */ jsx("a", {
    href: photo.link,
    children: /* @__PURE__ */ jsxs("div", {
      className: "relative h-[600px] bg-gray-900 md:h-[400px] lg:h-[500px] xl:h-[600px]",
      children: [/* @__PURE__ */ jsx("img", {
        className: "absolute inset-0 h-full w-full object-cover",
        alt: "homepagebanner-image",
        src: `/carousel/${photo.url}`
      }), /* @__PURE__ */ jsxs("div", {
        className: "absolute inset-0 flex flex-col justify-end bg-opacity-80 p-4 md:justify-center md:p-6 lg:p-8 xl:p-10",
        children: [photo.id === "1" && /* @__PURE__ */ jsx("div", {
          children: /* @__PURE__ */ jsx("img", {
            src: photo.badge,
            alt: "Badge"
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "absolute bottom-0 left-0 m-5 flex w-3/6 flex-col border-2 border-teal-800 bg-[#f2f8f9] p-5 md:w-2/6 md:px-6",
          children: [/* @__PURE__ */ jsx("h4", {
            className: "mb-2 text-2xl font-semibold md:text-3xl lg:text-4xl",
            children: photo.heading
          }), /* @__PURE__ */ jsx("div", {
            className: "mb-3 w-12 border-b-2 border-teal-800"
          }), /* @__PURE__ */ jsx("h2", {
            className: "text-xl font-bold leading-tight md:text-2xl lg:text-3xl",
            children: photo.description
          })]
        })]
      })]
    })
  }, photo.id);
}
function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2e3,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx(Slider, {
      ...settings,
      children: photos.map((photo) => /* @__PURE__ */ jsx(Photo, {
        photo
      }, photo.id))
    })
  });
}
__astro_tag_component__(Carousel, "@astrojs/react");

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Baerenherz - Verein f\xFCr humanit\xE4re Hilfe" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<div class="p-0">
      ${renderComponent($$result3, "Carousel", Carousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/carousel/Carousel.jsx", "client:component-export": "default" })}
    </div>
    <article class="py-10 md:px-14 xl:mx-auto xl:my-6 xl:w-3/4">
      <p>
        Bärenherz - Verein für humanitäre Hilfe - wurde 2021 in der Schweiz mit
        dem Ziel gegründet, dort zu helfen, wo lebensnotwendige Unterstützung
        benötigt wird. Wir sind ein unabhängiger Verein, der durch das
        persönliche und ehrenamtliche Engagement der Mitglieder sowie den
        jeweils im Vor-feld definierte Projekte in Sinne der Philosophie des
        Vereins unterstützt.
      </p>
    </article>
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

export { index$1 as a, index as b, index$2 as i };
