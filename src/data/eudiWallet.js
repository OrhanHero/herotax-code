import { CalendarClock, Landmark, Smartphone, Code } from "lucide-react";

/** EUDI-Wallet: Status & Zeitplan — Stand 02. August 2026.
    Quellen: BMDS, Europäische Kommission, Verbraucherzentrale, BMI/Open Code.
    Bei Aktualisierung: Daten gegen die Quellen unten neu prüfen,
    der Zeitplan verschiebt sich laut BMDS erfahrungsgemäß. */
export const EUDI_TIMELINE = [
  {
    icon: Landmark,
    title: "EU-weite Frist: Ende 2026",
    text: "Nach der eIDAS-2.0-Verordnung (EU) 2024/1183 muss jeder EU-Mitgliedstaat seinen Bürger:innen, Einwohner:innen und Unternehmen mindestens eine EUDI-Wallet zur Verfügung stellen. Alle nationalen Wallets folgen gemeinsamen technischen Standards.",
    source: { label: "Europäische Kommission — EUDI Wallet", href: "https://ec.europa.eu/digital-building-blocks/sites/spaces/EUDIGITALIDENTITYWALLET/pages/694487738/EU+Digital+Identity+Wallet+Home" },
  },
  {
    icon: CalendarClock,
    title: "Deutschland: Start Anfang 2027 geplant",
    text: "Das Bundeskabinett hat im Mai 2026 das Digitale-Identitäten-Gesetz (DIdG) beschlossen. Seit Januar 2026 läuft eine Test-Sandbox, im Juni 2026 kamen beim „EUDI ON\"-Community-Event über 400 Teilnehmende zusammen. Der Bund plant zunächst eine staatliche Wallet, rund 12 Monate später sollen zertifizierte private Anbieter folgen.",
    source: { label: "BMDS — EUDI-Wallet", href: "https://bmds.bund.de/themen/digitaler-staat/digitale-identitaeten/eudi-wallet" },
  },
  {
    icon: Smartphone,
    title: "Nutzen & kritische Einordnung",
    text: "Ausweisen (online & offline), Führerschein, Zeugnisse oder Versicherungskarte verschlüsselt aufs Smartphone, Dokumente digital unterschreiben, gezielt nur einzelne Daten preisgeben (Selective Disclosure) — für Unternehmer:innen relevant bei Kontoeröffnung, SIM-Karten-Registrierung oder Vertragsunterschrift. Die Verbraucherzentrale weist aber auch auf offene Fragen hin: Trotz Verschlüsselung bleiben Datenschutzbedenken zur Serverarchitektur bestehen, und Nutzer:innen selbst werden durch den Umgang mit ihren Zugangsdaten zum Sicherheitsrisiko.",
    source: { label: "Verbraucherzentrale", href: "https://www.verbraucherzentrale.de/wissen/digitale-welt/datenschutz/eudiwallet-was-sie-zur-digitalen-brieftasche-wissen-muessen-95821" },
  },
  {
    icon: Code,
    title: "Referenz-Implementierung: Der offene Quellcode des Bundes",
    text: "Der Bund entwickelt die deutsche EUDI-Wallet öffentlich einsehbar auf der Open-Code-Plattform — technische Spezifikation und Fortschritt zum Nachvollziehen für alle, die tiefer einsteigen wollen.",
    source: { label: "BMI — EUDI-Wallet eIDAS2 (Open Code)", href: "https://bmi.usercontent.opencode.de/eudi-wallet/eidas2/" },
  },
];
