import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return <><a className="skip" href="#obsah">Přejít na obsah</a><Header /><main id="obsah">
    <Hero /><About /><Services /><Testimonials /><FinalCTA /><Contact />
  </main><Footer /></>;
}
