// Text alternativ pentru imaginile de produs, generat din numele produsului și categorie.
const CATEGORY_ALT: Record<string, { prefix: string; suffix: string }> = {
  rafturi: { prefix: "Raft metalic", suffix: "pentru magazin alimentar" },
  vitrine: { prefix: "Vitrină frigorifică", suffix: "pentru magazin" },
  tejghele: { prefix: "Tejghea", suffix: "pentru magazin" },
  gondole: { prefix: "Gondolă", suffix: "pentru magazin" },
  "panificație": { prefix: "Mobilier pentru panificație", suffix: "" },
  "fructe-&-legume": { prefix: "Raft pentru fructe și legume", suffix: "" },
  "coffee-corner": { prefix: "Mobilier coffee corner", suffix: "" },
  "zona-alcool": { prefix: "Mobilier pentru zona de băuturi alcoolice", suffix: "" },
  "zona-promo": { prefix: "Mobilier pentru zona de promoții", suffix: "" },
  "mobilier-farmacie": { prefix: "Mobilier de farmacie", suffix: "" },
  micromarket: { prefix: "Mobilier pentru micromarket", suffix: "" },
  accesorii: { prefix: "Accesoriu pentru magazin", suffix: "" },
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

// Elimină mențiuni comerciale din numele produsului (ex. „- DISPONIBIL LA COMANDĂ").
function cleanProductName(name: string) {
  return name
    .replace(/\s*[-–]\s*(disponibil|in stoc|în stoc|la comand).*$/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function productImageAlt(
  productName: string,
  categorySlug?: string | null,
  categoryName?: string | null
) {
  const name = cleanProductName(productName);
  const config = categorySlug ? CATEGORY_ALT[categorySlug] : undefined;

  if (!config) {
    return categoryName ? `${name} – ${categoryName} pentru magazin` : name;
  }

  const firstWord = normalize(config.prefix.split(" ")[0]);
  const prefix = normalize(name).includes(firstWord) ? "" : config.prefix;

  return [prefix, name, config.suffix].filter(Boolean).join(" ");
}
