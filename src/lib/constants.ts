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
  { href: "#zawartosc", label: "Zawartość" },
  { href: "#dla-kogo", label: "Dla kogo" },
  { href: "#plan", label: "Plan 30 dni" },
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
  "dla osób które mają mało czasu",
  "dla osób które chcą po prostu zdać",
  "dla osób które stresują się matematyką",
] as const;

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
