import { ArrowDown } from "lucide-react";
import { site } from "@/content/site";
import { Portrait } from "../ui/Portrait";
import { OfferLink } from "../ui/OfferLink";

export function Hero() {
  const { hero } = site;
  return <section className="hero" aria-labelledby="hero-heading"><div className="wrap hero-grid">
    <div className="hero-heading">
      <p className="eyebrow hero-label">{site.role} <span>|</span> {site.location}</p>
      <h1 id="hero-heading">{hero.heading.map((line, i) => i < 2 ? <span key={line}>{line} </span> : <em key={line}>{line} </em>)}</h1>
    </div>
    <Portrait variant="hero" />
    <div className="hero-intro">
      <p className="hero-name">{site.name}</p><p className="lead">{hero.intro}</p>
      <div className="actions"><OfferLink>{hero.offer}</OfferLink><a className="text-link" href="#o-mne">{hero.about}<ArrowDown size={15} /></a></div>
    </div>

  </div></section>;
}


