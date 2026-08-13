/* ── CONTENT-DATEN (CMS-ready: Arrays → API-Fetch) ─────────────────
   Kuratierter Fallback-Stand: 13. August 2026.
   Jede Meldung hat eine Primärquelle. Beim Aktualisieren gilt: erst
   die Quelle prüfen, dann Datum und Text anpassen — nie umgekehrt. */

export const AI_ARTICLES = [
  {
    title: "Transparenzpflicht ist scharf: KI-Inhalte müssen seit dem 2. August gekennzeichnet sein",
    excerpt:
      "Art. 50 der KI-Verordnung gilt seit dem 02.08.2026. Chatbots müssen sich als Maschine zu erkennen geben, KI-generierte Texte, Bilder und Videos brauchen eine Kennzeichnung. Was das für Webseite, Newsletter und Kundenservice konkret heißt.",
    read: "6 Min",
    date: "13. August 2026",
    source: {
      label: "Verordnung (EU) 2024/1689, Art. 50 — EUR-Lex",
      href: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R1689",
    },
    tag: "KI-Regulierung",
  },
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
    date: "09. August 2026",
    source: { label: "§ 88 Abs. 5 AO — Gesetze im Internet", href: "https://www.gesetze-im-internet.de/ao_1977/__88.html" },
    tag: "Steuerverwaltung",
  },
];

/** KI-Sicherheit & Regulierung — offizielle Meldungen des BMDS
    (Bundesministerium für Digitales und Staatsmodernisierung). */
export const BMDS_ITEMS = [
  {
    title: "Neues KI-Gesetz in Kraft: Bundesnetzagentur wird zentrale KI-Marktüberwachungsbehörde",
    text: "Das Durchführungsgesetz zur KI-Verordnung (KI-MIG) ist am 29. Juli 2026 in Kraft getreten. Statt einer neuen Behörde bündelt der Bund die Aufsicht bei der Bundesnetzagentur — samt KI-Service-Desk als niedrigschwelliger Anlaufstelle für KMU und Start-ups sowie einem Reallabor für Tests im rechtssicheren Rahmen.",
    date: "29. Juli 2026",
    source: { label: "BMDS · Pressemitteilung", href: "https://bmds.bund.de/aktuelles/pressemitteilungen/detail/neues-ki-gesetz-tritt-in-kraft" },
  },
  {
    title: "KI-Marktplatz MaKI gestartet: bundesweiter Überblick über KI-Systeme der Verwaltung",
    text: "Seit dem 17. Juni 2026 bündelt der „Marktplatz der KI-Möglichkeiten“ die KI-Anwendungen von Bund, Ländern und Kommunen an einer Stelle. Entwickelt von BMDS, IT-Planungsrat und Deutschem Landkreistag — ein Transparenzregister, das zeigt, welche Verfahren KI-gestützt laufen.",
    date: "17. Juni 2026",
    source: { label: "BMDS · MaKI (kimarktplatz.bund.de)", href: "https://www.kimarktplatz.bund.de/" },
  },
  {
    title: "Agentic AI Hub: 18 Pilotprojekte bringen KI-Agenten in die Verwaltung",
    text: "Der Bund erprobt mit 18 ausgewählten Pilotprojekten autonome KI-Agenten in Behörden — Berliner Bezirke sind dabei. Ein Indikator für den Mittelstand: Was der Bund testet, wird mittelfristig Prozess-Standard an der Schnittstelle zur Verwaltung.",
    date: "April 2026",
    source: { label: "BMDS · Künstliche Intelligenz", href: "https://bmds.bund.de/themen/kuenstliche-intelligenz" },
  },
  {
    title: "SPARK: KI-Module für Genehmigungsverfahren als Open Source veröffentlicht",
    text: "Inhaltsextraktion, formale Vollständigkeitsprüfung und Plausibilisierung — die ersten SPARK-Module sind seit dem 1. April 2026 offen verfügbar. Sie sollen Planungs- und Genehmigungsverfahren beschleunigen und sind für alle nachnutzbar.",
    date: "01. April 2026",
    source: { label: "BMDS · Pressemitteilung", href: "https://bmds.bund.de/aktuelles/pressemitteilungen/detail/ki-basierte-open-source-module-fuer-die-verwaltung" },
  },
];

/** IT- & KI-Sicherheit — Meldungen und Angebote des BSI
    (Bundesamt für Sicherheit in der Informationstechnik). */
