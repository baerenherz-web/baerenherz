/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, F as Fragment, m as maybeRenderHead } from '../../renderers.mjs';
import { $ as $$Container, b as $$Layout } from './404.astro.22081207.mjs';
import { a as $$Sectionhead, b as $$Button } from './about.astro.9f9dd22c.mjs';
import { $ as $$Cta, c as ctaImage } from './index.astro.6a2cdbeb.mjs';
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
/* empty css                               */import './_...slug_.astro.e2038acc.mjs';
import 'react-slick';
import '../index.5442f008.c3ba081a.mjs';
import 'react/jsx-runtime';

const localImage = {"src":"/_astro/Mitfliedschaft.14cd1f96.jpg","width":1772,"height":1181,"format":"jpg","orientation":1};

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
