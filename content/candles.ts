// ============================================================
// TOAST TO MOMENTS: meditācijas sveču kolekcija / коллекция
//
// Nosaukumi, aromāti un kristāli ņemti no ražotāja latviešu
// kolekcijas lapas (tā ir konsekventa). Krievu nosaukumi ir
// salāgoti ar latviešu; sk. piezīmi par Nr. 12 zemāk.
//
// Названия, ароматы и кристаллы взяты с латышского листа
// коллекции (он внутренне согласован). Русские названия
// приведены в соответствие с латышскими; см. прим. к № 12.
// ============================================================

export type Candle = {
  /** Numurs uz iepakojuma / номер на упаковке */
  n: number;
  slug: string;
  name: { lv: string; ru: string };
  scent: { lv: string; ru: string };
  crystal: { lv: string; ru: string };
  /** Kam šī svece domāta / для чего эта свеча */
  forWhat: { lv: string; ru: string };
};

export const candles: Candle[] = [
  {
    n: 1,
    slug: "inner-peace",
    name: { lv: "Iekšējais miers", ru: "Внутреннее спокойствие" },
    scent: { lv: "Lavanda + vaniļa", ru: "Лаванда + ваниль" },
    crystal: { lv: "Ametists", ru: "Аметист" },
    forWhat: {
      lv: "Mieram, atslābumam un vakara meditācijai.",
      ru: "Для покоя, расслабления и вечерней медитации.",
    },
  },
  {
    n: 2,
    slug: "self-love",
    name: { lv: "Mīlestība pret sevi", ru: "Любовь к себе" },
    scent: { lv: "Roze + vaniļa", ru: "Роза + ваниль" },
    crystal: { lv: "Rozā kvarcs", ru: "Розовый кварц" },
    forWhat: {
      lv: "Maigumam, pašmīlestībai un sirds siltumam.",
      ru: "Для нежности, любви к себе и сердечного тепла.",
    },
  },
  {
    n: 3,
    slug: "new-beginning",
    name: { lv: "Jauns sākums", ru: "Новое начало" },
    scent: { lv: "Bergamote + citrons", ru: "Бергамот + лимон" },
    crystal: { lv: "Dzidrais kvarcs", ru: "Горный хрусталь" },
    forWhat: {
      lv: "Skaidrībai, jauniem nodomiem un iedvesmai.",
      ru: "Для ясности, новых намерений и вдохновения.",
    },
  },
  {
    n: 4,
    slug: "grounding",
    name: { lv: "Zemējums", ru: "Заземление" },
    scent: { lv: "Sandalkoks + ciedrs", ru: "Сандал + кедр" },
    crystal: { lv: "Dūmakainais kvarcs", ru: "Дымчатый кварц" },
    forWhat: {
      lv: "Stabilitātei, līdzsvaram un piezemētai sajūtai.",
      ru: "Для устойчивости, равновесия и чувства опоры.",
    },
  },
  {
    n: 5,
    slug: "energy",
    name: { lv: "Enerģija", ru: "Энергия" },
    scent: { lv: "Apelsīns + ingvers", ru: "Апельсин + имбирь" },
    crystal: { lv: "Karneols", ru: "Карнеол" },
    forWhat: {
      lv: "Enerģijai, motivācijai un rīta rituāliem.",
      ru: "Для энергии, мотивации и утренних ритуалов.",
    },
  },
  {
    n: 6,
    slug: "abundance",
    name: { lv: "Pārpilnība", ru: "Изобилие" },
    scent: { lv: "Kanēlis + apelsīns", ru: "Корица + апельсин" },
    crystal: { lv: "Citrīns", ru: "Цитрин" },
    forWhat: {
      lv: "Pārpilnības sajūtai, optimismam un pateicībai.",
      ru: "Для чувства изобилия, оптимизма и благодарности.",
    },
  },
  {
    n: 7,
    slug: "intuition",
    name: { lv: "Intuīcija", ru: "Интуиция" },
    scent: { lv: "Jasmīns + sandalkoks", ru: "Жасмин + сандал" },
    crystal: { lv: "Lapis lazuli", ru: "Лазурит" },
    forWhat: {
      lv: "Iekšējam klusumam, intuīcijai un sevis sadzirdēšanai.",
      ru: "Для внутренней тишины, интуиции и умения слышать себя.",
    },
  },
  {
    n: 8,
    slug: "clarity",
    name: { lv: "Skaidrība", ru: "Ясность" },
    scent: { lv: "Eikalipts + piparmētra", ru: "Эвкалипт + мята" },
    crystal: { lv: "Sodalīts", ru: "Содалит" },
    forWhat: {
      lv: "Koncentrēšanās, skaidrības un domu sakārtošanas rituālam.",
      ru: "Для концентрации, ясности и порядка в мыслях.",
    },
  },
  {
    n: 9,
    slug: "protection",
    name: { lv: "Aizsardzība", ru: "Защита" },
    scent: { lv: "Ciedrs + salvija", ru: "Кедр + шалфей" },
    crystal: { lv: "Obsidiāns", ru: "Обсидиан" },
    forWhat: {
      lv: "Drošībai, stabilitātei un iekšēja spēka sajūtai.",
      ru: "Для защищённости, устойчивости и ощущения внутренней силы.",
    },
  },
  {
    n: 10,
    slug: "gratitude",
    name: { lv: "Pateicība", ru: "Благодарность" },
    scent: { lv: "Vaniļa + mandarīns", ru: "Ваниль + мандарин" },
    crystal: { lv: "Dzintars", ru: "Янтарь" },
    forWhat: {
      lv: "Siltumam, pateicībai un mierīgam vakara rituālam.",
      ru: "Для тепла, благодарности и спокойного вечернего ритуала.",
    },
  },
  {
    n: 11,
    slug: "harmony",
    name: { lv: "Harmonija", ru: "Гармония" },
    scent: { lv: "Zaļā tēja + bergamote", ru: "Зелёный чай + бергамот" },
    crystal: { lv: "Aventurīns", ru: "Авантюрин" },
    forWhat: {
      lv: "Līdzsvaram, harmonijai un pozitīvai noskaņai.",
      ru: "Для равновесия, гармонии и светлого настроения.",
    },
  },
  {
    // Piezīme: latviešu kartītē ir SPĒKS un kolekcijas lapā krieviski "СИЛА",
    // bet krievu kartītē kļūdaini rakstīts "СПОКОЙСТВИЕ". Šeit lietots СИЛА.
    // Прим.: на русской карточке ошибочно «СПОКОЙСТВИЕ», верное имя «СИЛА».
    n: 12,
    slug: "strength",
    name: { lv: "Spēks", ru: "Сила" },
    scent: { lv: "Sandalkoks + kanēlis", ru: "Сандал + корица" },
    crystal: { lv: "Sarkanā jašma", ru: "Красная яшма" },
    forWhat: {
      lv: "Drosmei, pārliecībai un iekšējam spēkam.",
      ru: "Для смелости, уверенности и внутренней силы.",
    },
  },
  {
    n: 13,
    slug: "focus",
    name: { lv: "Fokuss", ru: "Фокус" },
    scent: { lv: "Rozmarīns + citrons", ru: "Розмарин + лимон" },
    crystal: { lv: "Fluorīts", ru: "Флюорит" },
    forWhat: {
      lv: "Koncentrēšanās spējai un sakārtotām domām.",
      ru: "Для концентрации и собранных мыслей.",
    },
  },
  {
    n: 14,
    slug: "confidence",
    name: { lv: "Pārliecība", ru: "Уверенность" },
    scent: { lv: "Ciedrs + bergamote", ru: "Кедр + бергамот" },
    crystal: { lv: "Tīģera acs", ru: "Тигровый глаз" },
    forWhat: {
      lv: "Pārliecībai, apņēmībai un stabilitātei.",
      ru: "Для уверенности, решимости и устойчивости.",
    },
  },
  {
    // Nr. 15 nav uz kolekcijas lapas (tā veidota 14 svecēm), apraksts rakstīts
    // pēc kartītes. № 15 отсутствует на листе коллекции (он на 14 свечей).
    n: 15,
    slug: "inner-light",
    name: { lv: "Iekšējā gaisma", ru: "Внутренний свет" },
    scent: { lv: "Jasmīns + vaniļa", ru: "Жасмин + ваниль" },
    crystal: { lv: "Mēnessakmens", ru: "Лунный камень" },
    forWhat: {
      lv: "Maigai skaidrībai, sievišķībai un savas gaismas sajūtai.",
      ru: "Для мягкой ясности, женственности и ощущения своего света.",
    },
  },
];

export const candlePhoto = (slug: string) => `/photos/candles/${slug}.jpg`;

export const candleBySlug = (slug: string) => candles.find((c) => c.slug === slug);
