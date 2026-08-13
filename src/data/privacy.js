import { Cookie, Lock, ShieldCheck, FileText, BookOpen, Accessibility, Baby, GraduationCap, Clapperboard, Building2, FileCheck, Users, Landmark, Gavel, Eye, BookMarked } from "lucide-react";

/** DSGVO-Prinzipien der Plattform (Säule "Datenschutz & Compliance") */
export const PRIVACY_PRINCIPLES = [
  {
    icon: Cookie,
    title: "Keine Tracking-Cookies",
    text: "Reichweitenmessung läuft über Plausible Analytics — cookielos, ohne personenbezogene Profile, Server in der EU. Deshalb braucht die Seite kein Cookie-Banner für Analytics.",
  },
  {
    icon: Lock,
    title: "Datenminimierung",
    text: "Wir erheben nur, was für den Dienst nötig ist. Kein Konto, kein Formular, keine Pflichtangaben, um die Inhalte dieser Seite zu nutzen.",
  },
  {
    icon: ShieldCheck,
    title: "Deine Rechte (Art. 15–21 DSGVO)",
    text: "Auskunft, Berichtigung, Löschung, Datenübertragbarkeit, Widerspruch: Eine formlose E-Mail genügt. Wir antworten innerhalb der gesetzlichen Frist von einem Monat.",
  },
  {
    icon: FileText,
    title: "Transparente Drittdienste",
    text: "Externe Inhalte (Social-Media-Links, eingebundene Behörden-Feeds) sind in der Datenschutzerklärung mit ihrer jeweiligen Rechtsgrundlage aufgeführt.",
  },
];

/** Datenschutz-Radar: Themen der/des BfDI, relevant für Unternehmer */
export const BFDI_ITEMS = [
  {
    title: "Datenschutzkonferenz (DSK): Die gemeinsame Stimme der Aufsichtsbehörden",
    text: "Bund und Länder stimmen ihre Position zum Datenschutz in der Datenschutzkonferenz ab — hier steht, worauf sich die Aufsichtsbehörden zuletzt geeinigt haben.",
    source: { label: "BfDI — Datenschutzkonferenz", href: "https://www.bfdi.bund.de/DE/Fachthemen/Gremienarbeit/Datenschutzkonferenz/datenschutzkonferenz_node.html" },
  },
  {
    title: "Datenbarometer: Wie es um die Datenschutzkompetenz in Deutschland steht",
    text: "Der BfDI erhebt regelmäßig, wie gut Bürger:innen ihre eigenen Datenschutzrechte kennen — ein Hintergrund, der zeigt, wo im Kundenkontakt Aufklärungsbedarf besteht.",
    source: { label: "BfDI — Datenbarometer", href: "https://www.bfdi.bund.de/SharedDocs/Downloads/DE/Themen/Datenbarometer/Hintergrund/Datenbarometer-Hintergrund-Datenschutzkompetenz.html" },
  },
  {
    title: "KI & Datenschutz: Die Handreichung des BfDI",
    text: "Wer Buchhaltung und Reporting mit KI automatisiert, verarbeitet oft personenbezogene Daten. Die Handreichung des BfDI zeigt, worauf es bei automatisierten Prozessen ankommt.",
    source: { label: "BfDI — Handreichung KI", href: "https://www.bfdi.bund.de/SharedDocs/Downloads/DE/DokumenteBfDI/Dokumente-allg/2025/Handreichung-KI.html" },
  },
  {
    title: "Berlin Group: Internationale Standards für Datenschutz in der Praxis",
    text: "Die Berlin Group erarbeitet internationale Arbeitspapiere zu Datenschutz in Technologie und Kommunikation — relevant, wenn dein Unternehmen internationale Cloud-Tools einsetzt.",
    source: { label: "BfDI — Berlin Group", href: "https://www.bfdi.bund.de/DE/Fachthemen/Gremienarbeit/Berlin-Group/Berlin-Group-node.html" },
  },
  {
    title: "Stellungnahme: Digitale Ermittlungsbefugnisse",
    text: "Der BfDI nimmt Stellung zu geplanten digitalen Ermittlungsbefugnissen der Sicherheitsbehörden — wo die Grenze zwischen Strafverfolgung und Datenschutz verläuft.",
    source: { label: "BfDI — Stellungnahme digitale Ermittlungsbefugnisse", href: "https://www.bfdi.bund.de/SharedDocs/Downloads/DE/DokumenteBfDI/Stellungnahmen/2026/Stgn_digitale-Ermittlungsbefugnisse.html?nn=252136" },
  },
];

