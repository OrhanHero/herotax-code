/* ── CONTENT-DATEN (CMS-ready: Arrays → API-Fetch) ─────────────── */

export const AI_ARTICLES = [
  {
    title: "KI-gestützte Belegverarbeitung: Vom Schuhkarton zum Echtzeit-Reporting",
    excerpt:
      "OCR- und Kategorisierungs-Modelle nehmen der Buchhaltung einen Großteil der Handarbeit ab. Welche Workflows sich für Solo-Gründer und Berliner KMUs lohnen — und wo menschliche Kontrolle Pflicht bleibt.",
    read: "7 Min",
    date: "11. August 2026",
    source: { label: "IHK Berlin — Digitalisierung", href: "https://www.ihk.de/berlin" },
    tag: "Automatisierung",
  },
  {
    title: "Risikomanagementsysteme im Finanzamt: So prüft der Algorithmus deine Erklärung",
    excerpt:
      "Nach § 88 Abs. 5 AO dürfen Finanzämter automationsgestützte Systeme zur Fallauswahl einsetzen. Was das für Abgabe-Qualität, Vorsteuer-Abzug und Plausibilität deiner Zahlen bedeutet.",
    read: "5 Min",
    date: "10. August 2026",
    source: { label: "§ 88 Abs. 5 AO — Gesetze im Internet", href: "https://www.gesetze-im-internet.de/ao_1977/__88.html" },
    tag: "Steuerverwaltung",
  },
  {
    title: "Prozess-Intelligence: Monatsabschluss in 2 Stunden statt 2 Tagen",
    excerpt:
      "Ein wiederholbarer Ablauf aus Bank-Sync, GoBD-konformer Ablage und KI-Vorkontierung. Der Effizienz-Blueprint zum Nachbauen für moderne Gründer:innen.",
    read: "6 Min",
    date: "08. August 2026",
    source: { label: "Bundesfinanzministerium — GoBD", href: "https://www.bundesfinanzministerium.de" },
    tag: "Effizienz",
  },
];

/** KI-Sicherheit & Regulierung — offizielle Meldungen des BMDS
    (Bundesministerium für Digitales und Staatsmodernisierung). */
export const BMDS_ITEMS = [
  {
    title: "KI-Marktüberwachung: EU AI Act Implementierungsleitfaden für Finanz-Tools verabschiedet",
    text: "Das Bundesministerium für Digitales und Staatsmodernisierung (BMDS) stellt den aktualisierten Prüfleitfaden für KI-Anwendungen in Finanz- und Steuerverwaltungssystemen vor.",
    date: "11. August 2026",
    source: { label: "BMDS · Pressemitteilung", href: "https://bmds.bund.de/aktuelles" },
  },
  {
    title: "Agentic AI Hub: 2. Bewerbungsrunde für autonome Buchhaltungs- & Verwaltungssysteme gestartet",
    text: "Kommunen und Start-ups erproben autonome KI-Agenten in der öffentlichen Verwaltung. Ein wichtiger Indikator für den Mittelstand: Was der Bund testet, wird bald Prozess-Standard.",
    date: "10. August 2026",
    source: { label: "BMDS · Pressemitteilung", href: "https://bmds.bund.de/aktuelles" },
  },
  {
    title: "Offene Daten stärken: Freigabe neuer Finanz- & Wirtschaftsregisterstellen",
    text: "Der Bund startet die Konsultationsphase für die Erweiterung der Open-Data-Strategie — relevant für alle Entwickler und Gründer, die öffentliche Datenquellen in Finanz- & Wirtschaftstools einbinden.",
    date: "08. August 2026",
    source: { label: "BMDS · Pressemitteilung", href: "https://bmds.bund.de/aktuelles" },
  },
  {
    title: "Digitale Wehrhaftigkeit des Staates: CyberGovSecure Zertifikate verifiziert",
    text: "Mit dem Programm „CyberGovSecure“ baut der Bund die Cybersicherheit der Verwaltung aus — das setzt neue Maßstäbe für IT-Sicherheitsanforderungen an IT-Dienstleister und FinTechs.",
    date: "05. August 2026",
    source: { label: "BMDS · Pressemitteilung", href: "https://bmds.bund.de/aktuelles" },
  },
];

