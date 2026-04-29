export type PortfolioMake =
  | "ferrari"
  | "porsche"
  | "lamborghini"
  | "bmw"
  | "mercedes"
  | "tesla"
  | "range-rover"
  | "mclaren"
  | "audi"
  | "lexus"
  | "other";

export interface PortfolioItem {
  id: number;
  year: number;
  make: PortfolioMake;
  makeLabel: string;
  model: string;
  service: string;
}

export const portfolioItems: PortfolioItem[] = [
  { id: 1, year: 2024, make: "porsche", makeLabel: "Porsche", model: "911 GT3", service: "Full Front PPF" },
  { id: 2, year: 2023, make: "ferrari", makeLabel: "Ferrari", model: "296 GTB", service: "Ceramic Coating" },
  { id: 3, year: 2022, make: "lamborghini", makeLabel: "Lamborghini", model: "Huracan", service: "Full Body PPF" },
  { id: 4, year: 2024, make: "bmw", makeLabel: "BMW", model: "M4", service: "Paint Correction + Ceramic" },
  { id: 5, year: 2023, make: "mclaren", makeLabel: "McLaren", model: "720S", service: "Full Detail" },
  { id: 6, year: 2024, make: "mercedes", makeLabel: "Mercedes", model: "G63", service: "Window Tint + PPF" },
  { id: 7, year: 2023, make: "tesla", makeLabel: "Tesla", model: "Model S Plaid", service: "Ceramic Coating" },
  { id: 8, year: 2022, make: "range-rover", makeLabel: "Range Rover", model: "Sport", service: "Full Detail" },
  { id: 9, year: 2023, make: "porsche", makeLabel: "Porsche", model: "Cayenne Turbo", service: "Paint Correction" },
  { id: 10, year: 2024, make: "lamborghini", makeLabel: "Lamborghini", model: "Urus", service: "Full Front PPF" },
  { id: 11, year: 2023, make: "ferrari", makeLabel: "Ferrari", model: "Roma", service: "Ceramic Coating" },
  { id: 12, year: 2024, make: "bmw", makeLabel: "BMW", model: "M5", service: "Full Body PPF" },
];

export const captionFor = (item: PortfolioItem): string =>
  `${item.year} ${item.makeLabel} ${item.model} — ${item.service}`;

export const makeLabels: Record<PortfolioMake, string> = {
  ferrari: "Ferrari",
  porsche: "Porsche",
  lamborghini: "Lamborghini",
  bmw: "BMW",
  mercedes: "Mercedes",
  tesla: "Tesla",
  "range-rover": "Range Rover",
  mclaren: "McLaren",
  audi: "Audi",
  lexus: "Lexus",
  other: "Other",
};