export const EXAM = {
  dateIso: "2026-08-25T09:00:00",
  label: "25 sierpnia 2026, godz. 9:00",
} as const;

export const SITE = {
  name: "MATMA NA 30%",
  tagline: "Plan ratunkowy do poprawy matury podstawowej z matematyki.",
  description:
    "Nie musisz być świetny z matematyki. Musisz zdobyć 30%.",
  price: 49,
  currency: "PLN",
  email: "kontakt@matmana30.pl",
} as const;

export const NAV_LINKS = [
  { href: "#kim-jestem", label: "Kim jestem" },
  { href: "#zawartosc", label: "Zawartość" },
  { href: "#dla-kogo", label: "Dla kogo" },
  { href: "#plan", label: "Plan 30 dni" },
  { href: "#faq", label: "FAQ" },
] as const;

export const GUARANTEE_NOTE = "Gwarancja zwrotu 14 dni. Bez pytań." as const;

export const GUARANTEE = {
  title: "Gwarancja zwrotu — bez ryzyka",
  textBeforeEmail:
    "Jeśli po przeczytaniu uznasz, że ebook nie był dla ciebie wart pieniędzy, napisz na",
  textAfterEmail:
    "w ciągu 14 dni od zakupu. Zwrócę całą kwotę. Bez pytań, bez tłumaczenia.",
} as const;

export const ABOUT_GREETING = "Cześć, tu Milczar!" as const;

export const ABOUT_ME = [
  "Od jakiegoś czasu prowadzę korepetycje z matematyki — na co dzień widzę, gdzie uczniowie się gubią i co naprawdę daje punkty na maturze.",
  "Tłumaczę prosto, tak żeby wszystko było jasne. Bez trudnych słów i bez uczenia się rzeczy, których nie będzie na maturze.",
  "Ten ebook to ten sam plan, który stosuję na zajęciach — skondensowany do 30 dni, żebyś przed sierpniową poprawką wiedział dokładnie, na czym się skupić.",
] as const;

export const FAQ_ITEMS = [
  {
    question: "Czy 30% wystarczy, żeby zdać poprawkę?",
    answer:
      "Tak. Próg zdania matury podstawowej z matematyki to 30%, czyli 15 punktów z 50. Mniej niż jedna trzecia arkusza. Ten ebook nie tłumaczy całej matmy — pokazuje, gdzie te 15 punktów znaleźć najszybciej i najpewniej. Tyle wystarczy, żeby zdać.",
  },
  {
    question: "Dla kogo jest ten ebook?",
    answer:
      "Dla osób, które oblały maturę podstawową z matematyki w maju i celują w 30% w sierpniu. Jeśli chcesz zdać wyżej niż 50%, ten ebook nie jest dla ciebie — potrzebujesz wtedy pełnego kursu albo korepetytora. Tu znajdziesz minimum, nie maksimum.",
  },
  {
    question: "Co dokładnie znajdę w środku?",
    answer:
      "56 stron podzielonych na 8 rozdziałów: plan nauki na 30 dni, 10 tematów-pewniaków, które są na każdej maturze, strategia na sali egzaminacyjnej, lista 7 najczęstszych błędów oraz checklista ostatniego tygodnia. Konkrety, bez teorii od zera.",
  },
  {
    question: "Co, jeśli oblałem o dużo punktów?",
    answer:
      "Ebook celuje w 30%, czyli 15 punktów. Jeśli w maju zdobyłeś 6 punktów, musisz nadrobić 9 — to 4–6 tematów do solidnego opanowania. Plan 30 dni jest dokładnie pod to zaprojektowany. Da się, ale wymaga zaangażowania zgodnie z planem.",
  },
  {
    question: "Kiedy najlepiej zacząć naukę?",
    answer:
      "Najlepiej od razu po ogłoszeniu wyników 8 lipca. Plan z ebooka jest rozpisany na 30 dni i prowadzi cię dzień po dniu aż do 25 sierpnia. Im wcześniej zaczniesz, tym mniej stresu na końcu — ale nawet 14 dni przed egzaminem nadal daje realną szansę na zdanie.",
  },
  {
    question: "W jakim formacie dostanę ebook i jak szybko?",
    answer:
      "Ebook dostaniesz w formacie PDF — do otwarcia na telefonie, komputerze lub do wydrukowania. Link do pobrania wysyłany jest automatycznie na podany adres e-mail w ciągu kilku minut od zakupu.",
  },
] as const;

export const FEATURES = [
  {
    icon: "calendar" as const,
    title: "30-dniowy plan nauki",
    description:
      "Dzień po dniu wiesz, co powtórzyć — bez zgadywania i chaosu.",
  },
  {
    icon: "file-check" as const,
    title: "Najczęstsze zadania z matur",
    description:
      "Typowe zadania z ostatnich lat — te, które najczęściej wracają.",
  },
  {
    icon: "target" as const,
    title: "Strategia na egzamin",
    description:
      "Jak rozłożyć czas, od czego zacząć i kiedy odpuścić trudne zadanie.",
  },
  {
    icon: "alert-circle" as const,
    title: "Najczęstsze błędy",
    description:
      "Lista pułapek, w które wpadają zdający — żebyś ich uniknął.",
  },
  {
    icon: "star" as const,
    title: "Pewniaki maturalne",
    description:
      "Zadania i tematy, które warto opanować na pewniaka punktów.",
  },
  {
    icon: "check-square" as const,
    title: "Checklista ostatniego tygodnia",
    description:
      "Co powtórzyć na 7 dni przed egzaminem — bez paniki.",
  },
] as const;

export const FOR_WHO = [
  "dla osób po niezdanej maturze",
  "dla osób, które mają mało czasu",
  "dla osób, które chcą po prostu zdać",
  "dla osób, które stresują się matematyką",
] as const;

export const FOR_WHO_NOT = {
  title: "NIE jest dla osób, które chcą zdać na 70%+",
  description: "— wtedy potrzebujesz pełnego kursu lub korepetytora",
} as const;

export const PLAN_WEEKS = [
  {
    week: 1,
    title: "Fundamenty",
    description:
      "Procenty, potęgi, pierwiastki i podstawowa algebra — solidna baza pod resztę.",
  },
  {
    week: 2,
    title: "Równania i funkcje",
    description:
      "Równania liniowe, kwadratowe i wykresy funkcji — najczęstsze typy zadań.",
  },
  {
    week: 3,
    title: "Geometria i trygonometria",
    description:
      "Figury, twierdzenie Pitagorasa i podstawy trygonometrii w praktyce.",
  },
  {
    week: 4,
    title: "Arkusze i strategia",
    description:
      "Rozwiązywanie arkuszy, zarządzanie czasem i finałowa strategia na 30%.",
  },
] as const;

export const AFTER_30_DAYS = [
  "Będziesz wiedzieć, co już ogarniasz — i czego nie musisz się uczyć na siłę",
  "Opanujesz 6 tematów, które dają te 15 punktów potrzebnych do zdania",
  "Wejdziesz na maturę z planem w głowie, a nie z modlitwą, że może jakoś pójdzie",
  "Nie będziesz już zastanawiać się wieczorem, od czego zacząć naukę — plan mówi ci to za każdym razem",
] as const;
