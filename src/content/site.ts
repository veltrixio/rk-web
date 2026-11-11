import heroPortrait from "../../public/images/portraits/hero-portrait.webp";
import aboutPortrait from "../../public/images/portraits/about-portrait.webp";
import editorialDetail from "../../public/images/editorial/editorial-detail.webp";
export const site = {
  name: "Mgr. Kateřina Bala",
  brand: "Kateřina Bala",
  role: "Realitní makléřka",
  location: "České Budějovice",
  agency: "NEXT REALITY",
  profile: "https://www.nextreality.cz/katerinabala",
  listings: "https://www.sreality.cz/adresar/next-reality-ceske-budejovice-ceske-budejovice-ceske-budejovice-6/26341/makleri/270893",
  title: "Mgr. Kateřina Bala | Realitní makléřka v Českých Budějovicích",
  description: "Mgr. Kateřina Bala z NEXT REALITY v Českých Budějovicích. Osobní přístup k prodeji, koupi a pronájmu nemovitostí, zkušenosti klientů a aktuální nabídka.",
  nav: [["Úvod", "#uvod"], ["O mně", "#o-mne"], ["Služby", "#sluzby"], ["Reference", "#reference"], ["Kontakt", "#kontakt"]],
  contact: {
    phone: "+420 774 335 531",
    email: "katerina.bala@nextreality.cz",
    office: "NEXT REALITY ČESKÉ BUDĚJOVICE",
    officeUrl: "https://www.nextreality.cz/kancelar/1215/next-reality-ceske-budejovice",
    street: "Nádražní 2067/49",
    city: "370 01 České Budějovice",
    networks: [
      ["Facebook", "https://www.facebook.com/nextreality1/"],
      ["Instagram", "https://www.instagram.com/next_reality"],
      ["LinkedIn", "https://www.linkedin.com/company/3164532"],
      ["YouTube", "https://www.youtube.com/channel/UCYMvD_rIJow18GQXa5GTPmQ"],
    ],
  },
  hero: {
    heading: ["Nemovitosti", "s hodnotou.", "Spolupráce", "s důvěrou."],
    intro: "Provedu vás prodejem, koupí i pronájmem nemovitosti. Osobně a s péčí o každý detail.",
    offer: "Prohlédnout moji nabídku",
    about: "Poznejte mě",
  },
  about: {
    heading: ["Každá nemovitost", "má svůj příběh."],
    paragraphs: [
      "Jsem Kateřina Bala, realitní makléřka NEXT REALITY v Českých Budějovicích. Každá spolupráce pro mě začíná rozhovorem o tom, co od změny bydlení očekáváte.",
      "Ať už prodáváte, kupujete, nebo pronajímáte, jednotlivé kroky projdeme společně. Záleží mi na tom, abyste rozuměli jejich smyslu a měli pro své rozhodnutí dostatek informací.",
    ],
    link: "Můj profil na NEXT REALITY",
  },
  servicesHeading: ["Jak vám mohu", "pomoci."],
  reviewsHeading: ["Důvěra, která", "mluví za vše."],
  reviewsLink: "Více referencí na NEXT REALITY",
  finalHeading: ["Váš další krok", "začíná zde."],
  finalLink: "Zobrazit nabídku nemovitostí",
  portraits: {
    hero: { src: heroPortrait, alt: "Mgr. Kateřina Bala ve zlatých šatech u tmavého mramorového pultu" },
    about: { src: aboutPortrait, alt: "Kateřina Bala sedí ve světlém křesle ve zlatých šatech a podpírá si bradu rukou" },
  },
  editorial: { src: editorialDetail, alt: "Interiér s krémovou pohovkou, bílými květy a krbem v tmavém mramoru" },
} as const;
