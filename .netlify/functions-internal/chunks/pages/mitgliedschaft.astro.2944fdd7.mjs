/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, d as renderSlot, f as renderComponent, $ as $$Image, F as Fragment } from '../../renderers.mjs';
import { a as $$Link, $ as $$Container, b as $$Layout } from './404.astro.67766c61.mjs';
import { $ as $$Sectionhead } from './about.astro.2ba8e0a9.mjs';
import 'preact';
import 'react';
import 'react-dom/server';
import 'node:fs';
import 'node:path';
import 'node:os';
import 'node:url';
import 'node:worker_threads';
import 'module';
import 'worker_threads';
/* empty css                               */import 'react/jsx-runtime';

const $$Astro$2 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    block,
    size = "lg",
    style = "primary",
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    lg: "px-5 py-2.5",
    md: "px-4 py-2 w-fit"
  };
  const styles = {
    outline: "bg-white border-2 border-black hover:bg-gray-100 text-black ",
    primary: "bg-[#dfecf7] text-[#2b2523] px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-[#033277] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:border-[#dfecf7] hover:border-2 border-transparent border-2",
    inverted: "bg-[#033277] text-white hover:bg-[#dfecf7] hover:text-[#2b2523] hover:border-[#033277] border-2 border-transparent",
    muted: "bg-gray-100 hover:bg-gray-200 border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead()}<button${spreadAttributes(rest)}${addAttribute([
    "text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])}
</button>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/ui/Button.astro", void 0);

const $$Astro$1 = createAstro();
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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

const localImage = {"src":"/_astro/Mitfliedschaft.14cd1f96.jpg","width":1772,"height":1181,"format":"jpg","orientation":1};

const ctaImage = {"src":"/_astro/cta.edc4962e.jpg","width":300,"height":452,"format":"jpg","orientation":1};

const $$Astro = createAstro();
const $$Mitgliedschaft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Mitgliedschaft;
  const localAlt = "Mitgliedschaft";
  const ctaAlt = "test";
  const ctaLink = "Jetzt spenden";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mitgliedschaft" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Sectionhead", $$Sectionhead, { "class": "items-center text-center", "altHead": localAlt, "imageHead": localImage }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`
      Gemeinsam dort helfen, wo Hilfe gebraucht wird.
    ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title", "class": "uppercase" }, { "default": ($$result4) => renderTemplate`Mitgliedschaft` })}` })}

  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<section class="py-10 md:px-14 xl:mx-auto xl:my-6 xl:w-3/4">
      <article class="py-6">
        <h2 class="py-4 text-2xl font-bold">Mitgliedschaft</h2>
        <p class="text-lg leading-7">
          Eine Mitgliedschaft bei Bärenherz hilft uns, unsere administrativen
          Kosten und Aufgaben zu erfüllen. Ein wesentlicher Teil unserer
          Philosophie ist es, dass alle Einnahmen aus unseren Aktivitäten zu
          100% in die jeweils geförderten Projekte fliessen. Sämtliche
          administrativen Kosten wie z.B. Pflege der Homepage werden
          ehrenamtlich übernommen bzw.von Mitgliedsbeiträgen oder Zuwendungen
          der Mitglieder getragen. Auch freuen wir uns natürlich, uns mit
          unseren Mitgliedern auszutauschen, Ideen aufzunehmen und uns gemeinsam
          zu engagieren. Wir bieten sowohl eine persönliche Mitgliedschaft wie
          auch eine Unternehmensmitgliedschaft für alle an, die die Philosophie
          und Projekte unseres karitativen Vereins unterstützen wollen.
          Nachfolgend können Sie die Mitgliedschaft einfach online beantragen,
          der Vorstand entscheidet dann umgehend über die Aufnahme.
        </p>
      </article>

      <!-- boxes -->
      <article class="flex flex-col gap-4 md:my-4 md:flex-row md:justify-center md:gap-10">
        <div class="flex flex-col justify-center gap-5 bg-[#84b9e4] p-8 text-center align-middle">
          <h3 class="" font-bold>Persönliche Mitgliedschaft</h3>
          <p>Jahresbeitrag CHF 250.00</p>
          ${renderComponent($$result3, "Button", $$Button, { "style": "inverted", "size": "md", "class": "m-auto" }, { "default": ($$result4) => renderTemplate`
            Persönliches Mitglied werden
          ` })}
        </div>
        <div class="flex flex-col justify-center gap-5 bg-[#84b9e4] p-8 text-center align-middle">
          <h3 class="" font-bold>Unternehmensmitgliedschaft</h3>
          <p>Jahresbeitrag CHF 1'000.00</p>
          ${renderComponent($$result3, "Button", $$Button, { "style": "inverted", "size": "md", "class": "m-auto" }, { "default": ($$result4) => renderTemplate`
            Unternehmensmitglied werden
          ` })}
        </div>
      </article>
      <!-- end Boxes -->

      <p class="mt-10 text-lg leading-7">
        Der Jahresbeitrag ist jeweils für das Kalenderjahr geschuldet. Bitte
        füllen Sie das verknüpfte Antragsfor mular aus und reichen Sie dieses
        ein an info@baerenherz.org oder per Post an Bärenherz – Verein für
        humanitäre Hilfe, c/o Rainer Mück, Untersellenstrasse 37, 8873 Amden.
        Der Vorstand entscheidet über die Aufnahme neuer Vereinsmitglieder.
      </p>
      <div class="py-10">
        ${renderComponent($$result3, "Cta", $$Cta, { "ctaImage": ctaImage, "ctaAlt": ctaAlt, "ctaLink": ctaLink }, { "content1": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "content1" }, { "default": ($$result5) => renderTemplate`
            „Mit meiner Mitgliedschaft kann ich die großartige Arbeit von
            Bärenherz unterstützen und habe das gute Gefühl eine Hilfe zu
            leisten, die auch zu 100% dort ankommt, wo sie auch dringend
            gebraucht wird.“
          ` })}`, "content2": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "content2" }, { "default": ($$result5) => renderTemplate`Natascha Heye` })}`, "content3": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "content3" }, { "default": ($$result5) => renderTemplate`Unternehmerin, Zürich` })}` })}
      </div>
    </section>
  ` })}
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/mitgliedschaft.astro", void 0);

const $$file = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/mitgliedschaft.astro";
const $$url = "/mitgliedschaft";

export { $$Mitgliedschaft as default, $$file as file, $$url as url };
