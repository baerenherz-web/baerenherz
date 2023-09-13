/* empty css                         */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, d as renderSlot, $ as $$Image, F as Fragment } from '../../renderers.mjs';
import { $ as $$Container, b as $$Layout } from './404.astro.a3cd5782.mjs';
import { useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubscribe = async () => {
    const apiKey = ({}).BREVO_API_KEY;
    const url = `https://api.brevo.com/v3/contacts`;
    const headers = {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey
    };
    const data = {
      email
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(data)
      });
      if (response.ok) {
        setSubscribed(true);
      } else {
        console.error("Subscription failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return /* @__PURE__ */ jsx("div", {
    className: "mx-auto mt-6 bg-[#033277] px-5 py-10 text-white md:px-10",
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col gap-6 md:flex-row xl:justify-center",
      children: [/* @__PURE__ */ jsx("div", {
        className: "py-3",
        children: /* @__PURE__ */ jsx("h2", {
          className: "text-3xl font-bold  text-white",
          children: "Bleiben Sie Informiert!"
        })
      }), subscribed ? /* @__PURE__ */ jsx("p", {
        className: "mb-4 text-green-500",
        children: "Thank you for subscribing!"
      }) : /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col leading-7 md:w-4/5 xl:w-7/12",
        children: [/* @__PURE__ */ jsx("div", {
          children: /* @__PURE__ */ jsx("p", {
            className: "prose text-base text-white",
            children: "Wir informieren Sie über unsere laufenden Projekte, wie ihre Spenden vor Ort Gutes tun und senden ihnen Einladungen zu unseren Veranstaltungen."
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "mt-6 flex max-w-md gap-x-4",
          children: [/* @__PURE__ */ jsx("input", {
            type: "email",
            placeholder: "Email",
            autoComplete: "email",
            "aria-placeholder": "Email",
            required: true,
            minLength: "5",
            maxLength: "50",
            className: "min-w-0 flex-auto border-0 bg-white px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6",
            onChange: handleEmailChange
          }), /* @__PURE__ */ jsx("button", {
            className: "flex-none border-2 border-transparent bg-[#dfecf7] px-3.5 py-2.5 text-sm font-semibold text-[#2b2523] shadow-sm hover:border-2 hover:border-[#dfecf7] hover:bg-[#033277] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
            onClick: handleSubscribe,
            children: "Absenden"
          })]
        })]
      })]
    })
  });
}
__astro_tag_component__(Newsletter, "@astrojs/react");

const $$Astro$1 = createAstro();
const $$Sectionhead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sectionhead;
  const { altHead, imageHead } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative isolate flex overflow-hidden bg-gray-900 py-24 sm:py-32">
  ${renderComponent($$result, "Image", $$Image, { "src": imageHead, "alt": altHead, "class": "absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" })}

  <div class="m-20 flex max-w-2xl flex-col bg-[#f2f8f9] px-4 py-6 md:w-2/6 md:px-6">
    <h4 class="text-2xl tracking-tight">
      ${renderSlot($$result, $$slots["title"], renderTemplate`Title`)}
    </h4>
    <span class="my-4 w-full border-b-2 border-[#033277]"></span>
    <h2 class="text-3xl font-bold md:text-4xl md:leading-tight">
      ${renderSlot($$result, $$slots["content"], renderTemplate`Subtitle`)}
    </h2>
  </div>
</div>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/Sectionhead.astro", void 0);

const Vorstand = {"src":"/_astro/vorstand.78d63271.jpg","width":2067,"height":1022,"format":"jpg","orientation":1};

