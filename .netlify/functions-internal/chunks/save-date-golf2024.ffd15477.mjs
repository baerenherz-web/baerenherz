import { k as createVNode, F as Fragment, s as spreadAttributes } from '../renderers.mjs';
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

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("");

				const frontmatter = {"title":"Charity Golf Cup 2024","description":"24. Mai 2024","pubDate":"Sept 09 2023","cover":"@assets/aktivitaeten/golf-save-date-2024.png","coverAlt":"golf"};
				const file = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/content/aktivitaeten/save-date-golf2024.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
