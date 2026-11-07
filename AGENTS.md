# AGENTS.md — Kateřina Bala | prémiový realitní web

## Účel a způsob práce

Jsi zkušený frontend vývojář a UI/UX designer. Vytvoř a udržuj **jednostránkový, prémiově působící osobní web pro Mgr. Kateřinu Balu**, realitní makléřku působící pod značkou NEXT REALITY v Českých Budějovicích.

Web má působit luxusně, minimalisticky, důvěryhodně, kultivovaně a osobně. Primárním cílem je představit makléřku, její služby a ověřené reference a nabídnout návštěvníkům jednoduchý odkaz na její aktuální nabídku nemovitostí. **Nevytvářej realitní portál.**

Pracuj samostatně: nejprve prohlédni existující soubory, respektuj současné nastavení projektu, potom implementuj potřebné změny. Pokud je projekt prázdný, založ jej. Před finálním odevzdáním proveď kontroly. V případě nejasných nebo nedostupných podkladů použij jasně označený placeholder, nevymýšlej fakta.

## Zdrojové weby a odkazy

- **Vizuální inspirace:** https://premiumestate.cz/
- **Oficiální profil makléřky a zdroj referencí:** https://www.nextreality.cz/katerinabala
- **Nabídka nemovitostí na Sreality:** https://www.sreality.cz/adresar/next-reality-ceske-budejovice-ceske-budejovice-ceske-budejovice-6/26341/makleri/270893

Vzorový web slouží jen jako inspirace pro kompozici, typografii, práci s prostorem a fotografiemi. **Nekopíruj jeho texty, kód, značku, grafiku ani identitu.** Nezobrazuj nabídky nemovitostí lokálně a nestahuj je ze Sreality; použij pouze externí odkaz. Pro přebírání informací z profilů použij jen ověřitelná fakta. Pokud zdroj nejde načíst, ulož obsah jako `TODO: ověřit podle oficiálního profilu` namísto vymyšlených údajů.

## Technologie

Preferovaný stack pro nový projekt:

- Next.js, App Router, TypeScript (`strict`)
- Tailwind CSS
- `next/font` pro fonty a `next/image` pro fotografie
- Motion / Framer Motion jen tam, kde jsou animace opravdu přínosné
- Lucide React pro drobné ikony

Použij kompatibilní aktuální stabilní verze. Nezaváděj backend, CMS, databázi, API integrace ani autentizaci. Preferuj staticky generovanou stránku. Nepřidávej závislosti bez jasného důvodu.

## Design: quiet luxury / champagne gold

Vizuál má působit jako prémiový editoriální web, nikoli jako generická realitní šablona.

### Barvy

| Token | HEX | Použití |
| --- | --- | --- |
| `gold` | `#D9BD83` | hlavní jemné zlaté akcenty |
| `gold-muted` | `#B99759` | linky, hover, sekundární akcent |
| `black` | `#151412` | tmavý hero a footer |
| `charcoal` | `#25221E` | tmavé povrchy |
| `ivory` | `#F5F1E9` | hlavní světlé pozadí |
| `beige` | `#E9DFCF` | sekundární světlé plochy |
| `text-muted` | `#847A70` | doplňkový text |

Zlatou používej střídmě. Vyhni se křiklavě žluté zlaté, výrazným kovovým gradientům, záři, přemíře stínů a efektním dekoracím. Zajisti čitelnost a kontrast textu.

### Typografie

- Editorální nadpisy: **Cormorant Garamond**.
- Texty, navigace, tlačítka: **Manrope**.
- Velké, vzdušné nadpisy s pečlivou typografickou hierarchií.
- Jemná kurzíva ve vybraných nadpisech; malé uppercase eyebrow titulky s větším prostrkáním.
- Konzistentní spacing, omezená délka odstavců, výrazný negativní prostor.

### Rozložení

- Max. šířka hlavního obsahu přibližně 1280–1440 px.
- Desktop: velké fotografie, asymetrické dvousloupcové layouty, velkorysé mezery.
- Mobil: samostatně doladěná kompozice, žádné drobné texty, přetékání ani nečitelné překryvy.
- Střídej tmavé a krémové sekce, používej tenké zlaté linky a minimum karet.