const localImage = {"src":"/_astro/philosohie.020f4193.jpg","width":2126,"height":1417,"format":"jpg","orientation":1};

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const localAlt = "Philosophie";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\xDCber uns" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Sectionhead", $$Sectionhead, { "class": "items-center text-center", "altHead": localAlt, "imageHead": localImage }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`
      Direkte Hilfe, unbürokratisch und schnell.
    ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title", "class": "uppercase" }, { "default": ($$result4) => renderTemplate`Bärenherz` })}` })}
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<section class="py-10 md:px-14 xl:mx-auto xl:my-6 xl:w-3/4">
      <article class="py-6">
        <h2 class="py-4 text-2xl font-bold">Mission</h2>
        <p class="text-lg leading-7">
          Bärenherz - Verein für humanitäre Hilfe - wurde 2021 in der Schweiz
          mit dem Ziel gegründet, dort zu helfen, wo lebensnotwendige
          Unterstützung benötigt wird. Wir sind ein unabhängiger Verein, der
          durch das persönliche und ehrenamtliche Engagement der Mitglieder
          sowie den Einnahmen aus von uns organisierten Charity Events und
          Spendengeldern jeweils im Vorfeld definierte Projekte in Sinne der
          Philosophie des Vereins unterstützt.
        </p>
      </article>

      <article>
        <h2 id="philosophie" class="py-4 text-3xl font-bold">Philosophie</h2>

        <p class="text-lg leading-7">
          Die Grundidee unseres Vereins ist es, da zu helfen, wo Hilfe wirklich
          gebraucht wird, um Leben zu retten, lebenswerte Bedingungen zu schafen
          oder in unverschuldeten Notsituationen einen schnellen uns
          unbürokratischen Beitrag zur Soforthilfe zu leisten.
        </p>

        <!-- TODO: this should be separate component -->
        <div class="mb-4 mt-6 bg-[#d0e4f5] py-4">
          <h3 class="py-4 text-center text-3xl font-bold">
            Die Philosophie unseres Vereins beruht auf drei Grundgedanken:
          </h3>
          <div class="flex flex-col justify-around gap-20 p-6 align-middle md:flex-row">
            <div class="flex w-full flex-col items-center md:w-1/3">
              <div class="mb-8 flex h-48 w-48 items-center rounded-full bg-white px-4 text-center">
                <h3 class="text-center text-lg/6 font-bold tracking-tighter">
                  Hilfe zur Selbsthilfe
                </h3>
              </div>

              <p class="justify-stretch">
                So wie in der Vergangenheit bei Project Hope e.V. leisten auch
                wir in den von uns unterstützen Projekten Hilfe zur Selbsthilfe:
                Wir wollen nicht einfach materielle Zuwendun gen geben, sondern
                aktiv die jeweilige Notsituation so verbessern, dass mittel- bis
                langfristig eine nachhaltige Verbesserung erreicht werden kann.
              </p>
            </div>

            <div class="flex w-full flex-col items-center md:w-1/3">
              <div class="mb-8 flex h-48 w-48 items-center rounded-full bg-white px-4 text-center">
                <h3 class="text-center text-lg/6 font-bold tracking-tighter">
                  Ehrenamtlich aus Überzeugung
                </h3>
              </div>
              <p>
                Wir arbeiten ehrenamtlich und aus Überzeugung: Alles was wir
                bewegen, machen wir mit viel Freunde und Elan in unserer
                Freizeit, weil wir wissen, dass wir damit einen wertvollen
                Beitrag für Leben unter lebenswerten Bedingungen leisten können.
              </p>
            </div>

            <div class="flex w-full flex-col items-center md:w-1/3">
              <div class="mb-8 flex h-48 w-48 items-center rounded-full bg-white px-4 text-center">
                <h3 class="text-center text-lg/6 font-bold tracking-tighter">
                  Unnötige Kosten vermeiden
                </h3>
              </div>
              <p>
                Wir wollen unnötige Kosten vermeiden: Unsere administrativen
                Aufwendungen halten wir auf einem Minimum und finanzieren diese
                intern durch unsere Mitgliedbeiträge und sonstigen finanziellen
                Zuwendungen der Mitglieder und Vorstände.
              </p>
            </div>
          </div>

          <p class="my-4 p-6 font-bold">
            Diese Hilfe erreichen wir im Wesentlichen mit unseren Charity
            Aktionen. Hier möchten wir in einem spannenden Umfeld gemeinsam
            Spass haben aber gerade mit dem Wissen über unsere persönliche
            privilegierte Lebenssituation auch einen Teil an diejenigen
            weiterreichen, denen es nicht so gut geht. Das ist unser Antrieb und
            unsere Motivation.
          </p>
        </div>
      </article>

      <article>
        <h2 class="py-4 text-3xl font-bold" id="vorstand">Vorstand</h2>
        <p class="pb-2 text-lg/7">
          Aktuell setzt sich der Vorstand aus den folgenden Personen zusammen:
        </p>
        <ul class="py-4 text-lg/7">
          <li>
            Rainer Mück, Gründer und Vorstand, Mück Management Partners AG –
            Präsident
          </li>
          <li>
            Andreas Wenzel, Inhaber und Geschäftsführer, IZMI It’s me – Mehr
            Freude durch Bewussheit, sowie General Project Manager, Personal
            Sport Record – Vizepräsident
          </li>
          <li>
            Dr. Andrea Degen, Co-Founder und CEO, Institute for Mental Health,
            sowie Research & Innovation Manager EUrelations AG – Mitglied
          </li>
          <li>Markus T. Schweizer, Senior Partner, EY – Mitglied</li>
        </ul>

        ${renderComponent($$result3, "Image", $$Image, { "src": Vorstand, "alt": "Vorstand", "class": "w-full py-4" })}

        <div class="my-4 py-4">
          ${renderComponent($$result3, "Newsletter", Newsletter, {})}
        </div>
      </article>

      <!-- Statuten -->
      <article>
        <h2 class="pb-4 pt-10 text-3xl font-bold" id="statuten">
          Statuten des Vereins „Bärenherz – Verein für humanitäre Hilfe“
        </h2>
        <div class="text-base/7">
          <p>
            <span class="font-bold">1. Namen und Sitz</span> Unter dem Namen «Bärenherz
            – Verein für humanitäre Hilfe» besteht ein Verein für humanitäre Hilfe
            im Sinne von Art. 60 ff. ZGB mit Sitz in Amden SG. Er ist politisch und
            konfessionell unabhängig.
          </p>

          <p>
            <span class="font-bold">2. Zweck</span> Der Verein bezweckt die Unterstützung
            von Menschen in Not sowie die Verbesserung der Lebensqualität von Bedürftigen.
          </p>
          <p class="text-lg leading-7">
            Es können einzelne Personen oder auch Institutionen vom Verein
            unterstützt werden.
          </p>
          <p>
            Dedizierte Projekte: Nebst dem allgemeinen Vereinszweck gibt es noch
            dedizierte Projekte, welche mit zweckgebundenen Mitteln finanziert
            werden. Dazu gehörten unter anderem Projekte des Vereins „Project
            Hope Germany e.V.“
          </p>
          <p>
            Der Verein verfolgt weder Erwerbs- noch Selbsthilfezwecke. Der
            Verein kann sich auch an Aktionen und Projekten beteiligen oder
            solche unterstützen, die durch andere Organisationen mit ähnlicher
            Zielsetzung durchgeführt werden.
          </p>
          <p>
            Der Verein verfolgt keine kommerziellen Zwecke und erstrebt keinen
            Gewinn. Die Organe sind ehrenamtlich tätig.
          </p>
          <p>
            <span class="font-bold">3. Mittel</span> Mittelzusicherung: Während der
            Aufbauphase bis Ende 2021 sichert Rainer Mück dem Verein zu, dass die
            in 2021 dem Verein zufliessenden Mitteln mindestens CHF 1‘000.- betragen.
            Das Vereinsvermögen ist nach den Grundsätzen einer sicheren Anlage zu
            verwalten. Aus dem Vereinsvermögen und dessen Erträgnissen dürfen keine
            Leistungen erbracht werden, die nicht dem Vereinszweck entsprechen. Ein
            Rückfall des Vereinsvermögens an die Mitglieder oder an aussenstehende
            Spender ist ausgeschlossen.
          </p>
          <p>
            Weitere Mitteleinkünfte werden aus Spenden und Zuwendungen aller Art
            von Dritten oder Mitgliedern generiert.
          </p>
          <p>Das Geschäftsjahr entspricht dem Kalenderjahr.</p>
          <p>
            <span class="font-bold">4. Mitgliedschaft</span> Mitglieder können natürliche
            und juristische Personen werden, die den Vereinszweck unterstützen. Alle
            Mitglieder haben in der Mitgliederversammlung das gleiche Stimmrecht.\\
            Aufnahmegesuche sind an den Vorstand zu richten; über die Aufnahme entscheidet
            der Vorstand.
          </p>
          <p>
            <span class="font-bold">5. Erlöschen der Mitgliedschaft</span> Die Mitgliedschaft
            erlischt
          </p>
          <p>- bei natürlichen Personen durch Austritt, Ausschluss oder Tod</p>
          <p>
            - bei juristischen Personen durch Austritt, Ausschluss oder
            Auflösung der juristischen Person
          </p>
          <p>
            <span class="font-bold">6. Austritt und Ausschluss</span> Ein Vereinsaustritt
            ist jederzeit möglich. Das Austrittsschreiben muss mindestens vier Wochen
            vor der ordentlichen Mitgliederversammlung schriftlich an den Vorstand
            gerichtet werden.
          </p>
          <p>
            Ein Mitglied kann jederzeit ohne Angaben von Gründen vom Vorstand
            ausgeschlossen werden.
          </p>
          <p>
            Der Vorstand fällt den Ausschlussentscheid; das Mitglied kann den
            Ausschlussentscheid an die Mitgliederversammlung weiterziehen.
          </p>
          <p>
            <span class="font-bold">7. Organe des Vereins</span> Die Organe des Vereins
            sind:
          </p>
          <p>a) die Mitgliederversammlung</p>
          <p>b) der Vorstand</p>
          <p>
            <span class="font-bold">8. Die Mitgliederversammlung</span> Das oberste
            Organ des Vereins ist die Mitgliederversammlung. Eine ordentliche Mitgliederversammlung
            findet jährlich in der ersten Jahreshälfte statt.
          </p>
          <p>
            Zur Mitgliederversammlung werden die Mitglieder zehn Tage im Voraus
            schriftlich unter Angabe der Traktanden eingeladen. Einladungen per
            E-Mail sind gültig.
          </p>

          <p>
            Traktandierungsanträge zuhanden der Mitgliederversammlung sind bis
            spätestens vier Wochen schriftlich an den Vorstand zu richten.
          </p>

          <p>
            Der Vorstand oder 1/5 der Mitglieder können jederzeit die
            Einberufung einer ausserordentlichen Mitgliederversammlung unter
            Angaben des Zwecks verlangen. Die Versammlung hat spätestens acht
            Wochen nach Eingang des Begehrens zu erfolgen.
          </p>

          <p>
            Die Mitgliederversammlung hat folgende unentziehbare Aufgaben und
            Kompetenzen:
          </p>

          <p>a) Genehmigung des Protokolls der letzten Mitgliederversammlung</p>
          <p>b) Genehmigung des Jahresberichts des Vorstands</p>

          <p>c) Genehmigung der Jahresrechnung</p>

          <p>d) Entlastung des Vorstandes</p>
          <p>
            e) Wahl des Präsidenten/der Präsidentin und des übrigen Vorstandes
          </p>

          <p>f) Kenntnisnahme des Jahresbudgets</p>

          <p>g) Kenntnisnahme des Tätigkeitsprogrammes</p>

          <p>
            h) Beschlussfassung über weitere von den Mitgliedern oder dem
            Vorstand eingebrachte Geschäfte
          </p>

          <p>i) Änderung der Statuten</p>

          <p>
            j) Entscheid </p><p>über Ausschlüsse von Mitgliedern</p>

            <p>
              k) Beschlussfassung über die Auflösung des Vereins und die
              Verwendung des Liquidationserlöses
            </p>

            <p>
              Jede ordnungsgemäss einberufene Mitgliederversammlung ist
              unabhängig von der Anzahl Mitglieder beschlussfähig.
            </p>

            <p>
              Die Mitglieder fassen die Beschlüsse mit dem einfachen Mehr. Bei
              Stimmengleichheit fällt die/der Vorsitzende den Stichentscheid.
            </p>
            <p>
              Statutenänderungen benötigen die Zustimmung einer 2/3-Mehrheit der
              Stimmberechtigten.
            </p>

            <p>
              Über die gefassten Beschlüsse ist zumindest ein Beschlussprotokoll
              abzufassen.
            </p>

            <p>
              <span class="font-bold">9. Der Vorstand</span> Der Vorstand besteht
              aus mindestens zwei Personen, einem Präsidenten und einem weiteren
              Mitglied.
            </p>
            <p>Die Amtszeit beträgt fünf Jahre. Wiederwahl ist möglich.</p>
            <p>
              Der Vorstand führt die laufenden Geschäfte und vertritt den Verein
              nach aussen.
            </p>

            <p>Er erlässt Reglemente.</p>

            <p>Er kann Arbeitsgruppen (Fachgruppen) einsetzen.</p>

            <p>
              Er kann für die Erreichung der Vereinsziele Personen gegen eine
              angemessene Entschädigung anstellen oder beauftragen.
            </p>
            <p>Weitere Aufgaben und Kompetenzen des Vorstandes:</p>
            <p>
              Der Vorstand erstellt das Jahresbudget, stellt die Spendenzuflüsse
              sicher und entscheidet über die Vergabe der Mittel, welche den
              Betrag von CHF 1‘000.00 übersteigen. Er tagt mindestens einmal
              jährlich. Über die Beschlüsse wird ein Protokoll geführt. Der
              Vorstand leitet alljährlich die Vermögensrechnung mit einem
              Jahresbericht an die Interessenten weiter.
            </p>
            <p>
              Der Vorstand verfügt über alle Kompetenzen, die nicht von Gesetzes
              wegen oder gemäss Statuten einem anderen Organ übertragen sind.
            </p>
            <p>
              Im Vorstand sind folgende </p><p></p>Ressorts vertreten:
            

            <p>a) Präsidium</p>
            <p>b) Vizepräsidium</p>

            <p>c) Geschäftsführung Ämterkumulation ist möglich.</p>

            <p>
              Die Geschäftsführung prüft die Unterstützungsgesuche und kann bis
              zu einem Betrag von CHF 1‘000.00 pro Gesuch selbständig
              entscheiden. Jährlich erstattet sie dem Vorstand einen Bericht
              über die Vergabungen und die geplanten Mittelzuflüsse. Sie ist für
              die ordentliche Buchführung und die allgemeine Administration
              verantwortlich.
            </p>
            <p>
              Jedes Vorstandsmitglied kann unter Angabe der Gründe die
              Einberufung einer Sitzung verlangen.
            </p>
            <p>
              Sofern kein Vorstandsmitglied mündliche Beratung verlangt, ist die
              Beschlussfassung auf dem Zirkularweg (auch E-Mail) gültig.
            </p>
            <p>
              Der Vorstand ist grundsätzlich ehrenamtlich tätig, er hat Anrecht
              auf Vergütung der effektiven Spesen.
            </p>

            <p>
              <span class="font-bold">10. Zeichnungsberechtigung</span> Der Vorstand
              legt die Zeichnungsberechtigung der Vorstandsmitglieder fest.
            </p>

            <p>
              <span class="font-bold">11. Haftung</span> Für die Schulden des Vereins
              haftet nur das Vereinsvermögen. Eine persönliche Haftung der Mitglieder
              ist ausgeschlossen.
            </p>

            <p>
              <span class="font-bold">12. Auflösung des Vereins</span> Die Auflösung
              des Vereins kann durch Beschluss einer ordentlichen oder ausserordentlichen
              Mitgliederversammlung beschlossen und mit dem Stimmenmehr von 2/3 Mehrheit
              der anwesenden Mitglieder aufgelöst werden.
            </p>

            <p>
              Der Verein geht ohne Beschlussfassung durch die Mitgliedersammlung
              unter mit dem Tod Rainer Mücks. Das Vereinsvermögen ist im Sinne
              des Vereinszwecks zu verwenden.
            </p>

            <p>
              Ein allfälliger Aktivenüberschuss fällt an eine steuerbefreite
              Organisation mit Sitz in der Schweiz, welche den gleichen oder
              einen ähnlichen Zweck verfolgt, oder an das Gemeinwesen. Die
              Verteilung des Vereinsvermögens unter den Mitgliedern, Gründern
              oder dessen Erben oder Drittspendern ist ausgeschlossen.
            </p>

            <p>
              <span class="font-bold">13. Inkraftreten</span> Diese Statuten wurden
              an der Gründungsversammlung vom 02.07.2021 angenommen und sind mit
              diesem Datum in Kraft getreten.
            </p>
          
        </div>
      </article>
    </section>
  ` })}
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/about.astro", void 0);

const $$file = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Sectionhead as $, Newsletter as N, about as a };
