import { Clock } from "lucide-react";
import { T, fontMono } from "../../config/tokens";

const Meta = ({ read, date }) => (
  <span className="inline-flex items-center gap-3 text-xs" style={{ ...fontMono, color: T.faint }}>
    <span className="inline-flex items-center gap-1">
      <Clock size={11} />
      {read}
    </span>
    <span>{date}</span>
  </span>
);

export default Meta;