/** IT- & KI-Sicherheit — Meldungen und Angebote des BSI
    (Bundesamt für Sicherheit in der Informationstechnik). */
export const BSI_ITEMS = [
  {
    title: "BSI Mindeststandard 2026: Sicherheitsanforderungen für KI-Belegverarbeitung & Cloud-ERP",
    text: "Das BSI veröffentlicht aktualisierte Mindeststandards für Finanzdatenverarbeitung und automatisierten Belegaustausch in Unternehmen.",
    date: "11. August 2026",
    source: { label: "BSI · Pressemitteilung", href: "https://www.bsi.bund.de/" },
  },
  {
    title: "Cyber-Resilienz im Mittelstand: Schutzpakete für Buchhaltung & ERP freigegeben",
    text: "Das BSI treibt Sicherheitsstandards für vernetzte Unternehmensinfrastruktur voran — wichtig für Unternehmen mit automatisierter Schnittstellen-Anbindung.",
    date: "10. August 2026",
    source: { label: "BSI · Pressemitteilung", href: "https://www.bsi.bund.de/" },
  },
  {
    title: "Sicherheitsanalyse FIDO2 & Windows Hello for Business in der Finanzbuchhaltung",
    text: "Das BSI veröffentlicht eine detaillierte Sicherheitsanalyse der biometrischen Anmeldung — hohe Praxisrelevanz für die Absicherung von Firmengeräten ohne Passwort-Risiken.",
    date: "08. August 2026",
    source: { label: "BSI · Pressemitteilung", href: "https://www.bsi.bund.de/" },
  },
  {
    title: "BSI Risikobewertung: Sichere Integration externer LLM-Modelle in Unternehmens-Software",
    text: "Empfehlungen zur Kapselung sensibler Finanz- und Personaldaten bei der Nutzung von KI-Sprachmodellen.",
    date: "04. August 2026",
    source: { label: "BSI · Pressemitteilung", href: "https://www.bsi.bund.de/" },
  },
];

/** DE-Ökosystem · DeutschlandGPT */
export const DEUTSCHLANDGPT_LINKS = [
  {
    id: "home",
    title: "DeutschlandGPT",
    desc: "DSGVO-konforme KI-Plattform für den Mittelstand — ChatGPT, Claude & Gemini, gehostet in Deutschland.",
    href: "https://www.deutschlandgpt.de/",
  },
  {
    id: "blog",
    title: "Blog",
    desc: "KI-Wissen für den deutschen Mittelstand — praktische Guides und Insights zur sicheren KI-Einführung.",
    href: "https://www.deutschlandgpt.de/blog",
  },
  {
    id: "case-studies",
    title: "Case Studies",
    desc: "Erfolgreiche KI-Implementierungen deutscher Unternehmen und Organisationen im Überblick.",
    href: "https://www.deutschlandgpt.de/case-studies",
  },
  {
    id: "ressourcen",
    title: "Ressourcen",
    desc: "Kostenlose Materialien und Leitfäden zur strukturierten KI-Einführung im Unternehmen.",
    href: "https://www.deutschlandgpt.de/ressourcen",
  },
  {
    id: "vergleich",
    title: "Vergleich",
    desc: "Fairer Vergleich mit ChatGPT, Copilot, Langdock und weiteren KI-Lösungen.",
    href: "https://www.deutschlandgpt.de/vergleich",
  },
  {
    id: "ki-starter-check",
    title: "KI-Starter-Check",
    desc: "In 2 Minuten zum persönlichen KI-Starter-Plan — kostenlos und unverbindlich.",
    href: "https://www.deutschlandgpt.de/ki-starter-check",
  },
];

