import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dictionary, hasLang, langs, type Lang } from "@/content/dictionary";
import { hasWhatsapp, waLink } from "@/content/contact";
import { WhatsAppGlyph } from "../decor";
import { MobileMenu } from "./mobile-menu";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600"],
});

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLang(lang)) return {};
  return {
    title: dictionary[lang].meta.title,
    description: dictionary[lang].meta.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLang(lang)) notFound();
  const t = dictionary[lang as Lang];

  const navItems = [
    { href: `/${lang}#events`, label: t.nav.events },
    { href: `/${lang}#about`, label: t.nav.about },
    { href: `/${lang}#services`, label: t.nav.services },
    { href: `/${lang}#bracelets`, label: t.nav.bracelets },
    { href: `/${lang}#contact`, label: t.nav.contact },
  ];

  return (
    <html lang={lang} className={`${cormorant.variable} ${manrope.variable} antialiased`}>
      <body className="min-h-screen bg-cream text-ink">
        <header className="absolute top-0 left-0 right-0 z-20">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <Link href={`/${lang}`} className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="Tree of Life Sound Temple"
                width={96}
                height={96}
                priority
                className="h-11 w-11 shrink-0 rounded-full object-cover shadow-sm ring-1 ring-gold/30"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg tracking-wide text-ink sm:text-xl">
                  Tree of <span className="italic text-gold">Life</span>
                  <span className="ml-1.5 text-sm text-ink-soft">ST, SIA</span>
                </span>
                <span className="mt-1 whitespace-nowrap text-[0.6rem] uppercase tracking-[0.2em] text-forest-soft sm:tracking-[0.3em]">
                  {t.tagline}
                </span>
              </span>
            </Link>
            <nav className="flex items-center gap-4 text-sm sm:gap-6">
              {navItems.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  className="hidden text-ink-soft transition-colors hover:text-ink md:block"
                >
                  {it.label}
                </a>
              ))}
              <div className="flex items-center gap-1 rounded-full border border-sand-deep bg-cream/70 px-1 py-1 backdrop-blur">
                {langs.map((l) => (
                  <Link
                    key={l}
                    href={`/${l}`}
                    className={`rounded-full px-2.5 py-0.5 text-xs uppercase tracking-wider transition-colors ${
                      l === lang ? "bg-night text-cream" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {l}
                  </Link>
                ))}
              </div>
              <MobileMenu items={navItems} />
            </nav>
          </div>
        </header>

        {children}

        {hasWhatsapp ? (
          <a
            href={waLink(t.contact.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.contact.whatsapp}
            className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105"
          >
            <WhatsAppGlyph className="h-7 w-7" />
          </a>
        ) : null}

        <footer className="border-t border-sand-deep bg-sand">
          <div className="mx-auto max-w-6xl px-6 py-12 text-center">
            <Image
              src="/logo.jpg"
              alt="Tree of Life Sound Temple"
              width={192}
              height={192}
              className="mx-auto mb-7 h-24 w-24 rounded-full object-cover shadow-md ring-1 ring-gold/30"
            />
            <p className="mx-auto max-w-xl font-display text-lg italic text-ink-soft">
              {t.footer}
            </p>
            <p className="mt-6 text-xs tracking-wide text-ink-soft/70">
              © {new Date().getFullYear()} Marina Ķēniņa
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
