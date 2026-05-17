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
  { href: "#faq", label: "FAQ" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Czy 30% wystarczy, żeby zdać poprawkę?",
    answer:
      "Tak — na poprawce matury podstawowej z matematyki wystarczy uzyskać 30% punktów z całego arkusza. Ebook skupia się wyłącznie na tym, co daje punkty, bez nauki „wszystkiego na 100%”.",
  },
  {
    question: "Dla kogo jest ten ebook?",
    answer:
      "Dla osób po niezdanej maturze, które mają mało czasu i chcą po prostu zdać. Nie musisz być świetny z matematyki — potrzebujesz planu i powtórzenia najczęstszych zagadnień.",
  },
  {
    question: "W jakim formacie dostanę ebook?",
    answer:
      "Ebook otrzymasz w formacie PDF — możesz go czytać na telefonie, tablecie lub wydrukować wybrane fragmenty. Link do pobrania wyślemy na e-mail po opłaceniu zamówienia.",
  },
  {
    question: "Jak szybko dostanę dostęp po zakupie?",
    answer:
      "Zwykle w ciągu kilku minut po płatności — na adres e-mail podany przy zamówieniu. Sprawdź też folder spam, jeśli wiadomość nie przyjdzie od razu.",
  },
  {
    question: "Kiedy najlepiej zacząć naukę?",
    answer:
      "Im wcześniej, tym lepiej — plan jest rozłożony na 30 dni. Jeśli zostało mniej czasu, możesz przejść intensywniej przez najważniejsze tygodnie i skupić się na pewniakach oraz arkuszach.",
  },
  {
    question: "Czy potrzebuję korepetytora oprócz ebooka?",
    answer:
      "Nie — ebook został napisany tak, żebyś mógł uczyć się samodzielnie. Jeśli utkniesz przy konkretnym zadaniu, możesz napisać na adres kontaktowy z sekcji stopki.",
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
