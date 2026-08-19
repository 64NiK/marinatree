import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  dictionary,
  eventWeekday,
  formatEventRange,
  hasLang,
  type Lang,
} from "@/content/dictionary";
import { events } from "@/content/events";
import { candlePhoto } from "@/content/candles";
import { hasWhatsapp, waLink } from "@/content/contact";
import {
  CandleGlyph,
  LeafDivider,
  Lotus,
  SoundCircles,
  Sprig,
  Waves,
  WhatsAppGlyph,
} from "../decor";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-10 flex items-center gap-4">
    <Lotus className="h-6 w-10 shrink-0 text-forest" />
    <h2 className="font-display text-3xl text-night sm:text-4xl">{children}</h2>
    <LeafDivider className="hidden h-4 w-28 shrink-0 text-gold sm:block" />
    <span className="h-px flex-1 bg-sand-deep" />
  </div>
);

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang: rawLang } = await params;
  if (!hasLang(rawLang)) notFound();
  const lang = rawLang as Lang;
  const t = dictionary[lang];

  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events
    .filter((e) => (e.endDate ?? e.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <SoundCircles className="pointer-events-none absolute left-[38%] top-6 hidden h-44 w-44 text-gold opacity-45 lg:block" />
        <Sprig className="pointer-events-none absolute -right-14 top-[20.5rem] h-44 w-28 -scale-x-100 -rotate-[6deg] text-forest opacity-35 sm:right-auto sm:-left-20 sm:top-auto sm:bottom-2 sm:h-64 sm:w-40 sm:scale-x-100 sm:rotate-[10deg] sm:opacity-90" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-28 sm:pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-24">
          <div className="relative">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">
              {t.hero.kicker}
            </p>
            <h1 className="font-display text-4xl leading-tight text-night sm:text-5xl lg:text-[3.4rem]">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              {t.hero.lead}
            </p>
            <a
              href="#events"
              className="mt-8 inline-block rounded-full bg-night px-7 py-3 text-sm tracking-wide text-cream transition-colors hover:bg-night-soft"
            >
              {t.hero.cta}
            </a>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-sand" aria-hidden />
            <Image
              src="/photos/marina-blue.jpg"
              alt={t.hero.kicker}
              width={900}
              height={1350}
              priority
              className="relative aspect-[3/4] w-full rounded-[1.6rem] object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Quiet transition — softens the step into events */}
      <section className="linen relative overflow-hidden bg-sand">
        <SoundCircles className="pointer-events-none absolute -left-16 -top-14 hidden h-52 w-52 text-gold-soft opacity-50 sm:block" />
        <Waves className="pointer-events-none absolute bottom-3 left-1/2 h-12 w-[34rem] -translate-x-1/2 text-forest-soft/40" />
        <div className="mx-auto grid max-w-3xl items-center gap-8 px-6 py-10 sm:grid-cols-[1fr_auto] sm:gap-12 lg:py-14">
          <blockquote className="font-display text-2xl italic leading-snug text-forest sm:text-[1.7rem]">
            {t.sound.quote.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </blockquote>
          <div className="relative mx-auto w-[11rem] sm:mx-0 sm:w-[12rem]">
            <div className="absolute -inset-3 rounded-[1.8rem] bg-cream" aria-hidden />
            <Image
              src="/photos/gong-mallet.jpg"
              alt=""
              width={1066}
              height={1600}
              className="relative aspect-[2/3] w-full rounded-[1.4rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="scroll-mt-20 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading>{t.events.heading}</SectionHeading>
          {upcoming.length === 0 ? (
            <p className="font-display text-xl italic text-ink-soft">{t.events.empty}</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {upcoming.map((e, i) => {
                const dateLabel = formatEventRange(e.date, e.endDate, lang);
                const dayBadge = e.endDate
                  ? `${new Date(e.date).getDate()}–${new Date(e.endDate).getDate()}`
                  : `${new Date(e.date).getDate()}`;
                const monthBadge = new Intl.DateTimeFormat(lang === "lv" ? "lv-LV" : "ru-RU", {
                  month: "short",
                })
                  .format(new Date(e.date))
                  .replace(".", "");

                // Alternate a gold / earth-green accent so the covers differ.
                const accent =
                  i % 2 === 0
                    ? { glow: "bg-gold/35", mark: "text-gold", frame: "border-gold/50", wave: "text-gold-soft/80" }
                    : { glow: "bg-forest/35", mark: "text-forest", frame: "border-forest/50", wave: "text-forest-soft/90" };

                const dateBadge = (
                  <span className="absolute left-4 top-4 z-10 flex flex-col items-center rounded-xl bg-night/90 px-3.5 py-2 text-cream shadow-sm backdrop-blur">
                    <span className="font-display text-2xl leading-none">{dayBadge}</span>
                    <span className="mt-0.5 text-[10px] uppercase tracking-wider text-cream/80">
                      {monthBadge}
                    </span>
                  </span>
                );

                // Designed cover by default; a real photo (e.image) overrides it.
                const cover = e.image ? (
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={e.image}
                      alt={e.title[lang]}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      className="absolute inset-0 bg-gradient-to-t from-night/75 via-night/10 to-transparent"
                      aria-hidden
                    />
                    <h3 className="absolute inset-x-5 bottom-4 font-display text-2xl leading-snug text-cream">
                      {e.title[lang]}
                    </h3>
                    {dateBadge}
                  </div>
                ) : (
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-cream via-sand to-sand-deep">
                    <span className="linen absolute inset-0" aria-hidden />
                    <span
                      className={`absolute -bottom-14 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full ${accent.glow} blur-3xl`}
                      aria-hidden
                    />
                    <SoundCircles className="pointer-events-none absolute -right-8 -bottom-8 h-36 w-36 text-gold opacity-30" />
                    <Sprig className="pointer-events-none absolute -right-3 -top-3 h-44 w-24 -rotate-12 -scale-x-100 text-forest opacity-55" />
                    <span className={`pointer-events-none absolute inset-3 rounded-2xl border ${accent.frame}`} aria-hidden />
                    <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
                      <Lotus className={`mb-3 h-6 w-11 ${accent.mark}`} />
                      <h3 className="font-display text-3xl leading-tight text-night sm:text-[2rem]">
                        {e.title[lang]}
                      </h3>
                      <LeafDivider className={`my-3 h-4 w-32 ${accent.wave}`} />
                      {e.tagline ? (
                        <p className="max-w-[17rem] font-display text-lg italic leading-snug text-ink-soft">
                          {e.tagline[lang]}
                        </p>
                      ) : null}
                    </div>
                    {dateBadge}
                  </div>
                );

                const body = (
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sand-deep bg-cream transition-shadow hover:shadow-lg hover:shadow-sand-deep/40">
                    {cover}
                    <div className="flex min-w-0 flex-1 flex-col p-6 sm:p-7">
                      <p className="text-xs uppercase tracking-wider text-gold">
                        {dateLabel}
                        {e.time ? ` · ${e.time}` : ""}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {e.description[lang]}
                      </p>
                      <p className="mt-3 text-sm text-ink">{e.location[lang]}</p>
                      {e.slug ? (
                        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-night transition-colors group-hover:text-gold">
                          {t.events.more}
                          <span aria-hidden className="transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </span>
                      ) : null}
                    </div>
                  </article>
                );

                return e.slug ? (
                  <Link key={e.id} href={`/${lang}/events/${e.slug}`} className="block">
                    {body}
                  </Link>
                ) : (
                  <div key={e.id}>{body}</div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Candles teaser: same compact card as the bracelets one below, so the
          two product lines sit at equal weight on the homepage. */}
      <section id="candles" className="scroll-mt-20 py-9 lg:py-14">
        <div className="mx-auto max-w-4xl px-6">
          <Link href={`/${lang}/candles`} className="group block">
            <article className="flex overflow-hidden rounded-2xl border border-sand-deep bg-cream transition-shadow hover:shadow-lg hover:shadow-sand-deep/40 md:grid md:grid-cols-[0.42fr_1fr]">
              <Image
                src={candlePhoto("inner-peace")}
                alt={t.candles.brand}
                width={460}
                height={553}
                sizes="(min-width: 768px) 34vw, 32vw"
                className="aspect-[4/5] w-[34%] shrink-0 self-center object-cover transition-transform duration-500 group-hover:scale-105 md:w-full md:self-stretch"
              />
              <div className="relative flex flex-col justify-center p-5 sm:p-6 lg:p-9">
                <CandleGlyph className="pointer-events-none absolute right-3 top-3 hidden h-16 w-11 text-gold opacity-30 lg:block" />
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-gold">
                  {t.candles.brand}
                </p>
                <h2 className="mt-2 font-display text-xl leading-snug text-night sm:text-3xl">
                  {t.candles.question}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
                  {t.candles.teaser}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-night transition-colors group-hover:text-gold">
                  {t.candles.more}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </article>
          </Link>
        </div>
      </section>


      {/* Bracelets teaser */}
      <section id="bracelets" className="scroll-mt-20 py-9 lg:py-14">
        <div className="mx-auto max-w-4xl px-6">
          <Link href={`/${lang}/bracelets`} className="group block">
            <article className="flex overflow-hidden rounded-2xl border border-sand-deep bg-cream transition-shadow hover:shadow-lg hover:shadow-sand-deep/40 md:grid md:grid-cols-[0.42fr_1fr]">
              <Image
                src="/photos/bracelets/blue-black.jpg"
                alt={t.bracelets.heading}
                width={1124}
                height={1999}
                sizes="(min-width: 768px) 34vw, 32vw"
                className="aspect-[4/5] w-[34%] shrink-0 self-center object-cover transition-transform duration-500 group-hover:scale-105 md:w-full md:self-stretch"
              />
              <div className="relative flex flex-col justify-center p-5 sm:p-6 lg:p-9">
                <Sprig className="pointer-events-none absolute -right-2 -top-2 hidden h-28 w-16 rotate-[200deg] text-forest opacity-40 lg:block" />
                <h2 className="font-display text-xl leading-snug text-night sm:text-3xl">
                  {t.bracelets.heading}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">{t.bracelets.teaser}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-night transition-colors group-hover:text-gold">
                  {t.bracelets.more}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* About */}
      <section id="about" className="linen scroll-mt-20 bg-sand py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative order-last mx-auto max-w-[15rem] sm:max-w-[17rem] lg:order-first lg:mx-0 lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2rem] bg-cream" aria-hidden />
            <Image
              src="/photos/gongs.jpg"
              alt={t.about.heading}
              width={2160}
              height={3240}
              className="relative aspect-[2/3] w-full rounded-[1.6rem] object-cover"
            />
          </div>
          <div>
            <SectionHeading>{t.about.heading}</SectionHeading>
            <p className="font-display text-2xl italic leading-snug text-ink">{t.about.p1}</p>
            <p className="mt-5 leading-relaxed text-ink-soft">{t.about.p2}</p>
            <p className="mt-4 leading-relaxed text-ink-soft">{t.about.p3}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading>{t.services.heading}</SectionHeading>
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {t.services.items.map((s, i) => (
              <article
                key={s.title}
                className="flex overflow-hidden rounded-2xl border border-sand-deep bg-cream md:flex-col"
              >
                <Image
                  src={["/photos/bowl-hand.jpg", "/photos/lila-game.jpg", "/photos/heart-hands.jpg"][i]}
                  alt={s.title}
                  width={700}
                  height={480}
                  className="aspect-square w-[38%] shrink-0 object-cover md:aspect-[3/2] md:w-full"
                />
                <div className="min-w-0 p-5 md:p-6">
                  <h3 className="font-display text-lg leading-snug text-night md:text-xl">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft md:mt-2">{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative scroll-mt-20 overflow-hidden py-16 lg:py-24">
        <Sprig className="pointer-events-none absolute -left-4 bottom-2 hidden h-44 w-24 rotate-[35deg] text-forest opacity-40 lg:block" />
        <Sprig className="pointer-events-none absolute -right-4 top-2 hidden h-44 w-24 rotate-[215deg] text-forest opacity-40 lg:block" />
        <Waves className="pointer-events-none absolute bottom-5 left-1/2 h-8 w-[22rem] -translate-x-1/2 text-forest-soft/30" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Lotus className="mx-auto mb-3 h-7 w-12 text-forest" />
          <h2 className="font-display text-3xl text-night sm:text-4xl">{t.contact.heading}</h2>
          <p className="mt-4 text-lg text-ink-soft">{t.contact.text}</p>
          {/* Auto-switches to a WhatsApp button once the real number is set in content/contact.ts */}
          {hasWhatsapp ? (
            <a
              href={waLink(t.contact.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-forest px-7 py-3 text-sm font-medium text-cream shadow-sm transition-colors hover:bg-forest-soft"
            >
              <WhatsAppGlyph className="h-5 w-5" />
              {t.contact.whatsapp}
            </a>
          ) : (
            <p className="mt-6 inline-block rounded-full border border-sand-deep bg-sand px-6 py-2.5 text-sm text-ink-soft">
              {t.contact.soon}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