## Obsah stránky a sekce

Všechny texty jsou česky se správnou diakritikou. Copywriting je elegantní a přirozený, bez prázdných superlativů a neověřených výsledků.

1. **Header** — textový wordmark `KATEŘINA BALA`, případně malý dovětek `REAL ESTATE`; navigace `Úvod`, `O mně`, `Služby`, `Reference`, `Moje nabídka`. Vnitřní odkazy vedou na sekce; `Moje nabídka` odkazuje na Sreality. Responzivní mobilní menu. Header může být transparentní nad hero a při scrollu tmavý.

2. **Hero** — klíčová sekce s velkou vertikální fotografií makléřky (na desktopu cca 45–55 % šířky), tmavým pozadím a výraznou typografií. Eyebrow: `REALITNÍ MAKLÉŘKA | ČESKÉ BUDĚJOVICE`. Pracovní headline: `Nemovitosti s hodnotou. Spolupráce s důvěrou.`. Uveď `Mgr. Kateřina Bala` a stručné osobní představení. Primární CTA `Prohlédnout moji nabídku` → Sreality. Sekundární CTA `Poznejte mě` → `#o-mne`.

3. **O mně** — světlá editorial sekce s druhým portrétem a stručným osobním textem v první osobě, vycházejícím z oficiálního profilu. Vyzdvihni individuální přístup, profesionální provedení transakcí, transparentnost a služby v oblasti prodeje, koupě a pronájmu. Nadpis může znít `Každá nemovitost má svůj příběh.`.

4. **Služby** — tři jednoduché obsahové bloky: `Prodej nemovitostí`, `Pronájem nemovitostí`, `Koupě nemovitostí`. Vkusné pořadové číslice 01/02/03, krátké věcné popisy a tenké oddělovací linky.

5. **Reference** — klíčová sekce s přibližně 4–6 **skutečnými** recenzemi z profilu NEXT REALITY. Dodrž správné přiřazení autorů a přesné znění; při zkrácení označ výpustku, nevytvářej upravené falešné citace. Pokud nejsou data ověřená, použij designové placeholdery s jasným popiskem místo fiktivních recenzí. Nadpis: `Důvěra, která mluví za vše.`. Přidej odkaz `Více referencí na NEXT REALITY`.

6. **Závěrečné CTA** — tmavá minimalistická sekce s headline `Váš další krok začíná zde.` a tlačítkem `Zobrazit nabídku nemovitostí` → Sreality. Nevykresluj lokální karty ani ceny nabídek.

7. **Footer** — jméno, role, NEXT REALITY, České Budějovice, odkazy na oficiální profil a Sreality, automatický aktuální rok. Respektuj rozdíl mezi osobním webem makléřky a oficiální stránkou realitní kanceláře. Firemní logo použij pouze s oprávněným podkladem.

## Fotografie: zatím pouze placeholdery

Nejsou dodány autorizované portréty. Nevkládej náhodné tváře, stock portréty jiných lidí ani nevytvářej uměle podobu makléřky.

Připrav záměrně stylizované **lokální placeholdery** ve finálních poměrech stran a s popisky, aby se později pouze nahradily originální fotografie. Doporučené assety:

| Soubor | Rozlišení | Použití |
| --- | --- | --- |
| `public/images/portraits/hero-portrait.webp` | 1200 × 1600 px (3:4) | Hero |
| `public/images/portraits/about-portrait.webp` | 1000 × 1250 px (4:5) | O mně |
| `public/images/editorial/editorial-detail.webp` | 1600 × 900 px (16:9) | volitelný architektonický detail |
| `public/images/social-preview.webp` | 1200 × 630 px | Open Graph náhled |

Pokud nevytváříš přímo rastrové soubory, udělej estetické CSS/SVG placeholdery správných poměrů a aktualizuj reference v kódu; nikdy nenechávej rozbité `<img>` cesty. Zachovej možnost snadné výměny. U `next/image` nastav odpovídající `sizes`, `fill` nebo rozměry a rozumné `object-position`.