/** BfDI für Bürger:innen — Themenübersicht mit Kurzinfo, als Karten im DSGVO-Block */
export const BFDI_BUERGER_THEMES = [
  {
    icon: Building2,
    title: "Privatwirtschaft",
    text: "Rechte und Pflichten beim Datenschutz in Unternehmen.",
    href: "https://www.bfdi.bund.de/DE/Buerger/Privatwirtschaft/Privatwirtschaft_node.html",
  },
  {
    icon: Cookie,
    title: "Cookie-Banner",
    text: "Wann ein Cookie-Banner Pflicht ist und wie er rechtskonform aussieht.",
    href: "https://www.bfdi.bund.de/DE/Buerger/Inhalte/Telemedien/Cookie-Banner.html?nn=252136",
  },
  {
    icon: FileCheck,
    title: "Einwilligungsverwaltung",
    text: "Einheitliche Verwaltung von Cookie- und Tracking-Einwilligungen im Web.",
    href: "https://www.bfdi.bund.de/DE/Fachthemen/Themen-Positionen/Einwilligungsverwaltung/Einwilligungsverwaltung_node.html",
  },
  {
    icon: Users,
    title: "Sozialverwaltung",
    text: "Besonderer Schutz für Sozialdaten bei Ämtern und Behörden.",
    href: "https://www.bfdi.bund.de/DE/Buerger/Sozialverwaltung/Sozialverwaltung_node.html",
  },
  {
    icon: Landmark,
    title: "Allgemeine Verwaltung",
    text: "Datenschutz im Verwaltungshandeln von Bundesbehörden.",
    href: "https://www.bfdi.bund.de/DE/Buerger/Allgemeine-Verwaltung/Allgemeine-Verwaltung_node.html",
  },
  {
    icon: Gavel,
    title: "Strafrecht & Sicherheitsrecht",
    text: "Datenschutz bei Strafverfolgung und Sicherheitsbehörden.",
    href: "https://www.bfdi.bund.de/DE/Buerger/Strafrecht-Sicherheitsrecht/Strafrecht-Sicherheitsrecht_node.html",
  },
  {
    icon: Eye,
    title: "Informationsfreiheit",
    text: "Dein Recht auf Zugang zu amtlichen Informationen des Bundes.",
    href: "https://www.bfdi.bund.de/DE/Buerger/Informationsfreiheit/informationsfreiheit_node.html",
  },
  {
    icon: BookMarked,
    title: "Basiswissen",
    text: "Die Grundlagen des Datenschutzrechts kompakt erklärt.",
    href: "https://www.bfdi.bund.de/DE/Buerger/Basiswissen/basiswissen_node.html",
  },
];

/** BfDI-Publikationen: Broschüren, Flyer & Lernmaterial — eigener Bereich,
    Übersicht: https://www.bfdi.bund.de/DE/Service/Publikationen/publikationen_node.html */
export const BFDI_PUBLICATIONS = [
  {
    icon: BookOpen,
    title: "Broschüren",
    text: "Vertiefende Themenhefte des BfDI zu Datenschutz in Recht und Praxis.",
    href: "https://www.bfdi.bund.de/DE/Service/Publikationen/Broschueren/broschueren_node.html",
  },
  {
    icon: Accessibility,
    title: "Flyer in Leichter Sprache",
    text: "Datenschutz verständlich und barrierefrei erklärt.",
    href: "https://www.bfdi.bund.de/DE/Service/Publikationen/Flyer-leichte-Sprache/flyer-ls_node.html",
  },
  {
    icon: Baby,
    title: "Pixi-Bücher",
    text: "Datenschutz kindgerecht erklärt — ideal für die Vermittlung an junge Zielgruppen.",
    href: "https://www.bfdi.bund.de/DE/Service/Publikationen/Pixi/Pixi_node.html",
  },
  {
    icon: GraduationCap,
    title: "Unterrichtsmaterial",
    text: "Materialien für Schule und Ausbildung, um Datenschutzkompetenz früh zu vermitteln.",
    href: "https://www.bfdi.bund.de/DE/Service/Publikationen/Unterrichtsmaterial/Unterrichtsmaterial-node.html",
  },
  {
    icon: Clapperboard,
    title: "Mediathek",
    text: "Videos und Aufzeichnungen des BfDI zu aktuellen Datenschutzthemen.",
    href: "https://www.bfdi.bund.de/DE/Service/Mediathek/Mediathek-node.html",
  },
];
