import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export function OfferLink({ children }: { children: React.ReactNode }) {
  return <a className="offer" href={site.listings}>{children}<ArrowUpRight size={17} aria-hidden="true" /></a>;
}
