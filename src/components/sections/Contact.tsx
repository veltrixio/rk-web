import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { site } from "@/content/site";

export function Contact() {
  const { contact } = site;
  return (
    <section id="kontakt" className="paper" aria-labelledby="contact-heading">
      <div className="wrap section-space split contact-layout">
        <div>
          <p className="eyebrow">{site.name}</p>
          <h2 id="contact-heading">Kontaktujte <em className="inline">mě.</em></h2>
        </div>
        <div>
          <address className="contact-details">
            <a href={`tel:${contact.phone.replaceAll(" ", "")}`}><Phone aria-hidden="true" size={19} />{contact.phone}</a>
            <a href={`mailto:${contact.email}`}><Mail aria-hidden="true" size={19} />{contact.email}</a>
            <div className="contact-office">
              <a className="text-link" href={contact.officeUrl}>{contact.office}<ArrowUpRight size={16} aria-hidden="true" /></a>
              <p>{contact.street}<br />{contact.city}</p>
            </div>
          </address>
          <p className="contact-social-title">NEXT REALITY na sociálních sítích</p>
          <ul className="contact-social">
            {contact.networks.map(([label, url]) => (
              <li key={url}><a className="text-link" href={url}>{label}<ArrowUpRight size={14} aria-hidden="true" /></a></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
