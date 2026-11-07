import Image from "next/image";
import { site } from "@/content/site";
import { OfferLink } from "../ui/OfferLink";

export function FinalCTA() {
  return <section className="final"><div className="wrap final-layout">
    <Image className="editorial-photo" src={site.editorial.src} alt={site.editorial.alt}
      sizes="(min-width: 1535px) 1350px, (max-width: 1000px) 92vw, 88vw" loading="lazy" />
    <div className="final-copy">
      <h2>{site.finalHeading[0]}<em>{site.finalHeading[1]}</em></h2>
      <OfferLink>{site.finalLink}</OfferLink>
    </div>
  </div></section>;
}