export const ARTICLES = [
  {
    cat: "Berlin Fokus",
    title: "Berliner Wahlen 2026: Wahl zum Abgeordnetenhaus (AGH) & den 12 Bezirksverordnetenversammlungen (BVV)",
    excerpt:
      "Am Sonntag, 20. September 2026, wählen die Berlinerinnen und Berliner das Abgeordnetenhaus von Berlin (AGH) sowie die 12 Bezirksverordnetenversammlungen (BVV). Alle offiziellen Termine, Wahlberechtigungen ab 16 Jahren und Briefwahl-Infos im Überblick.",
    read: "5 Min",
    date: "11. August 2026",
    source: { label: "Landeswahlleiterin Berlin · Offizielle Wahlseite 2026", href: "https://www.berlin.de/wahlen/wahlen/berliner-wahlen-2026/" },
    featured: true,
    highlight: {
      value: "20.09.2026",
      compare: "Wahl zum AGH & BVV",
      label: "Offizieller Wahltag in ganz Berlin für das Abgeordnetenhaus (AGH) und alle 12 Bezirke (BVV).",
    },
  },
  {
    cat: "Berlin Fokus",
    title: "Amtliche Pressemitteilungen 2026: Landeswahlleiterin informiert über Vorbereitungen & Fristen",
    excerpt:
      "Die Landeswahlleiterin für Berlin verabschiedet laufend offizielle Pressemitteilungen zu Wahlkreisgrenzen, Stimmzettel-Druck, Barrierefreiheit und Wahllokal-Einteilungen für den 20. September 2026.",
    read: "4 Min",
    date: "11. August 2026",
    source: { label: "Landeswahlleiterin Berlin · Pressemitteilungen 2026", href: "https://www.berlin.de/wahlen/pressemitteilungen/2026/" },
  },
  {
    cat: "Berlin Fokus",
    title: "Wahl-O-Mat Berlin 2026: Veröffentlichung am 24. August gegen Mittag auf wahl-o-mat.de",
    excerpt:
      "Der Wahl-O-Mat der Bundeszentrale für politische Bildung (bpb) zur Wahl zum Abgeordnetenhaus von Berlin 2026 wird am 24. August gegen Mittag online freigeschaltet. Alle Standpunkte und Parteivergleiche vor dem 20. September.",
    read: "3 Min",
    date: "11. August 2026",
    source: { label: "bpb · Bundeszentrale für politische Bildung (wahl-o-mat.de)", href: "https://www.bpb.de/themen/wahl-o-mat/" },
  },
  {
    cat: "Bund & Steuer",
    title: "BMF-Update: Neue BMF-Schreiben zur E-Rechnungspflicht & GoBD-Compliance verabschiedet",
    excerpt: "Das Bundesfinanzministerium konkretisiert die Übergangsregeln zur E-Rechnungspflicht ab 2027 und veröffentlicht neue Pauschalbeträge für Geschäftsreisen.",
    read: "4 Min",
    highlight: {
      value: "2027",
      compare: "E-Rechnungspflicht",
      label: "Ab diesem Jahr greift die E-Rechnungspflicht verbindlich für alle B2B-Umsätze.",
    },
    date: "11. August 2026",
    source: { label: "Bundesfinanzministerium", href: "https://www.bundesfinanzministerium.de" },
  },
  {
    cat: "Berlin Fokus",
    title: "Erstwahlrecht ab 16 Jahren: Wer bei den Berliner Wahlen 2026 wahlberechtigt ist",
    excerpt:
      "Wahlberechtigt für das Abgeordnetenhaus von Berlin sind alle Deutschen ab 16 Jahren mit Hauptwohnsitz in Berlin seit mind. 3 Monaten. Bei den BVV-Wahlen dürfen auch EU-Bürgerinnen und EU-Bürger ab 16 Jahren abstimmen.",
    read: "3 Min",
    date: "11. August 2026",
    source: { label: "Landeswahlleiterin Berlin · Allgemeine Informationen", href: "https://www.berlin.de/wahlen/wahlen/berliner-wahlen-2026/allgemeine-informationen/artikel.1578239.php" },
  },
  {
    cat: "Berlin Fokus",
    title: "Briefwahl 2026: Online-Beantragung per QR-Code & Ausgaben der Wahlunterlagen",
    excerpt:
      "Wahlbenachrichtigungen werden bis Mitte August 2026 zugestellt. Die Briefwahl kann direkt online per QR-Code oder postalisch ohne Angabe von Gründen beantragt werden.",
    read: "4 Min",
    date: "10. August 2026",
    source: { label: "Landeswahlleiterin Berlin · Briefwahl 2026", href: "https://www.berlin.de/wahlen/wahlen/berliner-wahlen-2026/briefwahl/artikel.1700053.php" },
  },
  {
    cat: "Bund & Steuer",
    title: "Umsatzsteuer-Voranmeldung: Dauerfristverlängerung & ELSTER-Vereinfachungen 2026",
    excerpt: "Ein Formular, 30 Tage mehr Liquiditäts- und Fristenspielraum. Warum viele Gründer diesen Hebel noch immer ungenutzt lassen.",
    read: "3 Min",
    date: "10. August 2026",
    source: { label: "ELSTER", href: "https://www.elster.de" },
  },
  {
    cat: "Berlin Fokus",
    title: "Wahlrecht für EU-Unionsbürger: Stimmabgabe für die Bezirksverordnetenversammlung (BVV)",
    excerpt:
      "Staatsangehörige anderer EU-Mitgliedstaaten, die seit mindestens drei Monaten in Berlin gemeldet sind, sind für die Bezirksverordnetenversammlung (BVV) in ihrem Bezirk wahlberechtigt.",
    read: "3 Min",
    date: "09. August 2026",
    source: { label: "Landeswahlleiterin Berlin · EU-Unionsbürger", href: "https://www.berlin.de/wahlen/wahlen/berliner-wahlen-2026/unionsbuerger/artikel.1600483.php" },
  },
  {
    cat: "Berlin Fokus",
    title: "Geoportal Berlin & Geoportal.de: Neue digitale Geodaten, Open Data & 3D-Stadtmodelle online",
    excerpt:
      "Die Senatsverwaltung für Stadtentwicklung, Bauen und Wohnen stellt über das Geoportal Berlin und Geoportal.de hochauflösende 3D-Stadtmodelle, Bau- & Flächennutzungsdaten sowie die aktuellen Wahlkreisgrenzen 2026 als Open Data bereit.",
    read: "4 Min",
    date: "11. August 2026",
    source: { label: "Senatsverwaltung für Stadtentwicklung Berlin · geoportal.de", href: "https://www.berlin.de/sen/stadt/stadtdaten/geodaten-berlin/aktuelles-newsletter/" },
  },
  {
    cat: "Berlin Fokus",
    title: "Rund 25.000 Wahlhelfende gesucht: Anmeldung & steuerfreies Erfrischungsgeld",
    excerpt:
      "Das Land Berlin sucht rund 25.000 ehrenamtliche Wahlhelfende für die Wahllokale und Briefwahlbezirke am 20. September 2026. Für den Einsatz gibt es eine Aufwandsentschädigung.",
    read: "4 Min",
    date: "08. August 2026",
    source: { label: "Landeswahlleiterin Berlin · Wahlhelfende", href: "https://www.berlin.de/wahlen/organisation/wahlhelfende/" },
  },
  {
    cat: "Bund & Steuer",
    title: "Kleinunternehmerregelung § 19 UStG: Neue Schwellenwerte für EU-weite Befreiung",
    excerpt: "Die neue Kleinunternehmerregelung ermöglicht grenzüberschreitende Befreiungen bis 100.000 € EU-Umsatz. Wann sich die Regelung lohnt — und wann die Regelbesteuerung besser ist.",
    read: "4 Min",
    date: "07. August 2026",
    source: { label: "Gesetze im Internet (§ 19 UStG)", href: "https://www.gesetze-im-internet.de/ustg_1980/__19.html" },
  },
];
