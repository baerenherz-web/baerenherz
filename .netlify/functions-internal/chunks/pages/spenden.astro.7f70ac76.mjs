/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../../renderers.mjs';
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

const $$Astro = createAstro();
const $$Spenden = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Spenden;
  return renderTemplate`${maybeRenderHead()}<h1>spende</h1>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/spenden.astro", void 0);

const $$file = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/spenden.astro";
const $$url = "/spenden";

export { $$Spenden as default, $$file as file, $$url as url };
