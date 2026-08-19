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
    nav: { events: "Pasākumi", about: "Par mani", services: "Pakalpojumi", candles: "Sveces", bracelets: "Rokassprādzes", contact: "Kontakti" },
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
    bracelets: {
      heading: "Rokassprādzes pēc Tava nodoma",
      teaser: "Ar rokām pītas ar dabīgiem minerāliem un mīlestību.",
      more: "Uzzināt vairāk",
      title: "Rokassprādzes pēc Tava personīgā nodoma",
      lead: "Katru rokassprādzi Marina pin ar rokām, ieliekot tajā sirds siltumu un dabīgus minerālus, kas izvēlēti tieši Tev.",
      story: [
        "Daudzi man jautā par rokassprādzēm, kuras veidoju ar savām rokām. Tāpēc vēlos pastāstīt to stāstu.",
        "Katru rokassprādzi es pinu ar mīlestību, labiem nodomiem un tieši Tavam personīgajam nodomam.",
        "Es pieņemu tikai nelielu skaitu pasūtījumu, jo veidoju tās tikai tad, kad pati jūtos piepildīta un resursu pilna. Man tā nav vienkārši rotaslieta, katrā sprādzē ielieku savu sirds siltumu, uzmanību un dvēseles daļiņu.",
        "Viss sākās ar vienkāršām sarkanām aizsardzības un veiksmes rokassprādzēm. Ar laiku radās vēlme radīt ko īpašāku: iepīt tajās dabīgos minerālus, kas izvēlēti tieši Tavam nodomam un vēlmei.",
        "Un pats skaistākais ir tas, ka viss notika pavisam negaidīti.",
        "Atrodoties atvaļinājumā brīnišķīgajā Maurīcijas salā, savā dzimšanas dienā nolēmu uzdāvināt dažas rokassprādzes. Tieši tad saņēmu savus pirmos pasūtījumus un sajutu, ka tas ir zīmīgs ceļš, kuru vēlos turpināt.",
        "Tajās pašās dienās nodomāju, ka vēlos savās rokassprādzēs izmantot enerģētiskos akmeņus, taču gribēju, lai tās būtu patiesi īpašas.",
        "Un it kā Visums būtu mani sadzirdējis, tajā pašā dienā pludmalē iepazinos ar vietējo juvelieri, kurš rotas veido jau vairāk nekā 20 gadus. Mēs sadraudzējāmies, un viņš man turpat okeāna krastā novadīja nelielu meistarklasi. Vēl vairāk, viņš man uzdāvināja brīnišķīgus dabīgos minerālus, kas šodien ir kļuvuši par manu rokassprādžu neatņemamu daļu.",
        "Esmu bezgalīgi pateicīga Visumam par to, ka tas īstajos brīžos mūsu dzīvē atved īstos cilvēkus.",
      ],
      orderHeading: "Kā pasūtīt",
      orderIntro: "Ja jūti, ka vēlies savu īpašo rokassprādzi, kas radīta tieši Tev, uzraksti man WhatsApp.",
      order: [
        "Ja esi tuvumā, ar prieku satikšos un nodošu rokassprādzi personīgi pie tējas, kafijas vai ceremoniālā kakao tases.",
        "Ja dzīvo tālāk, ar mīlestību nosūtīšu to pa pastu.",
      ],
      signature: "Ar mīlestību un rūpēm, Marina",
      cta: "Pasūtīt rokassprādzi",
      waMessage: "Sveiki, Marina! Vēlos savu personīgo rokassprādzi.",
      back: "Uz sākumu",
    },
    // Toast to Moments. Marinas teksts ir pārņemts burtiski; pārējais
    // (pogas, virsraksti, meta) ir vietnes tehniskās virknes.
    candles: {
      brand: "Toast to Moments",
      brandSub: "Handcrafted candles",
      question: "Kuru mirkli Tu izvēlēsies sev?",
      feelings: [
        { label: "Mieru", slug: "inner-peace" },
        { label: "Mīlestību pret sevi", slug: "self-love" },
        { label: "Enerģiju", slug: "energy" },
        { label: "Pārpilnību", slug: "abundance" },
        { label: "Harmoniju", slug: "harmony" },
        { label: "Spēku", slug: "strength" },
        { label: "Pārliecību", slug: "confidence" },
      ],
      feelingsLast: "Vai varbūt — savu iekšējo gaismu?",
      feelingsLastSlug: "inner-light",
      notJust: "TOAST TO MOMENTS nav tikai aromātiska svece.",
      made: "Katra svece ir radīta noteiktai sajūtai — ar īpaši piemeklētu aromātu, kristālu un mazu rituālu, kas aicina uz mirkli apstāties un pievērsties sev.",
      pillars: ["Kristāls", "Aromāts", "Nodoms", "Mazais rituāls"],
      closing1: "Izvēlies nevis sveci.",
      closing2: "Izvēlies sajūtu, kas Tev šobrīd nepieciešama.",
      brandLine: "Mirklis. Sajūta. Tikai Tev.",
      teaser: "Rokām darinātas sveces ar dabīgiem kristāliem.",
      more: "Skatīt visas sveces",
      collectionHeading: "Izvēlies savu mirkli",
      collectionLead: "Piecpadsmit sveces, katra savai sajūtai.",
      scentLabel: "Aromāts",
      crystalLabel: "Kristāls",
      orderHeading: "Kā pasūtīt",
      orderIntro:
        "Ja jūti, kura svece ir Tava, uzraksti man WhatsApp. Pastāstīšu par pieejamību un nogādāšu to Tev.",
      order: [
        "Ja esi tuvumā, ar prieku nodošu sveci personīgi.",
        "Ja dzīvo tālāk, ar mīlestību nosūtīšu to pa pastu.",
      ],
      cta: "Pasūtīt sveci",
      waMessage: "Sveiki, Marina! Mani interesē Toast to Moments sveces.",
      back: "Uz sākumu",
      metaTitle: "Toast to Moments · Meditācijas sveces",
      metaDescription:
        "Rokām darinātas meditācijas sveces ar dabīgiem kristāliem. Katra svece radīta noteiktai sajūtai, ar aromātu, kristālu un mazu rituālu.",
    },
    footer: "Ar pateicību kļūšu par jūsu pavadoni skaņas, iekšējā līdzsvara un harmonijas pasaulē.",
  },
  ru: {
    meta: {
      title: "Марина Кенина · Звукотерапия и гармония",
      description:
        "Проводник в мир звука, внутреннего баланса и гармонии. Звукотерапия тибетскими чашами и гонгом, трансформационная игра ЛИЛА, женские круги. Рига, Латвия.",
    },
    nav: { events: "Мероприятия", about: "Обо мне", services: "Услуги", candles: "Свечи", bracelets: "Браслеты", contact: "Контакты" },
    tagline: "Ground. Heal. Bloom.",
    hero: {
      kicker: "Марина Кенина · Латвия",
      title: "Услышь себя. Почувствуй покой. Найди равновесие.",
      lead: "Индивидуальные сессии, групповые медитации и ретриты для женщин, которые хотят вернуться к себе.",
      cta: "Ближайшие мероприятия",
    },
    sound: {
      quote: "Звук не только то, что мы слышим.\nЭто пространство, где мы возвращаемся к себе.",
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
      p1: "Я женщина, мама, предприниматель и проводник. Мой путь соединяет логику и чувства, опыт и интуицию, дело и глубину души.",
      p2: "Интерес к внутреннему миру, ценностям и гармонии появился у меня ещё в подростковом возрасте. Со временем я не только применяла эти знания в собственной жизни, но и нашла своё истинное призвание: быть проводником для женщин на пути к себе.",
      p3: "Более 20 лет руковожу предприятием в промышленном бизнесе. Опыт, дисциплина и ответственность стали моими сильными сторонами, но главным моим ресурсом остаются знания, полученные за пределами университетов: через личный путь, саморазвитие и глубокое изучение человеческой природы.",
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
    bracelets: {
      heading: "Браслеты под Ваш личный запрос",
      teaser: "Ручная работа с натуральными минералами и любовью.",
      more: "Подробнее",
      title: "Браслеты под Ваш личный запрос",
      lead: "Каждый браслет Марина плетёт вручную, вкладывая тепло сердца и натуральные минералы, подобранные именно для Вас.",
      story: [
        "Многие спрашивают меня о браслетах, которые я создаю своими руками. Поэтому решила рассказать их историю.",
        "Каждый браслет я плету вручную с любовью, добрыми намерениями и под Ваш личный запрос.",
        "Я принимаю лишь небольшое количество заказов, потому что создаю их только тогда, когда сама нахожусь в ресурсном состоянии. Для меня это не просто украшение, а процесс, в который я вкладываю внимание, тепло и частичку своей души.",
        "Всё началось с простых красных браслетов-оберегов на удачу и защиту. Со временем мне захотелось создавать что-то ещё более особенное: вплетать в них натуральные минералы, подобранные под Ваш запрос и намерение.",
        "Самое удивительное, что всё произошло совершенно неожиданно.",
        "Находясь в отпуске на прекрасном острове Маврикий, в свой день рождения я решила разыграть несколько браслетов. Именно тогда появились мои первые заказы и я почувствовала, что это знак продолжать.",
        "В те же дни я подумала, что хочу работать с энергетическими камнями, но мечтала, чтобы мои браслеты отличались от других.",
        "И словно в ответ на эту мысль, в тот же день я познакомилась на пляже с местным мастером, который уже более 20 лет создаёт ювелирные украшения. Мы разговорились, подружились, и прямо на берегу океана он провёл для меня настоящий мастер-класс. Более того, он поделился со мной прекрасными натуральными минералами, которые сегодня стали неотъемлемой частью моих браслетов.",
        "Я бесконечно благодарна Вселенной за то, что она удивительным образом приводит в нашу жизнь нужных людей именно тогда, когда мы к этому готовы.",
      ],
      orderHeading: "Как заказать",
      orderIntro: "Если Вы чувствуете, что хотите свой особенный браслет, созданный именно для Вас, напишите мне в WhatsApp.",
      order: [
        "Если Вы рядом, с радостью передам браслет лично, и мы сможем познакомиться за чашкой ароматного чая, кофе или церемониального какао.",
        "Если Вы находитесь далеко, с любовью отправлю его почтой.",
      ],
      signature: "С любовью и заботой, Марина",
      cta: "Заказать браслет",
      waMessage: "Здравствуйте, Марина! Хочу браслет под личный запрос.",
      back: "На главную",
    },
    // Toast to Moments. Текст Марины взят дословно; остальное
    // (кнопки, заголовки, мета) это технические строки сайта.
    candles: {
      brand: "Toast to Moments",
      brandSub: "Handcrafted candles",
      question: "Какой момент Ты выберешь для себя?",
      feelings: [
        { label: "Спокойствие", slug: "inner-peace" },
        { label: "Любовь к себе", slug: "self-love" },
        { label: "Энергию", slug: "energy" },
        { label: "Изобилие", slug: "abundance" },
        { label: "Гармонию", slug: "harmony" },
        { label: "Силу", slug: "strength" },
        { label: "Уверенность", slug: "confidence" },
      ],
      feelingsLast: "А может быть — свой внутренний свет?",
      feelingsLastSlug: "inner-light",
      notJust: "TOAST TO MOMENTS — это не просто ароматическая свеча.",
      made: "Каждая свеча создана для определённого состояния — с тщательно подобранным ароматом, кристаллом и маленьким ритуалом, который приглашает на мгновение остановиться и обратить внимание на себя.",
      pillars: ["Кристалл", "Аромат", "Намерение", "Маленький ритуал"],
      closing1: "Выбирай не свечу.",
      closing2: "Выбирай ощущение, которое нужно тебе именно сейчас.",
      brandLine: "Момент. Ощущение. Только для тебя.",
      teaser: "Свечи ручной работы с натуральными кристаллами.",
      more: "Посмотреть все свечи",
      collectionHeading: "Выбери свой момент",
      collectionLead: "Пятнадцать свечей, каждая для своего состояния.",
      scentLabel: "Аромат",
      crystalLabel: "Кристалл",
      orderHeading: "Как заказать",
      orderIntro:
        "Если чувствуете, какая свеча Ваша, напишите мне в WhatsApp. Расскажу о наличии и передам её Вам.",
      order: [
        "Если Вы рядом, с радостью передам свечу лично.",
        "Если Вы находитесь далеко, с любовью отправлю её почтой.",
      ],
      cta: "Заказать свечу",
      waMessage: "Здравствуйте, Марина! Меня интересуют свечи Toast to Moments.",
      back: "На главную",
      metaTitle: "Toast to Moments · Свечи для медитации",
      metaDescription:
        "Свечи ручной работы с натуральными кристаллами. Каждая свеча создана для определённого состояния: аромат, кристалл и маленький ритуал.",
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
