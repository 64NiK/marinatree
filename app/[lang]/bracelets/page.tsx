import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { dictionary, hasLang, langs, type Lang } from "@/content/dictionary";
import { hasWhatsapp, waLink } from "@/content/contact";
import { Lotus, Sprig, WhatsAppGlyph } from "../../decor";

const gallery = [
  "/photos/bracelets/making.jpg",
  "/photos/bracelets/green.jpg",
  "/photos/bracelets/blue-black.jpg",
  "/photos/bracelets/handmade.jpg",
];

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/bracelets">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLang(lang)) return {};
  const b = dictionary[lang as Lang].bracelets;
  return { title: `${b.title} · Tree of Life ST`, description: b.teaser };
}

export default async function BraceletsPage({
  params,
}: PageProps<"/[lang]/bracelets">) {
  const { lang: rawLang } = await params;
  if (!hasLang(rawLang)) notFound();
  const lang = rawLang as Lang;
  const t = dictionary[lang];
  const b = t.bracelets;

  const orderHref = hasWhatsapp ? waLink(b.waMessage) : `/${lang}#contact`;
  const orderProps = hasWhatsapp
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <main className="pt-24 sm:pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <Link
          href={`/${lang}#bracelets`}
          className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
        >
          <span aria-hidden>←</span>
          {b.back}
        </Link>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <Sprig className="pointer-events-none absolute -left-11 top-4 hidden h-56 w-28 rotate-[8deg] text-forest opacity-60 lg:block" />
        <section className="mx-auto mt-6 grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Tree of Life ST</p>
          <h1 className="mt-3 font-display text-4xl leading-tight text-night sm:text-5xl">
            {b.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{b.lead}</p>
          <a
            href={orderHref}
            {...orderProps}
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-night px-7 py-3 text-sm tracking-wide text-cream transition-colors hover:bg-night-soft"
          >
            {hasWhatsapp ? <WhatsAppGlyph className="h-4 w-4" /> : null}
            {b.cta}
          </a>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-sand" aria-hidden />
          <Image
            src="/photos/bracelets/rose-sea.jpg"
            alt={b.title}
            width={1002}
            height={1570}
            priority
            className="relative max-h-[68vh] w-full rounded-[1.6rem] object-cover lg:max-h-none"
          />
        </div>
        </section>
      </div>

      {/* Story */}
      <section className="mx-auto max-w-2xl px-6 py-16 lg:py-20">
        <Lotus className="mx-auto mb-6 h-7 w-12 text-forest" />
        <div className="space-y-5">
          {b.story.map((p, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "font-display text-2xl italic leading-snug text-ink"
                  : "leading-relaxed text-ink-soft"
              }
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-6 pb-16 lg:pb-20">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {gallery.map((src) => (
            <div key={src} className="overflow-hidden rounded-2xl border border-sand-deep bg-cream">
              <Image
                src={src}
                alt=""
                width={800}
                height={800}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* How to order */}
      <section className="linen bg-sand py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Lotus className="mx-auto mb-3 h-7 w-12 text-forest" />
          <h2 className="font-display text-3xl text-night sm:text-4xl">{b.orderHeading}</h2>
          <p className="mt-5 leading-relaxed text-ink-soft">{b.orderIntro}</p>
          <ul className="mx-auto mt-6 max-w-xl space-y-3 text-left">
            {b.order.map((line) => (
              <li key={line} className="flex items-start gap-3 text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
          <a
            href={orderHref}
            {...orderProps}
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-forest px-8 py-3 text-sm font-medium text-cream transition-colors hover:bg-forest-soft"
          >
            <WhatsAppGlyph className="h-5 w-5" />
            {b.cta}
          </a>
          <p className="mt-8 font-display text-xl italic text-ink-soft">{b.signature}</p>
        </div>
      </section>
    </main>
  );
}
