import { site } from "@/content/site";
import { services } from "@/content/services";

export function Services() {
  return <section id="sluzby" className="sand"><div className="wrap section-space split">
    <div><p className="eyebrow">Služby</p><h2>{site.servicesHeading[0]}<em>{site.servicesHeading[1]}</em></h2></div>
    <ol className="service-list">{services.map((service, index) => <li key={service.title}>
      <span className="number" aria-hidden="true">0{index + 1}</span>
      <div><h3>{service.title}</h3><p className="body">{service.text}</p></div>
    </li>)}</ol>
  </div></section>;
}
