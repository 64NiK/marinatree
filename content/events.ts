// ============================================================
// PASĀKUMI / МЕРОПРИЯТИЯ
//
// Nik: this is the file you touch when Marina sends events.
// Add a new object to the array, save, redeploy. Events whose
// (end) date is in the past are hidden automatically.
//
// A minimal event only needs: id, date, title, description,
// location. Add the optional fields (slug, image, facilitators,
// schedule, includes...) and the event gets its own detail page
// at /<lang>/events/<slug>. Leave slug out → just a card.
//
// date / endDate: "YYYY-MM-DD".  time: free text ("13:00–20:00").
// price is free text too ("25 EUR", "Ziedojums / Донейшн"...).
// ============================================================

type L = { lv: string; ru: string };

export type Facilitator = {
  name: string;
  role: L;
  bio: L;
  image: string;
};

export type ScheduleDay = {
  label: L; // "28. augustā" / "28 августа"
  title: L; // "Iepazīšanās diena" / "День знакомства"
  items: { time: string; label: L }[];
};

export type EventItem = {
  id: string;
  date: string;
  endDate?: string;
  time?: string;
  title: L;
  description: L;
  location: L;
  price?: string;

  // --- optional rich detail page ---
  slug?: string;
  image?: string; // real cover photo for the homepage card; if omitted, a designed beige cover is shown instead
  poster?: string; // tall promo poster shown on the detail page
  tagline?: L;
  intro?: L;
  includes?: L[];
  facilitators?: Facilitator[];
  schedule?: ScheduleDay[];
};

