import { site } from "@/content/site";

export function Brand() {
  return <a className="brand" href="#uvod" aria-label="Kateřina Bala – úvod">
    <span className="monogram" aria-hidden="true">K<i>B</i></span>
    <span className="brand-copy">{site.brand}<small>Real estate</small></span>
  </a>;
}
