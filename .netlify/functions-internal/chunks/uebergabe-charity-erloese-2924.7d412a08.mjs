import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from '../renderers.mjs';
import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
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

const frontmatter = {
  "title": "\xDCbergabe Charity Erl\xF6se 2024 an Project HOPE e.V.",
  "description": "Mit der \xDCbergabe unseres Spendenschecks aus den Aktivit\xE4ten 2024 im Rahmen der Project HOPE Charity Classics in Beuerberg, konnten wir erneut mit knapp 30.000 CHF dazu betragen, das Projekt in Bitola erfolgreich umzusetzen",
  "pubDate": "Sep 06 2024",
  "cover": "@assets/news/scheckuebergabe-2924.jpg",
  "coverAlt": "nordmazenonien"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p"
  }, props.components);
  return createVNode(_components.p, {
    children: "Mit der \xDCbergabe unseres Spendenschecks aus den Aktivit\xE4ten 2024 im Rahmen der Project HOPE Charity Classics in Beuerberg, konnten wir erneut mit knapp 30\u2019000 CHF dazu betragen, das Projekt in Bitola erfolgreich umzusetzen. Damit haben wir auch den letzten Schritt getan, um das dortige Krankenhaus in die Lage zu versetzen, mit den notwendigsten Ger\xE4ten und Einrichtungen daf\xFCr zu sorgen, f\xFCr Mutter und Kind eine gute gesundheitliche Versorgung sicherzustellen."
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/news/uebergabe-charity-erloese-2924.mdx";
const file = "D:/Bärenherz/Repository/baerenherz/src/content/news/uebergabe-charity-erloese-2924.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Bärenherz/Repository/baerenherz/src/content/news/uebergabe-charity-erloese-2924.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
