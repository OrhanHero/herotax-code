import { useEffect } from "react";
import { T, fontDisplay, fontMono } from "../../config/tokens";
import { CONFIG } from "../../config/config";

/* ── Datenschutzerklärung nach Art. 13/14 DSGVO ──────────────────────── */

const H2 = ({ children }) => (
  <h2
    className="text-2xl sm:text-3xl font-black tracking-tight mt-14 mb-5 first:mt-0"
    style={{ ...fontDisplay, color: T.text }}
  >
    {children}
  </h2>
);

const H3 = ({ children }) => (
  <h3 className="text-lg font-bold mt-9 mb-3" style={{ ...fontDisplay, color: T.text }}>
    {children}
  </h3>
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

/** Für gesetzlich vorgeschriebene Hervorhebungen (Art. 21 DSGVO) */
const Emphasis = ({ children }) => (
  <p
    className="text-xs sm:text-sm leading-relaxed mb-4 uppercase font-semibold rounded-2xl p-5"
    style={{ color: T.text, backgroundColor: T.wash, border: `1px solid ${T.lineSoft}` }}
  >
    {children}
  </p>
);

export default function DatenschutzPage() {
  useEffect(() => {
    document.title = "Datenschutzerklärung · HERO Tax";
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
          Datenschutzerklärung nach Art. 13 / 14 DSGVO
        </h1>

        <H2>1. Datenschutz auf einen Blick</H2>

        <H3>Allgemeine Hinweise</H3>
        <P>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
          passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
          unserer unter diesem Text aufgeführten Datenschutzerklärung.
        </P>

        <H3>Datenerfassung auf dieser Website</H3>
        <p className="font-semibold text-sm mb-2" style={{ color: T.text }}>
          Wer ist verantwortlich für die Datenerfassung auf dieser Website?
        </p>
        <P>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können
          Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
        </P>
        <p className="font-semibold text-sm mb-2" style={{ color: T.text }}>
          Wie erfassen wir Ihre Daten?
        </p>
        <P>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
          Daten handeln, die Sie in ein Kontaktformular eingeben.
        </P>
        <P>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
          IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
          des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
        </P>
        <p className="font-semibold text-sm mb-2" style={{ color: T.text }}>
          Wofür nutzen wir Ihre Daten?
        </p>
        <P>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Sofern
          über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten
          auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.
        </P>
        <p className="font-semibold text-sm mb-2" style={{ color: T.text }}>
          Welche Rechte haben Sie bezüglich Ihrer Daten?
        </p>
        <P>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
          gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
          Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können
          Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
          bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </P>
        <P>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</P>

        <H2>2. Hosting</H2>
        <P>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</P>
        <H3>IONOS</H3>
        <P>
          Anbieter ist die IONOS SE, Elgendorfer Str. 57, 56410 Montabaur (nachfolgend IONOS). Wenn Sie unsere
          Website besuchen, erfasst IONOS verschiedene Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie
          der Datenschutzerklärung von IONOS: <A href="https://www.ionos.de/terms-gtc/terms-privacy">https://www.ionos.de/terms-gtc/terms-privacy</A>.
        </P>
        <P>
          Die Verwendung von IONOS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes
          Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
        </P>

        <H2>3. Allgemeine Hinweise und Pflichtinformationen</H2>

        <H3>Hinweis zur verantwortlichen Stelle</H3>
        <P>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</P>
        <div className="rounded-2xl p-5 mb-4" style={{ backgroundColor: T.wash, border: `1px solid ${T.lineSoft}` }}>
          <p className="text-sm leading-relaxed" style={{ color: T.text }}>
            Orhan Kahraman
            <br />
            Weichselstr. 41
            <br />
            12045 Berlin
            <br />
            Telefon: <A href={`tel:${CONFIG.contactPhone}`}>{CONFIG.contactPhone}</A>
            <br />
            E-Mail: <A href={`mailto:${CONFIG.contactEmail}`}>{CONFIG.contactEmail}</A>
          </p>
        </div>

        <H3>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen (Art. 21 DSGVO)</H3>
        <Emphasis>
          Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie
          jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die
          Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen.
        </Emphasis>

        <H2>4. Lokale Speicherung im Browser</H2>
        <P>
          Diese Website setzt keine Cookies ein. Für einige technische Funktionen speichert die Seite jedoch
          kleine Datenmengen im „Local Storage" Ihres Browsers ab — direkt auf Ihrem Gerät, nicht auf unseren
          Servern.
        </P>

        <H2>5. Analyse-Tools</H2>
        <H3>IONOS WebAnalytics</H3>
        <P>
          Diese Website nutzt die Analysedienste von IONOS WebAnalytics vollständig anonymisiert, ohne Cookies.
        </P>

        <H2>6. Google Fonts (lokales Hosting)</H2>
        <P>
          Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Google Fonts, die lokal auf unseren Servern installiert sind.
        </P>

        <p className="text-xs mt-14 pt-8" style={{ ...fontMono, color: T.faint, borderTop: `1px solid ${T.lineSoft}` }}>
          Datenschutzerklärung der HERO Tax Platform · Stand: August 2026
        </p>
      </div>
    </div>
  );
}
