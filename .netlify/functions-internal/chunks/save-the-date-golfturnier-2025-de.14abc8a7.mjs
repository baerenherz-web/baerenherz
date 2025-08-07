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
  "title": "Golfturnier 10.10-12.10 2025",
  "description": "Hier geht es zum Erlebnisbericht...",
  "pubDate": "Aug 06 2025",
  "cover": "@assets/aktivitaeten/skitag-2023.jpg",
  "coverAlt": "HOPE e.V."
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
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
  }) : _createMdxContent();
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/aktivitaeten/de/save-the-date-golfturnier-2025-de.mdx";
const file = "D:/Bärenherz/Repository/baerenherz/src/content/aktivitaeten/de/save-the-date-golfturnier-2025-de.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Bärenherz/Repository/baerenherz/src/content/aktivitaeten/de/save-the-date-golfturnier-2025-de.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
