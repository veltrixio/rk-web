"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { Brand } from "../ui/Brand";

export function Header() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
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
