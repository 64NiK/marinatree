import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { dictionary, hasLang, langs, type Lang } from "@/content/dictionary";
import { candlePhoto, candles } from "@/content/candles";
import { hasWhatsapp, waLink } from "@/content/contact";
import {
  AromaGlyph,
  CandleGlyph,
  CrystalGlyph,
  IntentionGlyph,
  LeafDivider,
  RitualGlyph,
  Sprig,
  WhatsAppGlyph,
} from "../../decor";

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/candles">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLang(lang)) return {};
  const c = dictionary[lang as Lang].candles;
  return { title: `${c.metaTitle} · Tree of Life ST`, description: c.metaDescription };
}

export default async function CandlesPage({ params }: PageProps<"/[lang]/candles">) {
  const { lang: rawLang } = await params;
  if (!hasLang(rawLang)) notFound();
  const lang = rawLang as Lang;
  const t = dictionary[lang];
  const c = t.candles;

  const orderHref = hasWhatsapp ? waLink(c.waMessage) : `/${lang}#contact`;
  const orderProps = hasWhatsapp
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  const pillarGlyphs = [CrystalGlyph, AromaGlyph, IntentionGlyph, RitualGlyph];

  return (
    <main>
      {/* The site header is dark text on a transparent strip, so the top of the
          page has to stay cream. The dark hero starts below it. */}
      <div className="mx-auto max-w-6xl px-6 pb-7 pt-24 sm:pt-28">
        <Link
          href={`/${lang}#candles`}
          className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
        >
          <span aria-hidden>←</span>
          {c.back}
        </Link>
      </div>

      {/* Hero: dark, to carry the candlelit mood over from the homepage teaser. */}
      <div className="relative overflow-hidden bg-night text-cream">
        <span
          className="pointer-events-none absolute -left-28 top-10 h-80 w-80 rounded-full bg-gold/25 blur-3xl"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute -right-24 -bottom-16 h-96 w-96 rounded-full bg-gold-soft/15 blur-3xl"
          aria-hidden
        />

        <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-14 lg:grid-cols-[1fr_0.8fr] lg:gap-14 lg:pb-20 lg:pt-16">
          <div>
            <div className="flex items-center gap-3">
              <CandleGlyph className="h-10 w-7 shrink-0 text-gold-soft" />
              <span className="flex flex-col leading-none">
                <span className="text-xs uppercase tracking-[0.3em] text-gold-soft">
                  {c.brand}
                </span>
                <span className="mt-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-cream/45">
                  {c.brandSub}
                </span>
              </span>
            </div>

            <h1 className="mt-6 font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-[3.4rem]">
              {c.question}
            </h1>

            {/* The feelings list, straight from Marina's text. Each one is a
                jump link down to that candle. */}
            <div className="mt-7 flex flex-wrap gap-2 sm:gap-2.5">
              {c.feelings.map((f) => (
                <a
                  key={f.slug}
                  href={`#${f.slug}`}
                  className="rounded-full border border-cream/25 px-3.5 py-1.5 text-sm text-cream/90 transition-colors hover:border-gold-soft hover:bg-cream/10 hover:text-cream"
                >
                  {f.label}
                </a>
              ))}
            </div>
            <p className="mt-5 font-display text-xl italic text-gold-soft sm:text-2xl">
              <a href={`#${c.feelingsLastSlug}`} className="transition-colors hover:text-gold">
                {c.feelingsLast}
              </a>
            </p>
          </div>

          {/* Capped at 24rem: the source crop is 460px wide, so a wider frame
              would render soft on a retina screen. */}
          <div className="relative mx-auto w-full max-w-[19rem] lg:max-w-[24rem]">
            <div className="absolute -inset-3 rounded-[2rem] bg-cream/10" aria-hidden />
            <Image
              src={candlePhoto("inner-peace")}
              alt={c.brand}
              width={460}
              height={553}
              priority
              sizes="(min-width: 1024px) 384px, 304px"
              className="relative aspect-[5/6] w-full rounded-[1.6rem] object-cover"
            />
          </div>
        </section>

        {/* Manifesto + the four things every candle carries. */}
        <section className="relative border-t border-cream/10">
          <div className="mx-auto max-w-3xl px-6 py-14 text-center lg:py-16">
            <p className="font-display text-2xl italic leading-snug text-cream sm:text-[1.7rem]">
              {c.notJust}
            </p>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-cream/70">{c.made}</p>

            <ul className="mx-auto mt-10 grid max-w-lg grid-cols-2 gap-x-4 gap-y-8 sm:max-w-none sm:grid-cols-4">
              {c.pillars.map((label, i) => {
                const Glyph = pillarGlyphs[i];
                return (
                  <li key={label} className="flex flex-col items-center gap-2.5">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cream/15 bg-cream/5">
                      <Glyph className="h-7 w-7 text-gold-soft" />
                    </span>
                    <span className="text-sm tracking-wide text-cream/85">{label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>

      {/* The collection */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        <Sprig className="pointer-events-none absolute -left-12 top-24 hidden h-56 w-28 rotate-[8deg] text-forest opacity-45 lg:block" />
        <Sprig className="pointer-events-none absolute -right-12 bottom-24 hidden h-56 w-28 rotate-[188deg] text-forest opacity-45 lg:block" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl text-night sm:text-4xl">
              {c.collectionHeading}
            </h2>
            <LeafDivider className="mx-auto mt-4 h-4 w-32 text-gold" />
            <p className="mt-4 text-ink-soft">{c.collectionLead}</p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {candles.map((candle) => (
              <article
                key={candle.slug}
                id={candle.slug}
                className="group flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-sand-deep bg-cream transition-shadow hover:shadow-lg hover:shadow-sand-deep/40"
              >
                <div className="overflow-hidden">
                  <Image
                    src={candlePhoto(candle.slug)}
                    alt={candle.name[lang]}
                    width={460}
                    height={553}
                    sizes="(min-width: 1024px) 30vw, 45vw"
                    className="aspect-[5/6] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
                  {/* Reserve two lines so the scent/crystal rows line up across
                      a row of cards whether the name wraps or not. */}
                  <h3 className="min-h-[3.1rem] font-display text-lg leading-snug text-night sm:min-h-[3.45rem] sm:text-xl">
                    {candle.name[lang]}
                  </h3>

                  <dl className="mb-3.5 mt-3 space-y-1.5 text-xs sm:text-sm">
                    <div className="flex items-start gap-2">
                      <dt className="sr-only">{c.scentLabel}</dt>
                      <AromaGlyph className="mt-px h-4 w-4 shrink-0 text-forest-soft" />
                      <dd className="min-w-0 text-ink-soft">{candle.scent[lang]}</dd>
                    </div>
                    <div className="flex items-start gap-2">
                      <dt className="sr-only">{c.crystalLabel}</dt>
                      <CrystalGlyph className="mt-px h-4 w-4 shrink-0 text-gold" />
                      <dd className="min-w-0 text-ink-soft">{candle.crystal[lang]}</dd>
                    </div>
                  </dl>

                  {/* mt-auto pins this to the card foot, so the rules across a
                      row align even when a scent name wraps. */}
                  <p className="mt-auto border-t border-sand-deep pt-3.5 text-xs leading-relaxed text-ink-soft sm:text-sm">
                    {candle.forWhat[lang]}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing lines + how to order */}
      <section className="linen bg-sand py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <CandleGlyph className="mx-auto h-11 w-8 text-gold" />
          <p className="mt-6 font-display text-2xl italic leading-snug text-ink sm:text-3xl">
            {c.closing1}
            <span className="mt-1 block">{c.closing2}</span>
          </p>

          <div className="mt-10 border-t border-sand-deep pt-10">
            <h2 className="font-display text-3xl text-night sm:text-4xl">{c.orderHeading}</h2>
            <p className="mt-5 leading-relaxed text-ink-soft">{c.orderIntro}</p>
            <ul className="mx-auto mt-6 max-w-xl space-y-3 text-left">
              {c.order.map((line) => (
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
              {hasWhatsapp ? <WhatsAppGlyph className="h-5 w-5" /> : null}
              {c.cta}
            </a>
          </div>

          <p className="mt-12 text-xs uppercase tracking-[0.3em] text-gold">{c.brand}</p>
          <p className="mt-3 font-display text-xl italic text-ink-soft">{c.brandLine}</p>
        </div>
      </section>
    </main>
  );
}
