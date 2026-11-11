import { ArrowUpRight } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site";

export function Testimonials() {
  return <section id="reference" className="paper"><div className="wrap section-space">
    <p className="eyebrow">Reference</p><h2>{site.reviewsHeading[0]} <em className="inline">{site.reviewsHeading[1]}</em></h2>
    <div className="reviews">{testimonials.map(review => <figure key={review.author}>
      <blockquote cite={site.profile}>
        {review.text.split("\n\n").map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </blockquote>
      <figcaption>{review.author}</figcaption>
    </figure>)}</div><a className="text-link" href={site.profile}>{site.reviewsLink}<ArrowUpRight size={16} /></a>
  </div></section>;
}
