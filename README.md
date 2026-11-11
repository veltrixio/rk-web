# Kateřina Bala · osobní realitní web

Jednostránkový český web Mgr. Kateřiny Baly. Stránka se vygeneruje při sestavení. Aktuální nemovitosti jsou dostupné přes externí odkaz na její profil na Sreality.

## Lokální spuštění

Použijte Node.js 24 LTS s npm. V kořenové složce spusťte:

```sh
npm ci
npm run dev
```

Otevřete [localhost:3000](http://localhost:3000). Na tomto počítači je v ignorované složce také přenosné Node.js. Pokud PowerShell příkaz npm nenajde, zpřístupněte ho v aktuálním okně a používejte `npm.cmd`:

```powershell
$nodeDir = (Get-ChildItem .local-tools -Directory -Filter 'node-v*' | Select-Object -First 1).FullName
$env:Path = "$nodeDir;$env:Path"
npm.cmd run dev
```

## Kontroly a produkční režim

```sh
npm run lint
npm run typecheck
npm run build
```

Produkční build vytvoří statický web ve složce `out/`. Fotografie WebP, fonty, styly i skripty se obsluhují jako soubory. Pro lokální náhled exportu sestaveného bez `SITE_URL` lze s Pythonem spustit `python -m http.server 8000 --bind 127.0.0.1 --directory out` a otevřít http://127.0.0.1:8000/.

## GitHub Pages

1. Připravte repozitář na GitHubu. Pro GitHub Free použijte veřejný repozitář. V místním projektu ověřte `git remote -v`. Pokud nemá vzdálený repozitář, připojte jej příkazem `git remote add origin https://github.com/USERNAME/REPOSITORY.git` s vlastním jménem účtu a repozitáře.
2. V repozitáři otevřete **Settings → Pages → Build and deployment → Source** a vyberte **GitHub Actions**. Workflow už obsahuje soubor `.github/workflows/pages.yml`.
3. Až budete chtít web zveřejnit, vytvořte commit se zdrojovými soubory včetně workflow a `package-lock.json` a odešlete větev příkazem `git push -u origin main`.
4. V **Actions → GitHub Pages** sledujte úlohy `build` a `deploy`. Po úspěšném nasazení najdete veřejný odkaz v detailu nasazení nebo pod **Settings → Pages → Visit site**. Každý další push do `main` web aktualizuje.

Workflow získá celou veřejnou adresu ze služby Pages a předá ji sestavení jako `SITE_URL`. Z její cesty se určuje `basePath`, například `/REPOSITORY`. Pro lokální vývoj ponechte `SITE_URL` prázdné. Git ignoruje `node_modules/`, `.next/`, `out/` a `.local-tools/`. Actions nahraje pouze obsah `out/`.

## Struktura

- `src/app/` obsahuje stránku, layout, typografii, responzivní styly, ikonu a metadata.
- `src/components/layout/`, `sections/` a `ui/` obsahují navigaci a patičku, jednotlivé sekce a opakovaně používané prvky.
- `src/content/site.ts` spravuje texty, cíle navigace, externí URL a popisky portrétů. Služby jsou v `services.ts`, klientské citace v `testimonials.ts`.
- `src/lib/origin.ts` čte celou veřejnou adresu včetně cesty ze `SITE_URL`.
- `public/images/portraits/` obsahuje oba portréty. V `editorial/` je široká fotografie pro závěrečnou výzvu.

## Portréty a sdílení

Úvod používá `hero-portrait.webp` (1200 × 1600 px), sekce O mně `about-portrait.webp` (1000 × 1250 px) a závěrečná výzva `editorial-detail.webp` (1600 × 900 px). Při výměně zachovejte poměry stran, upravte alternativní texty v `src/content/site.ts` a stránku znovu sestavte. Statické importy poskytují rozměry a novou adresu při změně souboru.

Sdílecí obrázek je v `public/images/social-preview.webp` (1200 × 630 px). Canonical, absolutní URL pro sdílení a sitemap vycházejí ze stejné adresy Pages. Rok v patičce odpovídá roku sestavení.

## Obsahové zdroje

Čtyři klientské citace byly ověřeny na [oficiálním profilu NEXT REALITY](https://www.nextreality.cz/katerinabala). Web zobrazuje celé znění všech čtyř vybraných referencí. Při dalších úpravách ověřte znění i autora na stejném profilu. Odkazy na nabídku vedou na [profil na Sreality](https://www.sreality.cz/adresar/next-reality-ceske-budejovice-ceske-budejovice-ceske-budejovice-6/26341/makleri/270893).

