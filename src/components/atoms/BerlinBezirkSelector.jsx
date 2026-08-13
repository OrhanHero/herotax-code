import { useState } from "react";
import { MapPin, ExternalLink, Building, Landmark } from "lucide-react";
import { fontDisplay, fontMono } from "../../config/tokens";

const BERLIN_BEZIRKE = [
  {
    id: "mitte",
    name: "Mitte",
    code: "01",
    wahlamt: "Wahlamt Mitte · Karl-Marx-Allee 31, 10178 Berlin",
    href: "https://www.berlin.de/ba-mitte/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/wahlamt-volksbegehren/artikel.244213.php",
    desc: "Bezirk Mitte mit den Ortsteilen Mitte, Moabit, Hansaviertel, Tiergarten, Wedding und Gesundbrunnen.",
    aghWahlkreise: 7,
  },
  {
    id: "fk",
    name: "Friedrichshain-Kreuzberg",
    code: "02",
    wahlamt: "Wahlamt Friedrichshain-Kreuzberg · Frankfurter Allee 35-37, 10247 Berlin",
    href: "https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/bezirkswahlamt/",
    desc: "Ortsteile Friedrichshain und Kreuzberg.",
    aghWahlkreise: 6,
  },
  {
    id: "pankow",
    name: "Pankow",
    code: "03",
    wahlamt: "Wahlamt Pankow · Fröbelstraße 17, 10405 Berlin",
    href: "https://www.berlin.de/ba-pankow/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/wahlamt/",
    desc: "Ortsteile Prenzlauer Berg, Weissensee, Pankow, Karow, Buch, Wilhelmsruh.",
    aghWahlkreise: 9,
  },
  {
    id: "cw",
    name: "Charlottenburg-Wilmersdorf",
    code: "04",
    wahlamt: "Wahlamt Charlottenburg-Wilmersdorf · Hohenzollerndamm 177, 10713 Berlin",
    href: "https://www.berlin.de/ba-charlottenburg-wilmersdorf/verwaltung/aemter/buergerdienste/wahlamt/",
    desc: "Ortsteile Charlottenburg, Wilmersdorf, Schmargendorf, Grunewald, Westend.",
    aghWahlkreise: 7,
  },
  {
    id: "spandau",
    name: "Spandau",
    code: "05",
    wahlamt: "Wahlamt Spandau · Carl-Schurz-Straße 2/6, 13597 Berlin",
    href: "https://www.berlin.de/ba-spandau/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/bezirkswahlamt/",
    desc: "Ortsteile Spandau, Haselhorst, Siemensstadt, Staaken, Gatow, Kladow.",
    aghWahlkreise: 5,
  },
  {
    id: "sz",
    name: "Steglitz-Zehlendorf",
    code: "06",
    wahlamt: "Wahlamt Steglitz-Zehlendorf · Kirchstraße 1/3, 14163 Berlin",
    href: "https://www.berlin.de/ba-steglitz-zehlendorf/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/wahlamt/",
    desc: "Ortsteile Steglitz, Lichterfelde, Lankwitz, Zehlendorf, Dahlem, Nikolassee, Wannsee.",
    aghWahlkreise: 7,
  },
  {
    id: "ts",
    name: "Tempelhof-Schöneberg",
    code: "07",
    wahlamt: "Wahlamt Tempelhof-Schöneberg · John-F.-Kennedy-Platz, 10825 Berlin",
    href: "https://www.berlin.de/ba-tempelhof-schoeneberg/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/bezirkswahlamt/",
    desc: "Ortsteile Schöneberg, Friedenau, Tempelhof, Mariendorf, Marienfelde, Lichtenrade.",
    aghWahlkreise: 7,
  },
  {
    id: "neukoelln",
    name: "Neukölln",
    code: "08",
    wahlamt: "Wahlamt Neukölln · Karl-Marx-Straße 83, 12040 Berlin",
    href: "https://www.berlin.de/ba-neukoelln/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/wahlamt/",
    desc: "Ortsteile Neukölln, Britz, Buckow, Rudow, Gropiusstadt.",
    aghWahlkreise: 7,
  },
  {
    id: "tk",
    name: "Treptow-Köpenick",
    code: "09",
    wahlamt: "Wahlamt Treptow-Köpenick · Alt-Köpenick 21, 12555 Berlin",
    href: "https://www.berlin.de/ba-treptow-koepenick/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/wahlamt/",
    desc: "Ortsteile Alt-Treptow, Plänterwald, Baumschulenweg, Johannisthal, Niederschöneweide, Köpenick, Rahnsdorf, Friedrichshagen.",
    aghWahlkreise: 6,
  },
  {
    id: "mh",
    name: "Marzahn-Hellersdorf",
    code: "10",
    wahlamt: "Wahlamt Marzahn-Hellersdorf · Alice-Salomon-Platz 3, 12627 Berlin",
    href: "https://www.berlin.de/ba-marzahn-hellersdorf/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/bezirkswahlamt/",
    desc: "Ortsteile Marzahn, Biesdorf, Kaulsdorf, Mahlsdorf, Hellersdorf.",
    aghWahlkreise: 6,
  },
  {
    id: "lichtenberg",
    name: "Lichtenberg",
    code: "11",
    wahlamt: "Wahlamt Lichtenberg · Möllendorffstraße 6, 10367 Berlin",
    href: "https://www.berlin.de/ba-lichtenberg/service/wahlamt/artikel.339187.php",
    desc: "Ortsteile Friedrichsfelde, Karlshorst, Lichtenberg, Falkenberg, Malchow, Wartenberg, Neu-Hohenschönhausen, Alt-Hohenschönhausen.",
    aghWahlkreise: 6,
  },
  {
    id: "reinickendorf",
    name: "Reinickendorf",
    code: "12",
    wahlamt: "Wahlamt Reinickendorf · Eichborndamm 215, 13437 Berlin",
    href: "https://www.berlin.de/ba-reinickendorf/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/bezirkswahlamt/",
    desc: "Ortsteile Reinickendorf, Tegel, Konradshöhe, Heiligensee, Frohnau, Hermsdorf, Waidmannslust, Lübars, Wittenau, Märkisches Viertel.",
    aghWahlkreise: 6,
  },
];

