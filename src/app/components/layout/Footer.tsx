import Link from "next/link";
import Image from "next/image";
import {
  address,
  email,
  instagramHandle,
  instagramUrl,
  mapsUrl,
  phoneHref,
  phoneNumber,
} from "@/data/masterclasses";

const quickLinks = [
  { name: "Формати", href: "#formats" },
  { name: "Індивідуальний МК", href: "#individual" },
  { name: "Теми", href: "#topics" },
  { name: "Сертифікат", href: "#certificate" },
  { name: "Умови", href: "#terms" },
];

export default function Footer() {
  return (
    <footer className="bg-moss pt-16 text-primary md:pt-20">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 border-b border-primary/20 pb-12 md:grid-cols-[1.25fr_0.85fr_1fr]">
          <div>
            <Image
              src="/brand/v-dumtsi-logo-light.png"
              alt="V DUMTSI"
              width={860}
              height={804}
              className="h-auto w-28 object-contain"
            />
            <p className="mt-6 max-w-md text-base leading-7 text-primary/75">
              Авторські майстер‑класи з флористики у Львові: індивідуальні
              заняття, камерні групи, корпоративи, події та подарункові
              сертифікати.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-primary">Швидкі посилання</h3>
            <ul className="mt-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 min-w-11 items-center text-primary/70 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-primary">Контакти</h3>
            <div className="mt-4 text-primary/75">
              <p>
                <a href={phoneHref} className="inline-flex min-h-11 items-center hover:text-primary">
                  {phoneNumber}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex min-h-11 items-center hover:text-primary"
                >
                  {email}
                </a>
              </p>
              <p>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center hover:text-primary"
                >
                  {instagramHandle}
                </a>
              </p>
              <p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center hover:text-primary"
                >
                  {address}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-6 text-sm text-primary/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 V DUMTSI. Усі права захищені.</p>
          <p>Флористична студія V DUMTSI</p>
        </div>
      </div>
    </footer>
  );
}
