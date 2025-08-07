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
  "title": "\xDCbergabe Charity Erl\xF6se 2023 an Project HOPE e.V.",
  "description": "Auch dieses Jahr durften die B\xE4renherz Vorst\xE4nde Andreas Wenzel, Markus Schweizer und Rainer M\xFCck anl\xE4sslich der Project HOPE Charity Classic in Beuerberg am 08. September wieder einen Scheck \xFCberreichen, um die T\xE4tigkeiten von Project HOPE e.V. in Nordmazedonien zu unterst\xFCtzen. ",
  "pubDate": "Sep 17 2023",
  "cover": "@assets/news/charity-erloese-2023.jpg",
  "coverAlt": "Skitag"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Auch dieses Jahr durften die B\xE4renherz Vorst\xE4nde Andreas Wenzel, Markus Schweizer und Rainer M\xFCck anl\xE4sslich der Project HOPE Charity Classic in Beuerberg am 08. September wieder einen Scheck \xFCberreichen, um die T\xE4tigkeiten von Project HOPE e.V. in Nordmazedonien zu unterst\xFCtzen. Mit unserem Golfturnier in Lipperswil und dem Skitag am Flumserberg sowie privaten Spenden ist es uns gelungen, einen Betrag von \xFCber 30\u2019000 CHF weiterzugeben. Aber wir beschr\xE4nken uns nicht nur auf die Geld\xFCbergabe, sondern werden pers\xF6nlich vor Ort in Strumica daf\xFCr Sorge tragen, dass das Geld in die richtigen Kan\xE4le fliesst und im dortigen Krankenhaus die notwendigen Ger\xE4te angeschafft werden k\xF6nnen."
    }), "\n", createVNode(_components.p, {
      children: "Auch f\xFCr 2024 haben wir bei B\xE4renherz wieder Grosses vor: Vom 21. bis 23. Januar 2024 finden unsere Charity Skitage in Davos statt. Neben unserem Vorstand Andy Wenzel werden auch Marie-Therese Nadig und Urs K\xE4lin wieder allen Teilnehmern die richtigen Tipps f\xFCr den Spass in Schnee geben. Am 24. Mai 2024 wird in Lipperswil wieder der Golfplatz \xABumgegraben\xBB. Bereits zum 3. Mal findet dann unser Charity Golfturnier statt. Wir freuen uns sehr, m\xF6glichst viele Teilnehmer im Sinne der Guten Sache bei den Events begr\xFCssen zu d\xFCrfen."
    })]
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
const url = "src/content/news/uebergabe-charity-erloese-2023-HOPE.mdx";
const file = "D:/Bärenherz/Repository/baerenherz/src/content/news/uebergabe-charity-erloese-2023-HOPE.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Bärenherz/Repository/baerenherz/src/content/news/uebergabe-charity-erloese-2023-HOPE.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
