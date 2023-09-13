import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from '../renderers.mjs';
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

const frontmatter = {
  "title": "Das B\xE4renherz Charity 2022 Golfturnier: Premiere gegl\xFCckt!",
  "description": "Stolze 23\u2019163.50 CHF an Spendengeldern hat die B\xE4renherzfamilie bei ihrem ersten Charity Event zusammengebracht. Am 6. Mai 2022 war der Golfclub Lipperswil Turnierschauplatz der 43 Golfer, die f\xFCr einen humanit\xE4ren Zweck mitspielten. Das Projekt Perimac, das durch Ausbildung und verbesserte Infrastruktur die S\xE4uglingssterblichkeit in Nord-Mazedonien drosselt, wurde dadurch unterst\xFCtzt. Die Freude war gross bei den Projektverantwortlichen Sabine Busch und Achim Eckert von Project Hope e.V., die stellvertretend anwesend waren.",
  "pubDate": "Jan 06 2022",
  "cover": "@assets/aktivitaeten/2-barenherz-golf-Charity.jpg",
  "coverAlt": "prize"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    a: "a"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://collection.cloudinary.com/dvpsc3huf/a0a06458a2bf9e428e759e05b558ec1f",
        children: "\xBB Bildgalerie"
      })
    }), "\n", createVNode(_components.p, {
      children: "Stolze 23\u2019163.50 CHF an Spendengeldern hat die B\xE4renherzfamilie bei ihrem ersten Charity Event zusammengebracht. Am 6. Mai 2022 war der Golfclub Lipperswil Turnierschauplatz der 43 Golfer, die f\xFCr einen humanit\xE4ren Zweck mitspielten. Das Projekt Perimac, das durch Ausbildung und verbesserte Infrastruktur die S\xE4uglingssterblichkeit in Nord-Mazedonien drosselt, wurde dadurch unterst\xFCtzt. Die Freude war gross bei den Projektverantwortlichen Sabine Busch und Achim Eckert von Project Hope e.V., die stellvertretend anwesend waren."
    }), "\n", createVNode(_components.p, {
      children: "Die Namen der stolzen Gewinner des ersten Golfturniers werden auf der B\xE4renherz Troph\xE4e verewigt. Alle \xFCbrigen hatten auch ohne Hauptgewinn ihr Vergn\xFCgen an diesem Tag. Die Stimmung war dank den vielen engagierten Teilnehmern trotz anf\xE4nglichem Regenwetter grandios. Vorfreude herrscht auf die n\xE4chstj\xE4hrige Austragung des Charity Golfturniers in Lipperswil am 5. Mai 2023 \u2013 bitte diesen Termin jetzt schon vormerken!"
    }), "\n", createVNode(_components.p, {
      children: "Vor dem n\xE4chsten Golf Event in Lipperswil werden wir das allererste B\xE4renherz Nikolaus Charity Ski-Weekend am 9.-11. Dezember 2022 durchf\xFChren. Die Flumserberge als Austragungsort und die Prominenz des Schweizer Skizirkus werden den Teilnehmern ein unvergessliches Programm bieten: ein Gaudi-Skirennen, \u201EEmbodied Skiing\u201C, H\xFCttenzauber und vieles mehr. Merken Sie sich auf jeden Fall das Datum vor! Falls nicht gen\xFCgend Schnee liegen sollte, ist als Verschiebetermin der 31. M\xE4rz bis 2. April 2023 vorgesehen."
    }), "\n", createVNode(_components.p, {
      children: "Wir bedanken uns herzlich f\xFCr die rege Teilnahme und das allgemein grosse Interesse an B\xE4renherz. Auch wenn Sie nicht immer pers\xF6nlich dabei sein k\xF6nnen, werden Sie Mitglied der B\xE4renherzfamilie, werden Sie Vereinsmitglied und unterst\xFCtzen Sie durch ihre Mitgliedschaft humanit\xE4re Projekte, die Leben retten."
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
const url = "src/content/aktivitaeten/charity-golfturnier-2022.mdx";
const file = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/content/aktivitaeten/charity-golfturnier-2022.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/content/aktivitaeten/charity-golfturnier-2022.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