Budoucí generování portrétů proběhne až z dodaných skutečných fotografií; zachová identitu a podobu makléřky.

## Interakce a animace

Použij jen velmi jemné animace: fade-in při vstupu sekcí, malý vertikální posun, kultivovaný hover CTA a decentní pohyb linek. Můžeš použít lehký zoom fotografie na hover. Nepoužívej agresivní parallax, 3D, video pozadí, částice nebo automaticky rotující prvky. Respektuj `prefers-reduced-motion`. Smooth scrolling jen pokud nevadí přístupnosti.

## Výslovně zakázané funkce

- Kontaktní formuláře, e-mailové adresy a `mailto:` odkazy.
- Interní nabídka nemovitostí, realitní vyhledávání a stahování nabídek.
- CMS, admin, přihlašování, databáze, backend a vlastní API.
- Chatbot, newsletter, blog a mapy.
- Analytika, trackery, marketingové pixely a cookie lišta bez zadání či právní nutnosti.
- Vymyšlené recenze, výsledky prodejů, ocenění či profesní fakta.
- Cizí brandové materiály převzaté ze vzorového webu.

## SEO, přístupnost a výkon

- České `lang="cs"`, správný `<title>`, meta description, OG metadata a canonical až po znalosti finální domény.
- Sémantické HTML a správná posloupnost nadpisů, jedna H1.
- Přístupné menu a interaktivní prvky, keyboard focus, viditelné stavy hover/focus.
- Dobré kontrasty textů, responzivita od 320 px, žádné horizontální scrollování.
- Používej `next/font`, optimalizaci obrázků, lazy loading mimo hero a minimalizaci JavaScriptu.
- `robots.txt` a `sitemap.xml`, pokud je známa doména; jinak konfiguraci připrav bez vymyšlené URL.
- Externí odkazy mohou otevírat nové okno, pak přidej bezpečné `rel` a smysluplné označení.

## Organizace projektu

Preferovaná struktura (uprav pouze pokud to odůvodňuje existující projekt):

```text
AGENTS.md
README.md
public/
  images/
    portraits/
    editorial/
    social-preview.webp
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
      Header.tsx
      Footer.tsx
    sections/
      Hero.tsx
      About.tsx
      Services.tsx
      Testimonials.tsx
      FinalCTA.tsx
    ui/
      SectionHeading.tsx
      ImagePlaceholder.tsx
      Button.tsx
  content/
    site.ts
    services.ts
    testimonials.ts
  lib/
```

Udržuj textový obsah, externí URL a data recenzí v `src/content`, aby se daly měnit bez úprav komponent. Nevytvářej překomplikované abstrakce. Client Components používej jen tam, kde jsou potřeba interakce.

## Validace a definice hotového webu

Před ukončením úkolu:

1. Ověř všechny požadované sekce, české texty a funkčnost interních i externích odkazů.
2. Zkontroluj desktop (1440 px), tablet (768 px), mobil (390 px) a úzký mobil (320 px), pokud je k dispozici nástroj pro náhled.
3. Ověř, že na stránce nejsou formuláře, e-maily, interní katalog nemovitostí ani falešné reference.
4. Proveď lint, TypeScript kontrolu a produkční build dostupnými projektovými příkazy; chyby oprav.
5. Ujisti se, že placeholdery fungují a že je možné fotografie vyměnit bez změny layoutu.
6. Aktualizuj `README.md` s instrukcemi pro spuštění, editaci textů, nahrazení fotografií a úpravu odkazů.
7. V závěrečné odpovědi shrň provedené změny, výsledky kontrol a případné konkrétní otevřené body.

**Priorita:** vizuální kvalita, přesnost obsahu, jednoduchost, mobilní použitelnost a dlouhodobá udržovatelnost. Nehraj si na hotový web, pokud ještě obsahuje neověřené reference nebo nedodané skutečné portréty; transparentně označ, co zbývá doplnit.
