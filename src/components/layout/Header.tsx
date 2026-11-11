"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { Brand } from "../ui/Brand";

export function Header() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useLayoutEffect(() => {
    const header = document.querySelector("header");
    const hero = document.querySelector<HTMLElement>(".hero");
    const footer = document.querySelector("footer");
    if (!header || !hero || !footer) return;

    const style = document.documentElement.style;
    const alignMarble = () => {
      const top = header.getBoundingClientRect();
      const middle = hero.getBoundingClientRect();
      const totalHeight = top.height + middle.height + footer.getBoundingClientRect().height;
      // Scale the 1536 × 1024 slab once for all three slices.
      style.setProperty("--marble-width", Math.max(top.width, totalHeight * 1.5) + "px");
      style.setProperty("--marble-hero-offset", -top.height + "px");
      style.setProperty("--marble-footer-offset", -(top.height + middle.height) + "px");
    };
    alignMarble();
    const observer = new ResizeObserver(alignMarble);
    [header, hero, footer].forEach(section => observer.observe(section));
    return () => {
      observer.disconnect();
      for (const key of ["--marble-width", "--marble-hero-offset", "--marble-footer-offset"]) {
        style.removeProperty(key);
      }
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); button.current?.focus(); }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return <header id="uvod"><div className="wrap header-inner">
    <Brand />
    <button type="button" ref={button} className="menu-toggle" aria-expanded={open} aria-controls="navigation"
      aria-label={open ? "Zavřít navigaci" : "Otevřít navigaci"} onClick={() => setOpen(!open)}>
      {open ? <X /> : <Menu />}
    </button>
    <nav id="navigation" className={open ? "open" : ""} aria-label="Hlavní navigace" onClick={() => setOpen(false)}>
      {site.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      <a className="nav-offer" href={site.listings}>Moje nabídka <ArrowUpRight size={15} /></a>
    </nav>
  </div></header>;
}
