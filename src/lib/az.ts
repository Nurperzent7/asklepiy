export type CityId = "almaty" | "aktau" | "shymkent";

export type Branch = {
  id: CityId;
  name: string;
  address: string;
  hours: string;
  phone: string;
  wa: string;
  instagram: string;
  instagramUrl: string;
  map: string;
};

export const branches: Branch[] = [
  {
    id: "almaty",
    name: "Алматы",
    address: "Алматы, проспект Райымбека, 176А",
    hours: "Пн–Пт 09:00–17:00, Сб до 14:00",
    phone: "+7 700 360 01 80",
    wa: "77003600180",
    instagram: "Профиль Алматы",
    instagramUrl: "https://www.instagram.com/asiakoz.clinic/",
    map: "https://2gis.kz/almaty/search/Райымбека%20176А",
  },
  {
    id: "aktau",
    name: "Актау",
    address: "Актау, 7А микрорайон, 11/3",
    hours: "Пн–Пт 09:00–17:00, Сб до 14:00",
    phone: "+7 775 863 01 80",
    wa: "77758630180",
    instagram: "Профиль Актау",
    instagramUrl: "https://www.instagram.com/asiakoz.aqtau/",
    map: "https://2gis.kz/aktau/search/7А%20микрорайон%2011",
  },
  {
    id: "shymkent",
    name: "Шымкент",
    address: "Шымкент, улица Байтурсынова, 86/7, мкр. Туран",
    hours: "Пн–Пт 09:00–17:00, Сб до 14:00",
    phone: "+7 708 075 01 80",
    wa: "77080750180",
    instagram: "Профиль Шымкента",
    instagramUrl: "https://www.instagram.com/asiakoz.shymkent/",
    map: "https://2gis.kz/shymkent/search/Байтурсынова%2086",
  },
];

export function waLink(city: CityId, extra?: string) {
  const branch = branches.find((item) => item.id === city)!;
  const text = extra
    ? `Здравствуйте! Хочу записаться в Асклепий.\n\n${extra}`
    : `Здравствуйте! Хочу записаться в Асклепий.\n\nГород: ${branch.name}`;
  return `https://wa.me/${branch.wa}?text=${encodeURIComponent(text)}`;
}

export const reasons = [
  { n: "1/4", title: "Офтальмохирурги", text: "Специалисты с международной практикой." },
  { n: "2/4", title: "Три филиала", text: "Алматы, Актау и Шымкент." },
  { n: "3/4", title: "Комплексное лечение", text: "От диагностики до хирургии в одной клинике." },
  { n: "4/4", title: "Детям и взрослым", text: "Офтальмологическая помощь для всей семьи." },
];

export const serviceCards = [
  { slug: "lazer", title: "Лазерная коррекция зрения", text: "Коррекция близорукости, астигматизма и дальнозоркости." },
  { slug: "katarakta", title: "Лечение катаракты и замена хрусталика", text: "Замена помутневшего хрусталика на искусственную линзу." },
  { slug: "vitrektomiya", title: "Витрэктомия", text: "Операции на стекловидном теле и сетчатке." },
  { slug: "kosoglazie", title: "Лечение косоглазия", text: "Коррекция косоглазия у детей и взрослых." },
  { slug: "glaukoma", title: "Диагностика и лечение глаукомы", text: "Контроль внутриглазного давления и лечение." },
  { slug: "setchatka", title: "Лечение заболеваний сетчатки", text: "Диагностика и лечение патологий сетчатки." },
];

export const doctors = [
  {
    slug: "teker",
    name: "Мехмет Есат Текер",
    role: "Ведущий офтальмолог и хирург",
    cities: "Алматы · Шымкент · Лазерный хирург",
    line: "5 000+ лазерных коррекций · 20+ лет опыта",
    chips: ["5 000+ лазерных коррекций", "20+ лет опыта", "Специалист из Турции"],
    text: "Специалист из Турции. Основное направление — лазерная коррекция зрения.",
    tone: "bg-[#d9f4f4]",
  },
  {
    slug: "orel",
    name: "Орел Талип",
    role: "Офтальмохирург",
    cities: "Алматы · Лазерный хирург",
    line: "8 000+ лазерных коррекций · FEBO",
    chips: ["8 000+ лазерных коррекций", "15 000+ операций", "FEBO сертификат"],
    text: "Лазерная коррекция зрения и сложная офтальмохирургия.",
    tone: "bg-[#e7f7f8]",
  },
  {
    slug: "aliya",
    name: "Алия Ганимуратовна Усманова",
    role: "Ведущий офтальмохирург высшей категории",
    cities: "Алматы · Офтальмохирург",
    line: "18 лет опыта · лазер, катаракта, блефаропластика",
    chips: ["18 лет опыта", "Высшая категория", "Алматы филиал"],
    text: "Лазерная коррекция, хирургия катаракты и блефаропластика. Приём в Алматы.",
    tone: "bg-[#e5f6ef]",
  },
  {
    slug: "musay",
    name: "Нурмухамед Мусай",
    role: "Главный врач",
    cities: "Алматы · Главный врач",
    line: "Асклепий · Алматы",
    chips: ["Алматы филиал", "Главный врач"],
    text: "Главный врач филиала Алматы. Координирует приём и план лечения.",
    tone: "bg-[#e8eef8]",
  },
];

export const steps = [
  { n: "1", title: "Напишите в WhatsApp", text: "Опишите симптом или услугу — ответит колл-центр." },
  { n: "2", title: "Получите ориентир", text: "Уточним направление диагностики, цену и удобное время." },
  { n: "3", title: "Приходите в клинику", text: "Подтвердим дату и адрес филиала." },
];

export const news = [
  { date: "2024", title: "Открыт приём в филиале Шымкента", href: "/news" },
  { date: "Сеть", title: "Клиники работают в Алматы, Актау и Шымкенте", href: "/contacts" },
];
