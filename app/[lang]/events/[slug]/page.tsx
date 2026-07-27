import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  dictionary,
  formatEventRange,
  hasLang,
  langs,
  type Lang,
} from "@/content/dictionary";
import { events } from "@/content/events";
import { hasWhatsapp, waLink } from "@/content/contact";
import { Lotus, WhatsAppGlyph } from "../../../decor";

export function generateStaticParams() {
  return langs.flatMap((lang) =>
    events.filter((e) => e.slug).map((e) => ({ lang, slug: e.slug! })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/events/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLang(lang)) return {};
  const event = events.find((e) => e.slug === slug);
  if (!event) return {};
  return {
    title: `${event.title[lang as Lang]} · Marina Ķēniņa`,
    description: event.description[lang as Lang],
  };
}

export default async function EventPage({
  params,
}: PageProps<"/[lang]/events/[slug]">) {
  const { lang: rawLang, slug } = await params;
  if (!hasLang(rawLang)) notFound();
  const lang = rawLang as Lang;
  const t = dictionary[lang];
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const dateLabel = formatEventRange(event.date, event.endDate, lang);

  // Reserve → WhatsApp with a pre-filled, event-specific message.
  // Falls back to the contact section until a real number is set.
  const reserveMessage = `${t.event.reserveIntro} «${event.title[lang]}» (${dateLabel}).`;
  const reserveHref = hasWhatsapp ? waLink(reserveMessage) : `/${lang}#contact`;
  const reserveProps = hasWhatsapp
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <main className="pt-24 sm:pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <Link
          href={`/${lang}#events`}
          className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
        >
          <span aria-hidden>←</span>
          {t.event.back}
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto mt-6 grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold">
            {dateLabel}
            {event.time ? ` · ${event.time}` : ""}
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight text-night sm:text-5xl">
            {event.title[lang]}
          </h1>
          {event.tagline ? (
            <p className="mt-3 font-display text-2xl italic text-forest-soft">
              {event.tagline[lang]}
            </p>
          ) : null}
          {event.intro ? (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              {event.intro[lang]}
            </p>
          ) : null}

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <div>
              <dt className="uppercase tracking-wider text-forest-soft">{t.event.when}</dt>
              <dd className="mt-1 text-ink">
                {dateLabel}
                {event.time ? `, ${event.time}` : ""}
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-wider text-forest-soft">{t.event.where}</dt>
              <dd className="mt-1 text-ink">{event.location[lang]}</dd>
            </div>
          </dl>

          <a
            href={reserveHref}
            {...reserveProps}
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-night px-7 py-3 text-sm tracking-wide text-cream transition-colors hover:bg-night-soft"
          >
            {hasWhatsapp ? <WhatsAppGlyph className="h-4 w-4" /> : null}
            {t.event.reserveCta}
          </a>
        </div>

        {event.poster ? (
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-sand" aria-hidden />
            <Image
              src={event.poster}
              alt={event.title[lang]}
              width={1000}
              height={1400}
              priority
              className="relative max-h-[68vh] w-full rounded-[1.6rem] object-cover object-top lg:max-h-none"
            />
          </div>
        ) : null}
      </section>

      {/* What awaits */}
      {event.includes?.length ? (
        <section className="linen mt-16 bg-sand py-16 lg:mt-20">
          <div className="mx-auto max-w-5xl px-6">
            <Lotus className="mx-auto mb-3 h-7 w-12 text-forest" />
            <h2 className="mb-8 text-center font-display text-3xl text-night sm:text-4xl">
              {t.event.whatAwaits}
            </h2>
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {event.includes.map((item) => (
                <li key={item[lang]} className="flex items-start gap-3 text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                  <span className="leading-relaxed">{item[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Facilitators */}
      {event.facilitators?.length ? (
        (() => {
          // 4+ people: fewer, larger columns with a taller image so the
          // per-person poster stays readable. 3 or fewer: 3 across.
          const portrait = event.facilitators.length >= 4;
          return (
            <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
              <Lotus className="mx-auto mb-3 h-7 w-12 text-forest" />
              <h2 className="mb-10 text-center font-display text-3xl text-night sm:text-4xl">
                {t.event.facilitators}
              </h2>
              <div
                className={`mx-auto grid gap-7 sm:grid-cols-2 ${
                  portrait ? "max-w-5xl lg:grid-cols-2" : "max-w-6xl lg:grid-cols-3"
                }`}
              >
                {event.facilitators.map((f) => (
                  <article
                    key={f.name}
                    className="overflow-hidden rounded-2xl border border-sand-deep bg-cream"
                  >
                    <Image
                      src={f.image}
                      alt={f.name}
                      width={800}
                      height={portrait ? 1200 : 800}
                      className={`w-full object-cover object-top ${
                        portrait ? "aspect-[2/3] max-h-[60vh] sm:max-h-none" : "aspect-square"
                      }`}
                    />
                    <div className="p-5">
                      <h3 className="font-display text-xl text-night">{f.name}</h3>
                      <p className="mt-0.5 text-xs uppercase tracking-wider text-gold">{f.role[lang]}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.bio[lang]}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })()
      ) : null}

      {/* Schedule */}
      {event.schedule?.length ? (
        <section className="linen bg-sand py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <Lotus className="mx-auto mb-3 h-7 w-12 text-forest" />
            <h2 className="mb-10 text-center font-display text-3xl text-night sm:text-4xl">
              {t.event.schedule}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {event.schedule.map((day) => (
                <div key={day.label[lang]} className="rounded-2xl border border-sand-deep bg-cream p-6">
                  <p className="font-display text-2xl text-night">{day.label[lang]}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-wider text-forest-soft">
                    {day.title[lang]}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {day.items.map((item) => (
                      <li key={item.time + item.label[lang]} className="flex gap-3 text-sm">
                        <span className="w-12 shrink-0 font-medium text-gold">{item.time}</span>
                        <span className="leading-snug text-ink-soft">{item.label[lang]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Reserve */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center lg:py-20">
        <p className="font-display text-2xl italic text-ink">
          {event.tagline ? event.tagline[lang] : event.title[lang]}
        </p>
        <a
          href={reserveHref}
          {...reserveProps}
          className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-night px-8 py-3 text-sm tracking-wide text-cream transition-colors hover:bg-night-soft"
        >
          {hasWhatsapp ? <WhatsAppGlyph className="h-4 w-4" /> : null}
          {t.event.reserveCta}
        </a>
      </section>
    </main>
  );
}
