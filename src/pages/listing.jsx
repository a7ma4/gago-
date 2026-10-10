import React from "react";
import Header from "../components/header.jsx";
import BottomNav from "../components/bottomNav.jsx";
import ProductCard from "../components/productCard.jsx";

import { cats } from "../data/index.js";

import "../styles.css";

// صور المنتجات الجديدة: src/assets/product-1.png ... product-10.png
// (لو الامتداد webp أو jpg غيّريه هنا)
import p1 from "../assets/product-1.png";
import p2 from "../assets/product-2.png";
import p3 from "../assets/product-3.png";
import p4 from "../assets/product-4.png";
import p5 from "../assets/product-5.png";
import p6 from "../assets/product-6.png";
import p7 from "../assets/product-7.png";
import p8 from "../assets/product-8.png";
import p9 from "../assets/product-9.png";
import p10 from "../assets/product-10.png";

// الأقسام الحقيقية من data/index.js (c[0] = اسم القسم اللي بيتبعت لـ onNav)
// المنتجات الجديدة بتتوزّع عليها بالتناوب عشان تظهر جوه كل قسم.
const catOf = (i) => (cats.length ? cats[i % cats.length][0] : "All");

// بنكتب كل منتج بكل أسماء الحقول الشائعة (img/image و name/title)
// عشان ProductCard يقرا اللي هو محتاجه.
const make = (i, name, price, img, tag) => ({
  id: 100 + i,
  name,
  title: name,
  cat: catOf(i - 1),
  price,
  img,
  image: img,
  tag,
});

const newProducts = [
  make(1, "وحدة أدراج من الجوز", 16500, p1, "جديد"),
  make(2, "كرسي مخمل بترولي", 12500, p2),
  make(3, "ترابيزة قهوة رخام", 8900, p3),
  make(4, "أباجورة أرضية نحاسية", 3600, p4),
  make(5, "فازة سيراميك لؤلؤي", 2400, p5, "جديد"),
  make(6, "كنبة بوكليه كريمي", 28000, p6),
  make(7, "كرسي سفرة من البلوط", 4800, p7),
  make(8, "مرآة بإطار صدفة ذهبي", 5200, p8, "مميز"),
  make(9, "كونسول بأدراج", 14500, p9),
  make(10, "كومودينو جانبي", 6800, p10),
];

// صفحة المنتجات بتعرض المنتجات الجديدة بس (من غير المنتجات القديمة)
const allProducts = newProducts;

export default function Listing({ category, onNav, onProduct }) {
  const list = category
    ? allProducts.filter((p) => p.cat === category || category === "All")
    : allProducts;

  return (
    <div className="gago-listing"  >
      <Header onNav={onNav} />

      <main className="listing-main">
        <div className="sea-shimmer" aria-hidden="true" />

        <section className="listHead">
          <div>
            <span className="eyebrow">COLLECTION</span>
            <h1>{category || "كل المنتجات"}</h1>
            <i className="listing-rule" />
            <p>{list.length * 18 + 6} قطعة</p>
          </div>

          <button className="pill">ترتيب ↕</button>
        </section>

        <div className="filters">
          <button>☷ تصفية</button>
          <button>السعر</button>
          <button>الخامة</button>
          <button>اللون</button>
        </div>

        <div className="productGrid listing">
          {list.map((p) => (
            <ProductCard key={p.id} p={p} onClick={() => onProduct(p)} />
          ))}

          {list.length === 0 && (
            <p className="listing-empty">مفيش منتجات في القسم ده حاليًا.</p>
          )}
        </div>
      </main>

      <BottomNav page="categories" onNav={onNav} />
    </div>
  );
}