/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../../renderers.mjs';
import { a as $$Layout } from './404.astro.d5157cb0.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'preact';
import 'preact-render-to-string';
import 'react';
import 'react-dom/server';
import 'mime/lite.js';
import 'html-escaper';
import 'node:fs';
import 'node:path';
import 'node:os';
import 'node:url';
import 'node:worker_threads';
import 'module';
import 'worker_threads';
/* empty css                               */
const $$Astro = createAstro();
const $$Impressum = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Impressum;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Impressum \u2013 B\xE4renherz e.V." }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="prose mx-auto my-10 max-w-2xl px-4">
    <h1>Impressum</h1>
    <p>
      <strong>Bärenherz e.V.</strong> <br>
      Geranienstrasse 2 <br>
      82031 Grünwald <br>
      Germany
    </p>

    <h2>Kontakt</h2>
    <p>
      E-Mail: <a href="mailto:info@baerenherz.org">info@baerenherz.org</a>
    </p>

    <h2>Rechtsform</h2>
    <p>eingetragener Verein (e.V.)</p>

    <h2>Vertreten durch</h2>
    <p>Die Vorstände Thomas Luther und Rainer Mück</p>

    <h2>Steuernummer</h2>
    <p>143/210/90207</p>

    <h2>Anerkennung als gemeinnütziger Verein</h2>
    <p>
      Anerkannt mit Freistellungsbescheid vom 03. Juli 2025, ausgestellt vom
      Finanzamt München.
    </p>

    <h2>Autor und Verantwortlicher</h2>
    <p>Thomas Luther</p>

    <h2>Eintragung im Handelsregister</h2>
    <p>
      Registergericht: Amtsgericht München <br>
      Registernummer: VR 211 017
    </p>

    <h2>Spendenkonto</h2>
    <p>
      Bärenherz – Verein für humanitäre Hilfe e.V. <br>
      HypoVereinsbank/UniCredit <br>
      IBAN DE78 7002 0270 0046 6389 56 <br>
      BIC HYVEDEMMXXX
    </p>

  </section>
` })}`;
}, "D:/B\xE4renherz/Repository/baerenherz/src/pages/de/impressum.astro", void 0);

const $$file = "D:/Bärenherz/Repository/baerenherz/src/pages/de/impressum.astro";
const $$url = "/de/impressum";

export { $$Impressum as default, $$file as file, $$url as url };
