import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { Portrait } from "../ui/Portrait";

export function About() {
  return <section id="o-mne" className="paper"><div className="wrap about section-space">
    <Portrait variant="about" />
    <div><p className="eyebrow">O mně</p><h2>{site.about.heading[0]}<em>{site.about.heading[1]}</em></h2>
      {site.about.paragraphs.map(p => <p className="body" key={p}>{p}</p>)}
      <a className="text-link" href={site.profile}>{site.about.link}<ArrowUpRight size={16} /></a>
    </div>
  </div></section>;
}
