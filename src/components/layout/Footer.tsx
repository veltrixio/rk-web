import { site } from "@/content/site";
import { Brand } from "../ui/Brand";

export function Footer() {
  return <footer><div className="wrap footer-inner"><Brand />
    <p>{site.name}<br />{site.role} · {site.location}</p>
    <div className="footer-links"><a href={site.profile}>Profil NEXT REALITY ↗</a><a href={site.listings}>Nabídka na Sreality ↗</a></div>
    <small>© {new Date().getFullYear()} {site.brand}</small>
  </div></footer>;
}