export const BSI_ITEMS = [
  {
    title: "Prüfkatalog für vertrauenswürdige KI: Community Draft des A5 — Kommentierung bis 31. August",
    text: "Mit der „AI Audit and Assurance Assessment Architecture“ (A5) legt das BSI eine modulare Prüfarchitektur für KI-Systeme vor: Robustheit, Erklärbarkeit, Leistungsfähigkeit, menschliche Aufsicht, Bias-Vermeidung und Cybersicherheit. Anmerkungen nimmt das BSI noch bis zum 31. August 2026 entgegen.",
    date: "06. Juli 2026",
    source: { label: "BSI · Pressemitteilung", href: "https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260706_KI_A5-Community-Draft.html" },
  },
  {
    title: "BSI-Magazin 2026/01: NIS-2 und BSI-Gesetz stärken die Cybersicherheit in Unternehmen",
    text: "Das BSI-Magazin ordnet ein, was das novellierte BSI-Gesetz und die NIS-2-Umsetzung für Unternehmen bedeuten — von Meldepflichten bis zur Verantwortung der Geschäftsleitung.",
    date: "11. Juni 2026",
    source: { label: "BSI · Meldung", href: "https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/2026/BSI-Magazin_NIS-2_BSIG_260611.html" },
  },
  {
    title: "NIS-2: Bin ich betroffen? Betroffenheitsprüfung & Pflichten im Überblick",
    text: "Das BSI führt regulierte Unternehmen durch Registrierung, Melde- und Nachweispflichten. Auch Dienstleister von Buchhaltung, ERP und IT prüfen hier, ob sie in den Anwendungsbereich fallen.",
    date: "Laufend aktualisiert",
    source: { label: "BSI · NIS-2-regulierte Unternehmen", href: "https://www.bsi.bund.de/DE/Themen/Regulierte-Wirtschaft/NIS-2-regulierte-Unternehmen/nis-2-regulierte-unternehmen_node.html" },
  },
  {
    title: "Lage der Cybernation: Monatsbericht zur aktuellen Cyber-Sicherheitslage",
    text: "Monatliche Einordnung von Bedrohungen, Angriffsflächen und Schadwirkung — die schnellste Orientierung, ob eine Welle gerade auch kleine Betriebe trifft.",
    date: "Laufend aktualisiert",
    source: { label: "BSI · Monatsbericht Lage der Cybernation", href: "https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Cyber-Sicherheitslage/Lageberichte/Monatsbericht_Lage-Cybernation/Monatsberichte_Lage_node.html" },
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
    date: "13. August 2026",
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
    title: "Briefwahl läuft seit dem 10. August: Antrag online per QR-Code, Frist bis 18. September, 15 Uhr",
    excerpt:
      "Die Briefwahl zur Wahl am 20. September 2026 ist seit dem 10. August möglich — online per QR-Code der Wahlbenachrichtigung oder postalisch, ohne Angabe von Gründen. Anträge nimmt das Bezirkswahlamt bis Freitag, 18. September 2026, 15:00 Uhr an; die ausgefüllten Unterlagen müssen bis Sonntag, 20. September 2026, 18:00 Uhr vorliegen.",
    read: "4 Min",
    date: "10. August 2026",
    source: { label: "Landeswahlleiterin Berlin · Start der Briefwahl", href: "https://www.berlin.de/wahlen/pressemitteilungen/2026/pressemitteilung.1701223.php" },
    highlight: {
      value: "18.09.2026",
      compare: "15:00 Uhr · Antragsschluss",
      label: "Letzter Termin für den Antrag auf Briefwahlunterlagen beim Bezirkswahlamt.",
    },
  },
  {
    cat: "Berlin Fokus",
    title: "2,4 Millionen Wahlbenachrichtigungen: Zustellung bis spätestens 30. August 2026",
    excerpt:
      "Seit dem 10. August werden die Wahlbenachrichtigungen gedruckt, kuvertiert und versandt. Bis spätestens 30. August 2026 sollen rund 2,4 Millionen Sendungen zugestellt sein — sie enthalten die Benachrichtigung für AGH und BVV sowie das zuständige Wahllokal.",
    read: "3 Min",
    date: "11. August 2026",
    source: { label: "Landeswahlleiterin Berlin · Pressemitteilungen 2026", href: "https://www.berlin.de/wahlen/pressemitteilungen/2026/" },
  },
  {
    cat: "Bund & Steuer",
    title: "E-Rechnungspflicht: Übergangsfrist endet am 31.12.2026 — ab 2027 wird es für viele ernst",
    excerpt:
      "Wer 2026 mehr als 800.000 € Vorjahresumsatz hatte, muss B2B-Rechnungen ab dem 01.01.2027 im strukturierten Format (XRechnung / ZUGFeRD) ausstellen. Das zweite BMF-Schreiben vom 15.10.2025 hat dazu die Validierungsanforderungen konkretisiert. Ab 2028 gilt die Pflicht praktisch für alle.",
    read: "5 Min",
    highlight: {
      value: "01.01.2027",
      compare: "> 800.000 € Vorjahresumsatz",
      label: "Ab diesem Stichtag müssen betroffene Unternehmen B2B-Rechnungen strukturiert ausstellen.",
    },
    date: "13. August 2026",
    source: { label: "Bundesfinanzministerium · BMF-Schreiben Umsatzsteuer", href: "https://www.bundesfinanzministerium.de/Web/DE/Themen/Steuern/Steuerarten/Umsatzsteuer/BMF_Schreiben_Allgemeines/bmf_schreiben_allgemeines.html" },
  },
  {
    cat: "Bund & Steuer",
    title: "KI-Aufsicht in Deutschland steht: Bundesnetzagentur überwacht seit 29. Juli den KI-Markt",
    excerpt:
      "Das KI-Marktüberwachungs- und Innovationsförderungsgesetz (KI-MIG) ist in Kraft. Zentrale Aufsichtsbehörde ist die Bundesnetzagentur — mit KI-Service-Desk und Reallabor speziell für KMU und Start-ups. Wer KI in Buchhaltung, Recruiting oder Kundenservice einsetzt, hat damit einen konkreten Ansprechpartner.",
    read: "4 Min",
    date: "12. August 2026",
    source: { label: "BMDS · Gesetz zur Durchführung der KI-Verordnung", href: "https://bmds.bund.de/service/gesetzgebungsverfahren/gesetz-zur-durchfuehrung-der-ki-verordnung" },
  },
  {
    cat: "Bund & Steuer",
    title: "Digital Omnibus: Hochrisiko-Pflichten des EU AI Act auf Dezember 2027 verschoben",
    excerpt:
      "Die Verordnung (EU) 2026/1744 ist am 27. Juli 2026 in Kraft getreten. Die Pflichten für Hochrisiko-KI nach Anhang III greifen erst ab dem 02.12.2027, für KI in regulierten Produkten ab dem 02.08.2028. Unverändert gilt seit dem 02.08.2026: die Transparenzpflicht nach Art. 50.",
    read: "4 Min",
    date: "11. August 2026",
    source: { label: "EUR-Lex · Verordnung (EU) 2024/1689 (KI-VO)", href: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R1689" },
  },
  {
    cat: "Berlin Fokus",
    title: "Wahl-O-Mat Berlin 2026: Veröffentlichung am 24. August gegen Mittag auf wahl-o-mat.de",
    excerpt:
      "Der Wahl-O-Mat der Bundeszentrale für politische Bildung (bpb) zur Wahl zum Abgeordnetenhaus von Berlin 2026 wird am 24. August gegen Mittag online freigeschaltet. Alle Standpunkte und Parteivergleiche vor dem 20. September.",
    read: "3 Min",
    date: "13. August 2026",
    source: { label: "bpb · Bundeszentrale für politische Bildung (wahl-o-mat.de)", href: "https://www.bpb.de/themen/wahl-o-mat/" },
  },
  {
    cat: "Berlin Fokus",
    title: "Wahlvorschläge zugelassen: 21 Parteien treten mit Landes- oder Bezirkslisten an",
    excerpt:
      "Die Frist zur Einreichung der Wahlvorschläge endete am 14. Juli 2026 um 18 Uhr. Über die Zulassung entschieden die Bezirkswahlausschüsse am 22. Juli und der Landeswahlausschuss am 24. Juli 2026. Insgesamt reichten 21 Parteien Landes- oder Bezirkslisten ein.",
    read: "3 Min",
    date: "24. Juli 2026",
    source: { label: "Landeswahlleiterin Berlin · Wahlvorschläge", href: "https://www.berlin.de/wahlen/wahlen/berliner-wahlen-2026/wahlvorschlaege/artikel.1600254.php" },
  },
  {
    cat: "Berlin Fokus",
    title: "Erstwahlrecht ab 16 Jahren: Wer bei den Berliner Wahlen 2026 wahlberechtigt ist",
    excerpt:
      "Wahlberechtigt für das Abgeordnetenhaus von Berlin sind alle Deutschen ab 16 Jahren mit Hauptwohnsitz in Berlin seit mind. 3 Monaten. Bei den BVV-Wahlen dürfen auch EU-Bürgerinnen und EU-Bürger ab 16 Jahren abstimmen.",
    read: "3 Min",
    date: "12. August 2026",
    source: { label: "Landeswahlleiterin Berlin · Allgemeine Informationen", href: "https://www.berlin.de/wahlen/wahlen/berliner-wahlen-2026/allgemeine-informationen/artikel.1578239.php" },
  },
  {
    cat: "Bund & Steuer",
    title: "Steuerentlastungen 2026 in der Praxis: 7 % Gastro-Umsatzsteuer & 38 Cent Pendlerpauschale",
    excerpt:
      "Seit dem 01.01.2026 gilt für Speisen in der Gastronomie dauerhaft der ermäßigte Steuersatz von 7 % (Getränke bleiben bei 19 %), und die Entfernungspauschale liegt bei 38 Cent ab dem ersten Kilometer. Für Kalkulation, Kassensystem und Reisekostenabrechnung heißt das: Stammdaten prüfen.",
    read: "4 Min",
    date: "10. August 2026",
    source: { label: "Gesetze im Internet (§ 12 UStG)", href: "https://www.gesetze-im-internet.de/ustg_1980/__12.html" },
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
    cat: "Bund & Steuer",
    title: "Umsatzsteuer-Voranmeldung: Dauerfristverlängerung & ELSTER-Vereinfachungen 2026",
    excerpt: "Ein Formular, 30 Tage mehr Liquiditäts- und Fristenspielraum. Warum viele Gründer diesen Hebel noch immer ungenutzt lassen.",
    read: "3 Min",
    date: "08. August 2026",
    source: { label: "ELSTER", href: "https://www.elster.de" },
  },
  {
    cat: "Berlin Fokus",
    title: "Geoportal Berlin & Geoportal.de: Digitale Geodaten, Open Data & Wahlgebiete 2026 online",
    excerpt:
      "Die Senatsverwaltung für Stadtentwicklung, Bauen und Wohnen stellt über das Geoportal Berlin und Geoportal.de 3D-Stadtmodelle, Bau- & Flächennutzungsdaten sowie die Wahlgebietseinteilung 2026 als Open Data bereit.",
    read: "4 Min",
    date: "07. August 2026",
    source: { label: "Senatsverwaltung für Stadtentwicklung Berlin · Geodaten", href: "https://www.berlin.de/sen/stadt/stadtdaten/geodaten-berlin/aktuelles-newsletter/" },
  },
  {
    cat: "Berlin Fokus",
    title: "Wahlhelfende gesucht: Anmeldung, Schulung & steuerfreies Erfrischungsgeld",
    excerpt:
      "Für die Wahllokale und Briefwahlbezirke am 20. September 2026 sucht das Land Berlin ehrenamtliche Wahlhelfende. Für den Einsatz gibt es eine Aufwandsentschädigung; die Anmeldung läuft über die Bezirkswahlämter.",
    read: "3 Min",
    date: "06. August 2026",
    source: { label: "Landeswahlleiterin Berlin · Wahlhelfende", href: "https://www.berlin.de/wahlen/organisation/wahlhelfende/" },
  },
  {
    cat: "Bund & Steuer",
    title: "Kleinunternehmerregelung § 19 UStG: Inlands-Schwellen und EU-weite Befreiung",
    excerpt:
      "Im Inland gilt die Regelung bis 25.000 € Vorjahresumsatz und 100.000 € im laufenden Jahr. Über die EU-Kleinunternehmerregelung ist zusätzlich eine grenzüberschreitende Befreiung bis 100.000 € Unionsumsatz möglich. Wann sich das lohnt — und wann die Regelbesteuerung besser ist.",
    read: "4 Min",
    date: "05. August 2026",
    source: { label: "Gesetze im Internet (§ 19 UStG)", href: "https://www.gesetze-im-internet.de/ustg_1980/__19.html" },
  },
];
