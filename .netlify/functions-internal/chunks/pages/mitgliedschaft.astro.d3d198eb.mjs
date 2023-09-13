/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, d as renderSlot, f as renderComponent, F as Fragment } from '../../renderers.mjs';
import { $ as $$Container, b as $$Layout } from './404.astro.a3cd5782.mjs';
import { $ as $$Sectionhead, N as Newsletter } from './about.astro.583b239b.mjs';
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

const $$Astro$1 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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

const localImage = {"src":"/_astro/Mitfliedschaft.14cd1f96.jpg","width":1772,"height":1181,"format":"jpg","orientation":1};

const $$Astro = createAstro();
const $$Mitgliedschaft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Mitgliedschaft;
  const localAlt = "Mitgliedschaft";
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
        ${renderComponent($$result3, "Newsletter", Newsletter, {})}
      </div>
      <!-- 
      <div class="py-10">
        <Cta ctaImage={ctaImage} ctaAlt={ctaAlt} ctaLink={ctaLink}>
          <Fragment slot="content1">
            „Mit meiner Mitgliedschaft kann ich die großartige Arbeit von
            Bärenherz unterstützen und habe das gute Gefühl eine Hilfe zu
            leisten, die auch zu 100% dort ankommt, wo sie auch dringend
            gebraucht wird.“
          </Fragment>
          <Fragment slot="content2">Natascha Heye</Fragment>
          <Fragment slot="content3">Unternehmerin, Zürich</Fragment>
        </Cta>
      </div>
       -->
    </section>
  ` })}
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/mitgliedschaft.astro", void 0);

const $$file = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/mitgliedschaft.astro";
const $$url = "/mitgliedschaft";

export { $$Mitgliedschaft as default, $$file as file, $$url as url };
