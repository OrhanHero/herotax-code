import { useEffect } from "react";
import { T, fontDisplay, fontMono } from "../../config/tokens";
import { CONFIG } from "../../config/config";

/* ── Impressum ──────────────────────────────────────────────────────
   Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz, vormals § 5 TMG)
   sowie § 18 Abs. 2 MStV (redaktionell verantwortliche Person für
   journalistisch-redaktionelle Inhalte, hier: News-Hub).
   ────────────────────────────────────────────────────────────────── */

const H2 = ({ children }) => (
  <h2
    className="text-2xl sm:text-3xl font-black tracking-tight mt-14 mb-5 first:mt-0"
    style={{ ...fontDisplay, color: T.text }}
  >
    {children}
  </h2>
);

const P = ({ children }) => (
  <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: T.muted }}>
    {children}
  </p>
);

const A = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="underline underline-offset-2 hover:opacity-70 break-words"
    style={{ color: T.blue }}
  >
    {children}
  </a>
);

export default function ImpressumPage() {
  useEffect(() => {
    document.title = "Impressum · HERO Tax";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <a
        href="/"
        className="inline-flex items-center gap-1.5 text-xs mb-10 hover:underline underline-offset-4"
        style={{ ...fontMono, color: T.faint }}
      >
        ← Zurück zur Startseite
      </a>

      <div className="max-w-3xl">
        <p className="text-xs tracking-widest uppercase mb-3" style={{ ...fontMono, color: T.blue }}>
          Rechtliches
        </p>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-12" style={{ ...fontDisplay, color: T.text }}>
          Impressum
        </h1>

        <H2>Angaben gemäß § 5 DDG</H2>
        <div className="rounded-2xl p-5 mb-4" style={{ backgroundColor: T.wash, border: `1px solid ${T.lineSoft}` }}>
          <p className="text-sm leading-relaxed" style={{ color: T.text }}>
            Orhan Kahraman
            <br />
            Weichselstr. 41
            <br />
            12045 Berlin
          </p>
        </div>

        <H2>Kontakt</H2>
        <P>
          Telefon: <A href={`tel:${CONFIG.contactPhone}`}>{CONFIG.contactPhone}</A>
          <br />
          E-Mail: <A href={`mailto:${CONFIG.contactEmail}`}>{CONFIG.contactEmail}</A>
        </P>

        <H2>Redaktionell verantwortlich</H2>
        <P>
          Verantwortlich für den redaktionellen Inhalt gemäß § 18 Abs. 2 Medienstaatsvertrag (MStV):
        </P>
        <div className="rounded-2xl p-5 mb-4" style={{ backgroundColor: T.wash, border: `1px solid ${T.lineSoft}` }}>
          <p className="text-sm leading-relaxed" style={{ color: T.text }}>
            Orhan Kahraman
            <br />
            Weichselstr. 41
            <br />
            12045 Berlin
          </p>
        </div>

        <H2>Haftung für Inhalte</H2>
        <P>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den
          allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </P>
        <P>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
          bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
          einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
          wir diese Inhalte umgehend entfernen.
        </P>

        <H2>Haftung für Links</H2>
        <P>
          Unser Angebot enthält Links zu externen Websites Dritter (u. a. offizielle Quellen wie BMF, BMDS, BSI,
          BfDI, IHK Berlin), auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
          Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
          Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
          Verlinkung nicht erkennbar.
        </P>
        <P>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
          Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </P>

        <H2>Urheberrecht</H2>
        <P>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </P>

        <H2>Verbraucherstreitbeilegung / Alternative Streitbeilegung</H2>
        <P>
          Die Europäische Kommission stellt eine zentrale Anlaufstelle für Informationen zur Verbraucherstreitbeilegung
          in der EU bereit:{" "}
          <A href="https://europa.eu">europa.eu</A>. Unsere E-Mail-Adresse
          finden Sie oben im Impressum.
        </P>
        <P>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </P>

        <H2>Hinweis nach § 5 StBerG</H2>
        <P>
          Die redaktionellen Inhalte dieser Website (News, Erklärstücke, Rechner, Guides) sind allgemeine,
          unverbindliche Informationen und ersetzen keine individuelle Steuerberatung im Einzelfall gemäß
          Steuerberatungsgesetz. Für eine verbindliche Beratung wenden Sie sich an eine Steuerberaterin oder einen
          Steuerberater.
        </P>

        <P>
          <em>
            Details zur Verarbeitung personenbezogener Daten finden Sie in unserer{" "}
            <a href="/datenschutz" className="underline underline-offset-2 hover:opacity-70" style={{ color: T.blue }}>
              Datenschutzerklärung
            </a>
            .
          </em>
        </P>
      </div>
    </div>
  );
}
