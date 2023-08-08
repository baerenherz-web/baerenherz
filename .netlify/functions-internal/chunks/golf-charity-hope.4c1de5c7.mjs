import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from '../renderers.mjs';
import 'node:fs';
import 'node:path';
import 'node:os';
import 'node:url';
import 'node:worker_threads';
import 'module';
import 'worker_threads';

const frontmatter = {
  "title": "\xDCbergabe Golf Charity Erl\xF6se an Project HOPE e.V.",
  "description": "Im Rahmen des Project HOPE Charity Classic Golfturniers am 08. September in Beuerberg haben die Vorst\xE4nde von B\xE4renherz Andreas Wenzel, Rainer M\xFCck und Markus Schweizer den Scheck mit den Einnahmen aus dem ersten B\xE4renherz Charity Turnier vom 08. Mai 2022 in H\xF6he von 23\u2018163,50 CHF an Sabine Busch und Achim Eckert von Projekt HOPE \xFCbergeben. Damit soll sichergestellt werden, dass es bei dem Projekt PeriMAC in Nordmazedonien nicht nur bei der Bereitstellung von Krankenwagen und medizinischer Ausr\xFCstung bleibt, sondern auch die Schulung des Personals, der weitere Aufbau der Verwaltung und Logistik weiterhin gew\xE4hrleistet werden kann. Wir haben uns bei unserem Besuch in Skopje im April 2022 von der Situation vor Ort \xFCberzeugt und es ist uns ein grosses Anliegen, dass die bisher erzielten phantastischen Hilfsleistungen auch weiterhin nachhaltig wirken. Deshalb haben wir uns bei B\xE4renherz schon im letzten Jahr entschieden, dieses Projekt mit dem Wissen zu unterst\xFCtzen, dass jeder Franken auch wirklich direkt vor Ort ankommt. In diesem Zusammenhang unser herzliches Dankesch\xF6n nicht nur an alle, die zu unserem tollen Spendenergebnis beigetragen haben, sondern auch an die vielen Helfer von Project HOPE, die sicherstellen, dass das Geld auch wirklich seiner Verwendung zugef\xFChrt wird.",
  "pubDate": "Jan 06 2023",
  "cover": "@assets/blog/golf-charity-hope.jpg",
  "coverAlt": "HOPE e.V."
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
      children: "Im Rahmen des Project HOPE Charity Classic Golfturniers am 08. September in Beuerberg haben die Vorst\xE4nde von B\xE4renherz Andreas Wenzel, Rainer M\xFCck und Markus Schweizer den Scheck mit den Einnahmen aus dem ersten B\xE4renherz Charity Turnier vom 08. Mai 2022 in H\xF6he von 23\u2018163,50 CHF an Sabine Busch und Achim Eckert von Projekt HOPE \xFCbergeben. Damit soll sichergestellt werden, dass es bei dem Projekt PeriMAC in Nordmazedonien nicht nur bei der Bereitstellung von Krankenwagen und medizinischer Ausr\xFCstung bleibt, sondern auch die Schulung des Personals, der weitere Aufbau der Verwaltung und Logistik weiterhin gew\xE4hrleistet werden kann. Wir haben uns bei unserem Besuch in Skopje im April 2022 von der Situation vor Ort \xFCberzeugt und es ist uns ein grosses Anliegen, dass die bisher erzielten phantastischen Hilfsleistungen auch weiterhin nachhaltig wirken. Deshalb haben wir uns bei B\xE4renherz schon im letzten Jahr entschieden, dieses Projekt mit dem Wissen zu unterst\xFCtzen, dass jeder Franken auch wirklich direkt vor Ort ankommt. In diesem Zusammenhang unser herzliches Dankesch\xF6n nicht nur an alle, die zu unserem tollen Spendenergebnis beigetragen haben, sondern auch an die vielen Helfer von Project HOPE, die sicherstellen, dass das Geld auch wirklich seiner Verwendung zugef\xFChrt wird."
    }), "\n", createVNode(_components.p, {
      children: "Das B\xE4renherz Charity Golfturnier wird es auch im n\xE4chsten Jahr wieder geben: AM 05. Mai 2023 ist es in Lipperswil wieder so weit. Details folgen rechtzeitig. Wir freuen uns jetzt erst einmal auf unseren Skievent vom 09. \u2013 11. Dezember 2022 am Flumserberg, dessen Erl\xF6se ebenfalls das PeriMAC Projekt in Nordmazedonien unterst\xFCtzen werden."
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
const url = "src/content/blog/golf-charity-hope.mdx";
const file = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/content/blog/golf-charity-hope.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/content/blog/golf-charity-hope.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
