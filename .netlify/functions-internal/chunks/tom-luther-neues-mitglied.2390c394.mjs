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
  "title": "Tom Luther erg\xE4nzt Vorstand von B\xE4renherz",
  "description": "Wir freuen uns, Tom Luther, der unsere Projekte bereits in den letzten Jahren unterst\xFCtzt hat, als weiteres Vorstandsmitglied gewonnen zu haben.",
  "pubDate": "May 25 2024",
  "cover": "@assets/news/tom-luther-extended.jpg",
  "coverAlt": "Portrait Tom Luther"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p"
  }, props.components);
  return createVNode(_components.p, {
    children: "Wir freuen uns, Tom Luther, der unsere Projekte bereits in den letzten Jahren unterst\xFCtzt hat, als weiteres Vorstandsmitglied gewonnen zu haben. \u201EMir ist es ein gro\xDFes Anliegen, tatkr\xE4ftig dort zu unterst\xFCtzen, wo den Schw\xE4chsten geholfen wird. B\xE4renherz wird als kleiner Verein mit viel Herz und gro\xDFem Engagement getragen. Das hat mich begeistert und ich freue mich sehr Teil der B\xE4renherz-Familie zu sein!\u201C erl\xE4utert Tom die Motivation f\xFCr sein ehrenamtliches Engagement."
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
const url = "src/content/news/tom-luther-neues-mitglied.mdx";
const file = "D:/Bärenherz/Repository/baerenherz/src/content/news/tom-luther-neues-mitglied.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Bärenherz/Repository/baerenherz/src/content/news/tom-luther-neues-mitglied.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
