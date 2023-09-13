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

				const html = updateImageReferences("<p>Zwar hat uns das Wetter beim ersten Bärenherz Skitag 2023 vor grössere Herausforderungen gestellt, aber die Teilnehmer waren dennoch alle so begeistert, dass wir den Event für 2024 um einen Tag verlängern werden. Diesmal verschlägt es uns in die traumhafte Bergwelt von Davos, wo wir wieder gemeinsam mit unseren phantastischen Coaches Marie- Therese Nadig, Urs Kälin und Andy Wenzel das Skigebiet erkunden und unsere Fahrkünste verbessern werden. Bei einem Fondue Hüttenabend werden wir den ersten Tag gemeinsam analysieren, während am zweiten Tag beim Rennen um den „Ski-Bären-Wanderpokal“ die sportlichen Kräfte gemessen werden. Nach den Erlebnissen unseres ersten Skitages am Flumserberg können wir Spass und gute Laune garantieren. Wir freuen uns auf eine tolle gemeinsame Zeit in Davos!</p>\n<p>Lassen Sie sich überraschen und geniessen Sie mit uns zwei unvergessliche Skitage!</p>\n<blockquote>\n<p>Download: <a href=\"/aktivitaeten/anmeldung-charity-skitage-2024.pdf\">„Einladung“</a></p>\n<p>Download: <a href=\"/aktivitaeten/baerenherz-charity-skitage-2024.pdf\">„Anmeldung“</a></p>\n</blockquote>");

				const frontmatter = {"title":"Charity Ski Tage 2024","description":"24. Mai 2024","pubDate":"Sept 09 2023","cover":"@assets/aktivitaeten/ski-save-date-2024.png","coverAlt":"ski"};
				const file = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/content/aktivitaeten/save-date-sky2024.md";
				const url = undefined;
				function rawContent() {
					return "\nZwar hat uns das Wetter beim ersten Bärenherz Skitag 2023 vor grössere Herausforderungen gestellt, aber die Teilnehmer waren dennoch alle so begeistert, dass wir den Event für 2024 um einen Tag verlängern werden. Diesmal verschlägt es uns in die traumhafte Bergwelt von Davos, wo wir wieder gemeinsam mit unseren phantastischen Coaches Marie- Therese Nadig, Urs Kälin und Andy Wenzel das Skigebiet erkunden und unsere Fahrkünste verbessern werden. Bei einem Fondue Hüttenabend werden wir den ersten Tag gemeinsam analysieren, während am zweiten Tag beim Rennen um den „Ski-Bären-Wanderpokal“ die sportlichen Kräfte gemessen werden. Nach den Erlebnissen unseres ersten Skitages am Flumserberg können wir Spass und gute Laune garantieren. Wir freuen uns auf eine tolle gemeinsame Zeit in Davos!\n\nLassen Sie sich überraschen und geniessen Sie mit uns zwei unvergessliche Skitage!\n\n> Download: [„Einladung“](/aktivitaeten/anmeldung-charity-skitage-2024.pdf)\n>\n> Download: [„Anmeldung“](/aktivitaeten/baerenherz-charity-skitage-2024.pdf)\n";
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
