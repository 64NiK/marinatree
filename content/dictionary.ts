export type Lang = "lv" | "ru";

export const langs: Lang[] = ["lv", "ru"];

export const hasLang = (l: string): l is Lang => langs.includes(l as Lang);

export const dictionary = {
  lv: {
    meta: {
      title: "Marina Ķēniņa · Skaņu terapija un harmonija",
      description:
        "Pavadone skaņas, iekšējā līdzsvara un harmonijas pasaulē. Skaņu terapija ar Tibetas bļodām un gongu, transformācijas spēle LĪLA, sievišķie loki. Rīga, Latvija.",
    },
    nav: { events: "Pasākumi", about: "Par mani", services: "Pakalpojumi", contact: "Kontakti" },
    tagline: "Ground. Heal. Bloom.",
    hero: {
      kicker: "Marina Ķēniņa · Latvija",
      title: "Sadzirdi sevi. Sajūti mieru. Atrodi līdzsvaru.",
      lead: "Individuālas sesijas, grupu meditācijas un retrīti sievietēm, kuras vēlas atgriezties pie sevis.",
      cta: "Tuvākie pasākumi",
    },
    sound: {
      quote: "Skaņa nav tikai tas, ko dzirdam.\nTā ir telpa, kurā atgriežamies pie sevis.",
    },
    events: {
      heading: "Tuvākie pasākumi",
      empty: "Šobrīd top jauni pasākumi, ieskaties drīz vēl!",
      price: "Dalība",
      more: "Uzzināt vairāk",
    },
    event: {
      back: "Uz sākumu",
      when: "Kad",
      where: "Kur",
      whatAwaits: "Kas tevi sagaida",
      facilitators: "Vadītājas",
      schedule: "Dienas plāns",
      reserveCta: "Rezervēt vietu",
      reserveIntro: "Sveiki, Marina! Vēlos rezervēt vietu pasākumā",
    },
    about: {
      heading: "Par mani",
      p1: "Es esmu sieviete, mamma, uzņēmēja un pavadone. Mans ceļš ir loģikas un sajūtu, pieredzes un intuīcijas, darbības un dvēseles dziļuma savienojums.",
      p2: "Interese par iekšējo pasauli, vērtībām un harmoniju man radās jau pusaudžu gados. Ar laiku es ne tikai pielietoju šīs zināšanas savā dzīvē, bet arī atradu savu patieso aicinājumu: būt par pavadoni sievietēm ceļā pie sevis.",
      p3: "Vairāk nekā 20 gadus vadu uzņēmumu ražošanas biznesā. Pieredze, disciplīna un atbildība ir manas stiprās puses, taču mans galvenais resurss ir zināšanas, kas iegūtas ārpus universitātēm: caur personīgo ceļu, pašizaugsmi un dziļu cilvēka dabas izzināšanu.",
    },
    services: {
      heading: "Kā varu būt noderīga",
      items: [
        {
          title: "Skaņu terapija ar Tibetas bļodām un gongu",
          text: "Dziļa relaksācija, enerģijas atjaunošana, ķermeņa un prāta harmonizēšana.",
        },
        {
          title: "Transformācijas spēle LĪLA",
          text: "Sena gudrība un spēle kā instruments apzinātībai, transformācijai un potenciāla atklāšanai.",
        },
        {
          title: "Komunikācija ar sievietēm",
          text: "Atbalsts, dialogs un dziļa izpratne. Telpa, kurā var būt patiesa tu pati.",
        },
      ],
    },
    contact: {
      heading: "Sazināties",
      text: "Jautājumi par pasākumiem vai individuālu nodarbību? Uzraksti man WhatsApp.",
      soon: "Kontaktinformācija drīzumā.",
      whatsapp: "Rakstīt uz WhatsApp",
      waMessage: "Sveiki, Marina! Man ir jautājums par pasākumiem.",
    },
    footer: "Ar pateicību kļūšu par jūsu pavadoni skaņas, iekšējā līdzsvara un harmonijas pasaulē.",
  },
  ru: {
    meta: {
      title: "Марина Кенина · Звукотерапия и гармония",
      description:
        "Проводник в мир звука, внутреннего баланса и гармонии. Звукотерапия тибетскими чашами и гонгом, трансформационная игра ЛИЛА, женские круги. Рига, Латвия.",
    },
    nav: { events: "Мероприятия", about: "Обо мне", services: "Услуги", contact: "Контакты" },
    tagline: "Ground. Heal. Bloom.",
    hero: {
      kicker: "Марина Кенина · Латвия",
      title: "Услышь себя. Почувствуй покой. Найди равновесие.",
      lead: "Индивидуальные сессии, групповые медитации и ретриты для женщин, которые хотят вернуться к себе.",
      cta: "Ближайшие мероприятия",
    },
    sound: {
      quote: "Звук — это не только то, что мы слышим.\nЭто пространство, где мы возвращаемся к себе.",
    },
    events: {
      heading: "Ближайшие мероприятия",
      empty: "Новые мероприятия уже готовятся, загляните чуть позже!",
      price: "Участие",
      more: "Подробнее",
    },
    event: {
      back: "На главную",
      when: "Когда",
      where: "Где",
      whatAwaits: "Что тебя ждёт",
      facilitators: "Ведущие",
      schedule: "План дня",
      reserveCta: "Забронировать место",
      reserveIntro: "Здравствуйте, Марина! Хочу забронировать место на",
    },
    about: {
      heading: "Обо мне",
      p1: "Я — женщина, мама, предприниматель и проводник. Мой путь — это соединение логики и чувств, опыта и интуиции, дела и глубины души.",
      p2: "Интерес к внутреннему миру, ценностям и гармонии появился у меня ещё в подростковом возрасте. Со временем я не только применяла эти знания в собственной жизни, но и нашла своё истинное призвание: быть проводником для женщин на пути к себе.",
      p3: "Более 20 лет руковожу предприятием в промышленном бизнесе. Опыт, дисциплина и ответственность — мои сильные стороны, но главный мой ресурс — это знания, полученные за пределами университетов: через личный путь, саморазвитие и глубокое изучение человеческой природы.",
    },
    services: {
      heading: "Чем я могу быть полезна",
      items: [
        {
          title: "Звукотерапия тибетскими чашами и гонгом",
          text: "Глубокое расслабление, восстановление энергии, гармонизация тела и ума.",
        },
        {
          title: "Трансформационная игра ЛИЛА",
          text: "Древняя мудрость и игра как инструмент осознания, трансформации и раскрытия потенциала.",
        },
        {
          title: "Коммуникация с женщинами",
          text: "Поддержка, диалог и глубокое понимание. Пространство, где можно быть собой.",
        },
      ],
    },
    contact: {
      heading: "Связаться",
      text: "Вопросы о мероприятиях или индивидуальной практике? Напишите мне в WhatsApp.",
      soon: "Контакты скоро появятся.",
      whatsapp: "Написать в WhatsApp",
      waMessage: "Здравствуйте, Марина! У меня вопрос о мероприятиях.",
    },
    footer: "С благодарностью стану вашим проводником в мир звука, внутреннего баланса и гармонии.",
  },
} as const;

export const formatEventDate = (iso: string, lang: Lang) =>
  new Intl.DateTimeFormat(lang === "lv" ? "lv-LV" : "ru-RU", {
    day: "numeric",
    month: "long",
  }).format(new Date(iso));

export const eventWeekday = (iso: string, lang: Lang) =>
  new Intl.DateTimeFormat(lang === "lv" ? "lv-LV" : "ru-RU", {
    weekday: "long",
  }).format(new Date(iso));

// "2. augusts" for a single day, "28.–30. augusts" for a range.
export const formatEventRange = (start: string, end: string | undefined, lang: Lang) => {
  const locale = lang === "lv" ? "lv-LV" : "ru-RU";
  const s = new Date(start);
  if (!end) return formatEventDate(start, lang);
  const e = new Date(end);
  const month = new Intl.DateTimeFormat(locale, { month: "long" }).format(e);
  if (s.getMonth() === e.getMonth()) return `${s.getDate()}.–${e.getDate()}. ${month}`;
  return `${formatEventDate(start, lang)} – ${formatEventDate(end, lang)}`;
};