export const events: EventItem[] = [
  // ---------------------------------------------------------
  {
    id: "dveseles-pikniks-2026-08-02",
    slug: "dveseles-pikniks",
    date: "2026-08-02",
    time: "13:00–20:00",
    poster: "/photos/events/piknik-poster.jpg",
    title: {
      lv: "Dvēseles pikniks",
      ru: "Пикник души",
    },
    tagline: {
      lv: "Trīs sievietes. Trīs ceļi. Viena diena Tev.",
      ru: "Три женщины. Три пути. Один день для тебя.",
    },
    description: {
      lv: "Dienas retrīts dabā: maiga joga, skaņu pelde, radošums un ceremoniālais kakao. Atlaidi. Atjauno. Atvēr sirdi.",
      ru: "Дневной ретрит на природе: мягкая йога, звуковое купание, творчество и церемониальное какао. Отпусти. Обнови. Открой сердце.",
    },
    intro: {
      lv: "Diena sev, dabā un sirdī. Klusa vieta ārpus ikdienas steigas, kur atļauties apstāties, atslābināties un no jauna sadzirdēt sevi, trīs sieviešu pavadībā.",
      ru: "День для себя, на природе и в сердце. Тихое место вдали от ежедневной спешки, где можно остановиться, расслабиться и снова услышать себя, в сопровождении трёх женщин.",
    },
    location: {
      lv: "Tukuma novadā · 50 min no Rīgas vai Jelgavas",
      ru: "Тукумский край · 50 мин от Риги или Елгавы",
    },
    includes: [
      { lv: "Maiga jogas nodarbība ar Simonas vadību", ru: "Мягкая йога с Симоной" },
      { lv: "Skaņu pelde ar Marinu un Simonu", ru: "Звуковое купание с Мариной и Симоной" },
      { lv: "Radošums, daba un iedvesmojoša kopābūšana", ru: "Творчество, природа и вдохновляющее общение" },
      { lv: "Ceremoniālais kakao un sirsnīgas sarunas", ru: "Церемониальное какао и душевные беседы" },
      { lv: "Gardas pusdienas iekļautas", ru: "Вкусный обед включён" },
    ],
    facilitators: [
      {
        name: "Simona",
        role: { lv: "Jogas pasniedzēja un skaņu terapeite", ru: "Преподаватель йоги и звукотерапевт" },
        bio: {
          lv: "Apvieno maigu jogu, elpošanas tehnikas un skaņu terapiju, lai palīdzētu atrast vairāk miera, līdzsvara un saiknes ar savu ķermeni.",
          ru: "Объединяет мягкую йогу, дыхательные техники и звукотерапию, чтобы помочь найти больше покоя, равновесия и связи со своим телом.",
        },
        image: "/photos/events/piknik-simona.jpg",
      },
      {
        name: "Dana",
        role: { lv: "Radošās darbnīcas vadītāja", ru: "Ведущая творческой мастерской" },
        bio: {
          lv: "Radošums viņai vienmēr bijis veids, kā apstāties un nomierināt prātu. Iedvesmo radīt ar prieku un atklāt sevi caur rokām.",
          ru: "Творчество для неё всегда было способом остановиться и успокоить ум. Вдохновляет творить с радостью и раскрывать себя через руки.",
        },
        image: "/photos/events/piknik-dana.jpg",
      },
      {
        name: "Marina",
        role: { lv: "Skaņu terapeite un transformācijas spēles vadītāja", ru: "Звукотерапевт и ведущая трансформационной игры" },
        bio: {
          lv: "Palīdz sadzirdēt sevi un līdzsvarot enerģiju caur skaņas terapiju ar kristāla un Tibetas bļodām un gongu.",
          ru: "Помогает услышать себя и уравновесить энергию через звукотерапию хрустальными и тибетскими чашами и гонгом.",
        },
        image: "/photos/events/piknik-marina.jpg",
      },
    ],
  },

  // ---------------------------------------------------------
  {
    id: "lieliska-vienkarsiba-2026-08-28",
    slug: "lieliska-vienkarsiba",
    date: "2026-08-28",
    endDate: "2026-08-30",
    poster: "/photos/events/retreat-main.jpg",
    title: {
      lv: "Lieliskā vienkāršība",
      ru: "Великолепная простота",
    },
    tagline: {
      lv: "Atceries sevi tādu, kāda biji.",
      ru: "Вспомни себя до.",
    },
    description: {
      lv: "Trīs dienu retrīts sievietēm dabā: pirts rituāls, Sound Healing, kustība, dejas un silta kopābūšana.",
      ru: "Трёхдневный ретрит для женщин на природе: банный ритуал, Sound Healing, движение, танцы и тёплое общение.",
    },
    intro: {
      lv: "Trīs dienas, lai palēninātos, sajustu zemi zem kājām, atgrieztos savā ķermenī un atjaunotu iekšējo līdzsvaru. Mājīga koka māja dabā, naturāls uzturs un telpa, kurā apstāties un sadzirdēt sevi.",
      ru: "Три дня, чтобы замедлиться, почувствовать землю под ногами, вернуться в своё тело и восстановить внутренний баланс. Уютный деревянный дом среди природы, натуральная еда и пространство, где можно остановиться и услышать себя.",
    },
    location: {
      lv: "Saulkrasti, Latvija",
      ru: "Саулкрасты, Латвия",
    },
    includes: [
      { lv: "Mājīga māja dabā", ru: "Уютный дом среди природы" },
      { lv: "Naturāls uzturs", ru: "Натуральное питание" },
      { lv: "Pirts rituāls", ru: "Банный ритуал" },
      { lv: "Sound Healing", ru: "Sound Healing" },
      { lv: "Ceremoniālais kakao", ru: "Церемониальное какао" },
      { lv: "Dejas un pilates", ru: "Танцы и пилатес" },
      { lv: "Funkcionālais treniņš", ru: "Функциональная тренировка" },
      { lv: "Filmas skatīšanās ar seksologu", ru: "Кинопросмотр с сексологом" },
      { lv: "Jūra un pastaigas", ru: "Море и прогулки" },
      { lv: "Sieviešu kopā būšana", ru: "Женское общение" },
    ],
    facilitators: [
      {
        name: "Marina Ķēniņa",
        role: { lv: "Pavadone skaņas un harmonijas pasaulē", ru: "Проводник в мир звука и гармонии" },
        bio: {
          lv: "Skaņu terapija ar Tibetas bļodām un gongu, transformācijas spēle un dziļa atslābināšana.",
          ru: "Звукотерапия тибетскими чашами и гонгом, трансформационная игра и глубокое расслабление.",
        },
        image: "/photos/events/retreat-marina.jpg",
      },
      {
        name: "Inna Semiļinska",
        role: { lv: "Tantriskā seksoloģe", ru: "Тантрический сексолог" },
        bio: {
          lv: "Savieno zinātni, ķermeni un garu dziļākai tuvībai ar sevi un citiem.",
          ru: "Соединяет науку, тело и дух для глубокой близости с собой и другими.",
        },
        image: "/photos/events/retreat-inna.jpg",
      },
      {
        name: "Katerina Kuzmenko",
        role: { lv: "Horeogrāfe un funkcionālās kustības eksperte", ru: "Хореограф и эксперт по функциональному движению" },
        bio: {
          lv: "Palīdz sievietēm kļūt stiprākām, saglabājot vieglumu, plastiku un sievišķību.",
          ru: "Помогает женщинам становиться сильнее, сохраняя лёгкость, пластичность и женственность.",
        },
        image: "/photos/events/retreat-katerina.jpg",
      },
      {
        name: "Kristīna",
        role: { lv: "Kustību mentore, pilates", ru: "Наставник по движению, пилатес" },
        bio: {
          lv: "Palīdz sievietēm atgriezties kontaktā ar ķermeni caur apzinātu kustību un pilates.",
          ru: "Помогает женщинам возвращаться в контакт с телом через осознанное движение и пилатес.",
        },
        image: "/photos/events/retreat-kristina.jpg",
      },
    ],
    schedule: [
      {
        label: { lv: "28. augustā", ru: "28 августа" },
        title: { lv: "Iepazīšanās un iezemēšanās diena", ru: "День знакомства и заземления" },
        items: [
          { time: "12:00", label: { lv: "Ierašanās un izmitināšana", ru: "Заезд и размещение" } },
          { time: "13:00", label: { lv: "Pusdienas un iepazīšanās", ru: "Обед и знакомство" } },
          { time: "15:00", label: { lv: "Pēdas un iezemēšanās", ru: "Стопы и заземление" } },
          { time: "15:30", label: { lv: "Pirts rituāls", ru: "Банный ритуал" } },
          { time: "19:30", label: { lv: "Mājas vakariņas", ru: "Домашний ужин" } },
          { time: "21:00", label: { lv: "Sound Healing un ceremoniālais kakao", ru: "Sound Healing и церемониальное какао" } },
          { time: "22:30", label: { lv: "Atpūta", ru: "Отдых" } },
        ],
      },
      {
        label: { lv: "29. augustā", ru: "29 августа" },
        title: { lv: "Atklāšanās diena", ru: "День раскрытия" },
        items: [
          { time: "08:45", label: { lv: "Brokastis", ru: "Завтрак" } },
          { time: "10:30", label: { lv: "Pilates", ru: "Пилатес" } },
          { time: "12:00", label: { lv: "Brīvais laiks", ru: "Свободное время" } },
          { time: "13:30", label: { lv: "Pusdienas", ru: "Обед" } },
          { time: "15:30", label: { lv: "Dejas", ru: "Танцы" } },
          { time: "17:00", label: { lv: "Brīvais laiks", ru: "Свободное время" } },
          { time: "18:30", label: { lv: "Filmas skatīšanās ar seksologu", ru: "Кинопросмотр с сексологом" } },
          { time: "19:30", label: { lv: "Vakariņas", ru: "Ужин" } },
          { time: "21:00", label: { lv: "Ceremoniālais kakao", ru: "Церемониальное какао" } },
          { time: "23:00", label: { lv: "Miegs", ru: "Сон" } },
        ],
      },
      {
        label: { lv: "30. augustā", ru: "30 августа" },
        title: { lv: "Spēka diena", ru: "День силы" },
        items: [
          { time: "08:45", label: { lv: "Brokastis", ru: "Завтрак" } },
          { time: "10:30", label: { lv: "Funkcionālais treniņš", ru: "Функциональная тренировка" } },
          { time: "13:30", label: { lv: "Pusdienas un noslēdzošais aplis", ru: "Обед и завершающий круг" } },
          { time: "15:00", label: { lv: "Izbraukšana", ru: "Выезд" } },
        ],
      },
    ],
  },
];
