/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate } from '../../renderers.mjs';
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

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  if (typeof window !== "undefined") {
    const storedLang = localStorage.getItem("lang-preference");
    if (storedLang === "/ch") {
      window.location.replace("/ch/");
    } else {
      window.location.replace("/de/");
    }
  } else {
    throw Astro2.redirect("/de/");
  }
  return renderTemplate``;
}, "D:/B\xE4renherz/Repository/baerenherz/src/pages/[...catchall].astro", void 0);

const $$file = "D:/Bärenherz/Repository/baerenherz/src/pages/[...catchall].astro";
const $$url = "/[...catchall]";

export { $$ as default, $$file as file, $$url as url };
