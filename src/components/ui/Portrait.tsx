import Image from "next/image";
import { site } from "@/content/site";

export function Portrait({ variant }: { variant: keyof typeof site.portraits }) {
  const photo = site.portraits[variant];
  const hero = variant === "hero";

  return <div className={`portrait ${variant}-photo`}>
    <Image src={photo.src} alt={photo.alt}
      sizes={hero
        ? "(max-width: 556px) 88vw, (max-width: 760px) 490px, (min-width: 1535px) 680px, 44vw"
        : "(max-width: 500px) 88vw, (max-width: 760px) 440px, (min-width: 1400px) 480px, 35vw"}
      preload={hero} loading={hero ? undefined : "lazy"} />
  </div>;
}
