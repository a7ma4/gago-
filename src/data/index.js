import desk1 from "../assets/photo_2026-10-10_18-38-42.jpg";
import chair1 from "../assets/photo_2026-10-10_18-38-40.jpg";
import sofa1 from "../assets/photo_2026-10-10_18-38-37.jpg";
import table1 from "../assets/photo_2026-10-10_18-38-36.jpg";
import side1 from "../assets/photo_2026-10-10_18-38-35.jpg";
import console1 from "../assets/photo_2026-10-10_18-38-34.jpg";

export const products = [
  {
    id: 1,
    name: "Azure Desk",
    ar: "مكتب أزور",
    price: 7950,
    cat: "Office",
    img: desk1,
    tag: "Port Said Series",
  },
  {
    id: 2,
    name: "Lighthouse Chair",
    ar: "كرسي الفنار",
    price: 3400,
    cat: "Living",
    img: chair1,
    tag: "Shell Collection",
  },
  {
    id: 3,
    name: "Harbor Sofa",
    ar: "كنبة الميناء",
    price: 18500,
    cat: "Living",
    img: sofa1,
    tag: "Signature",
  },
  {
    id: 4,
    name: "Delta Coffee Table",
    ar: "ترابيزة دلتا",
    price: 6400,
    cat: "Living",
    img: table1,
    tag: "Woodline",
  },
  {
    id: 5,
    name: "Fanar Side Table",
    ar: "ترابيزة فنار",
    price: 3950,
    cat: "Dining",
    img: side1,
    tag: "Port Said Series",
  },
  {
    id: 6,
    name: "Canal Console",
    ar: "كونسول القناة",
    price: 8600,
    cat: "Dining",
    img: console1,
    tag: "Heritage",
  },
];

export const cats = [
  ["Office", "المكتب"],
  ["Living", "غرفة المعيشة"],
  ["Dining", "السفرة"],
];

export const money = (n) => new Intl.NumberFormat("en-EG").format(n) + " EGP";