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
  "title": "Besuch im Krankenhaus in Bitola/Nord-Mazedonien",
  "description": "\xDCbergabe medizinischer Ger\xE4te im Wert von 85 000 Euro",
  "pubDate": "Apr 29 2024",
  "cover": "@assets/news/bitola2.jpg",
  "coverAlt": "Besuch Bitola"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    img: "img"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Mit der Unterst\xFCtzung von Project HOPE und Phillips haben wir von B\xE4renherz medizinische Ger\xE4te im Wert von 85\u2019000 Euro \xFCbergeben, die auch schon im Einsatz sind, um Neugeborenen und Ihren M\xFCttern einen besseren Start ins Leben zu erm\xF6glichen."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/news/bitola3.jpg",
        alt: "beds"
      })
    }), "\n", createVNode(_components.p, {
      children: "Trotz allen Widrigkeiten, die es immer wieder gibt, ist es am Ende ein gutes Gef\xFChl zu sehen, das unsere Hilfe ankommt."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/news/bitola5.jpg",
        alt: "beds"
      })
    }), "\n", createVNode(_components.p, {
      children: "Beeindruckend auch der Einsatz und die Dankbarkeit der Verantwortlichen im Krankenhaus. Mit den Kollegen von Project HOPE haben wir uns ein Bild vor Ort gemacht. Dabei hatten wir auch Gelegenheit, dem Gesundheitsminister von unseren Aktivit\xE4ten zu berichten, aber auch unsere W\xFCnsche und Hoffnungen zu adressieren, das Krankenhaus in Stumica schnellstm\xF6glich in Betrieb zu nehmen."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/news/bitola4.jpg",
        alt: "beds"
      })
    }), "\n", createVNode(_components.p, {
      children: "Es ist immer wieder wichtig und bereichernd, vor Ort die Situation zu sehen, um wirklich beurteilen zu k\xF6nnen, was ben\xF6tigt wird, aber eben auch sicherzustellen, dass die Hilfe richtig ankommt."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/news/bitola1.jpg",
        alt: "beds"
      })
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
const url = "src/content/news/besuch-bitola.mdx";
const file = "D:/Bärenherz/Repository/baerenherz/src/content/news/besuch-bitola.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Bärenherz/Repository/baerenherz/src/content/news/besuch-bitola.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
