
import React, { useState } from "react";

import Header from "../components/header.jsx";
import BottomNav from "../components/bottomNav.jsx";
import ProductCard from "../components/productCard.jsx";

import { products } from "../data/index.js";

function Search({ onNav, onProduct }) {
  const [q, setQ] = useState("");

  const list = products.filter((p) =>
    (p.name + p.ar).toLowerCase().includes(q.toLowerCase())
  );

  return (
    <>
      <Header onNav={onNav} />

      <main className="page">
        <section className="pageTitle">
          <span className="eyebrow">SEARCH</span>
          <h1>ابحث في GAGO</h1>
        </section>

        <div className="searchBox">
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="ابحث عن منتج أو فئة..."
          />
        </div>

        <div className="chips">
          {["مكاتب", "طاولات", "كراسي", "كنب", "غرف النوم"].map((x) => (
            <button key={x} onClick={() => setQ(x)}>
              {x}
            </button>
          ))}
        </div>

        <div className="productGrid">
          {list.map((p) => (
            <ProductCard
              key={p.id}
              p={p}
              onClick={() => onProduct(p)}
            />
          ))}

          {list.length === 0 && (
            <p>مفيش منتجات مطابقة لبحثك.</p>
          )}
        </div>
      </main>

      <BottomNav page="home" onNav={onNav} />
    </>
  );
}

export default Search;
