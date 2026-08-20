// Sourced from Vardhman Pharma's real logo, a real sale bill, and their
// promotional company-list sheet (all supplied 2026-08-20). Fields still
// marked isSample:true have no confirmed source yet.

export const business = {
  name: "Vardhman Pharma",
  legalName: "Vardhman Pharma",
  tagline: "Bcoz Every Dose Matters...",
  strapline: "Deals in fast moving ethical items",
  proprietor: { value: "Dhairya Bharilya", isSample: false },
  establishedYear: "2025",
  establishedMonth: "February",
  city: "Jabalpur, Madhya Pradesh",
};

// Real roster, transcribed from Vardhman Pharma's own promotional
// company-list sheet — not placeholders.
export const brands = [
  "Abbott", "Ajanta", "Alembic", "Alkem", "Apex", "Aristo", "Bayer",
  "Blue Cross", "Boehringer", "Cadilla", "Centaur",
  "Cipla", "Corona", "Dr. Reddy's", "East India", "Eli Lilly", "Emcure",
  "Eris", "FDC", "Franco", "Geno", "Glaxo",
  "Glenmark", "Hetero", "Himalaya", "IPCA", "Indico", "Intas",
  "JB Chemical", "Jagsonpal", "Janssen", "Lupin", "La Renon",
  "Macleods", "Mankind", "Medley", "Meyer", "Merck", "Micro", "MSD",
  "MSN", "Novartis", "Novo Nordisk", "Pfizer",
  "P&G", "Ranbaxy", "Sanofi", "Sun Pharma", "Torrent", "Troikaa",
  "USV", "Zuventus", "Zydus",
].map((name, i) => ({ id: i, name }));

const companyCount = String(brands.length);

export const stats = [
  { label: "Established", value: "2025", sub: "Jabalpur, MP" },
  { label: "Active retailers", value: "50+", sub: "ordering regularly", live: true },
  { label: "Retailer network", value: "100+", sub: "across the district" },
  { label: "Companies carried", value: companyCount, sub: "verified roster" },
  { label: "SKUs in stock", value: "1,600+", sub: "across categories" },
];

export const stockCategories = [
  {
    num: `${companyCount} companies`,
    title: "Multi-brand sourcing",
    body: "Not tied to a single manufacturer — stock is sourced from stockists across different cities and states, so retailers can source a wide brand spread through one account.",
    icon: "layers",
  },
  {
    num: "1,600+ SKUs",
    title: "Broad availability",
    body: "From fast-moving essentials to slower items other distributors don't bother carrying — depth of stock is a large part of why retailers stay.",
    icon: "package",
  },
  {
    num: "District-wide",
    title: "Reliable delivery",
    body: "Orders are checked, packed, and dispatched to reach retailers across Jabalpur and the surrounding district on a predictable schedule.",
    icon: "truck",
  },
];

export const credentials = [
  { label: "Drug Licence No. (20B / 21B)", value: "20B-21B/6458-6459/47/2024", isSample: false },
  { label: "GSTIN", value: "23FYZPB2347K1Z0", isSample: false },
  { label: "Registered address", value: "Office No. 30, 1st Floor, Medicine Complex (Rupali Complex), Napier Town, Jabalpur", isSample: false },
];

export const contact = {
  phone: { value: "0761-4031305", isSample: false },
  whatsapp: { value: "+91 79991 14860", isSample: false },
  email: { value: "vardhman.pharmajbp@gmail.com", isSample: false },
  addressLine: { value: "Office No. 30, 1st Floor, Medicine Complex (Rupali Complex), Napier Town", isSample: false },
  city: "Jabalpur, Madhya Pradesh",
  pin: { value: "482002", isSample: false },
};