export default function BerlinBezirkSelector() {
  const [selected, setSelected] = useState(BERLIN_BEZIRKE[0]);

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-xl mb-10 overflow-hidden relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-2">
            <MapPin size={13} className="animate-bounce" />
            12 Berliner Bezirke Finder
          </span>
          <h3 className="text-2xl font-black tracking-tight" style={{ ...fontDisplay }}>
            Dein Bezirk & Zuständiges Wahlamt 2026
          </h3>
        </div>
        <p className="text-xs text-blue-200/80 max-w-xs" style={{ ...fontMono }}>
          Wähle deinen Berliner Bezirk für spezifische Wahlkreis-Informationen & BVV-Kontakte.
        </p>
      </div>

      {/* Grid mit allen 12 Bezirken */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-6">
        {BERLIN_BEZIRKE.map((bezirk) => {
          const isSelected = selected.id === bezirk.id;
          return (
            <button
              key={bezirk.id}
              type="button"
              onClick={() => setSelected(bezirk)}
              className={`p-2.5 rounded-xl text-left transition-all duration-200 border text-xs font-semibold flex flex-col justify-between gap-1 focus:outline-none focus-visible:ring-2 ${
                isSelected
                  ? "bg-blue-600 border-blue-400 text-white shadow-md scale-[1.03]"
                  : "bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-300"
              }`}
            >
              <span className="text-[10px] font-mono opacity-60">Bezirk {bezirk.code}</span>
              <span className="truncate font-bold text-xs">{bezirk.name}</span>
            </button>
          );
        })}
      </div>

      {/* Detail-Card des ausgewählten Bezirks */}
      {selected && (
        <div className="bg-slate-800/90 rounded-2xl p-5 border border-slate-700/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 animate-fadeIn">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-blue-500/20 text-blue-300 text-xs font-mono font-bold border border-blue-400/30">
                Bezirk {selected.code} · {selected.name}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold border border-emerald-400/30">
                {selected.aghWahlkreise} AGH-Wahlkreise
              </span>
            </div>
            <p className="text-sm font-semibold text-white">{selected.desc}</p>
            <p className="text-xs text-slate-300 flex items-center gap-1.5" style={{ ...fontMono }}>
              <Landmark size={14} className="text-blue-400 shrink-0" />
              <span>{selected.wahlamt}</span>
            </p>
          </div>

          <a
            href={selected.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all inline-flex items-center gap-2 shadow-md shrink-0 self-stretch sm:self-auto justify-center"
            style={{ ...fontDisplay }}
          >
            <Building size={15} />
            <span>Wahlamt {selected.name} Portal</span>
            <ExternalLink size={14} />
          </a>
        </div>
      )}
    </div>
  );
}
