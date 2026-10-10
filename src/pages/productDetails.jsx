import React, { useState } from "react";
import Header from "../components/header.jsx";
import BottomNav from "../components/bottomNav.jsx";
import { money } from "../data/index.js";

import "../styles.css";

function ProductDetails({ p, onNav, onAdd }) {
  const [added, setAdded] = useState(false);

  const name = p.name || p.title;
  const img = p.img || p.image;

  const handleAdd = () => {
    onAdd && onAdd();
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <main className="detail gago-detail"  >
      <Header onNav={onNav} />

      <div className="sea-shimmer" aria-hidden="true" />

      <div className="detailLayout">
        <div className="detailMedia">
          {/* رجوع للقسم اللي جيت منه */}
          <button
            className="backBtn"
            aria-label="رجوع"
            onClick={() => (p.cat ? onNav("category", p.cat) : onNav("home"))}
          >
            ›
          </button>

          <div
            className="detailImg"
            style={{
              backgroundImage: `linear-gradient(#0000,#0b1d3666),url(${img})`,
            }}
            role="img"
            aria-label={name}
          >
            {p.tag && <span>{p.tag}</span>}
          </div>
        </div>

        <section className="detailBody">
          <span className="eyebrow">{p.cat} · GAGO PORT SAID</span>

          <h1>{name}</h1>
          {p.ar && <h3>{p.ar}</h3>}
          <i className="detail-rule" />

          <div className="rating">
            ★★★★★ <span>4.8 (32)</span>
          </div>

          <div className="detailPrice">{money(p.price)}</div>

          <p className="desc">
            تصميم مستوحى من روح بورسعيد، يجمع بين البساطة والقوة في قطعة واحدة.
            تفاصيل هادئة، خامات مختارة، وشخصية تعيش معك.
          </p>

          <div className="specRow">
            <div>
              <small>المقاس</small>
              <b>120 × 60 × 75 cm</b>
            </div>

            <div>
              <small>الخامة</small>
              <b>Wood + Fabric</b>
            </div>

            <div>
              <small>اللون</small>
              <b>3 خيارات</b>
            </div>
          </div>

          <button
            className={`addBtn${added ? " added" : ""}`}
            onClick={handleAdd}
          >
            {added ? (
              <>تمت الإضافة <span>✓</span></>
            ) : (
              <>أضف إلى السلة <span>←</span></>
            )}
          </button>

          <button className="storyLink" onClick={() => onNav("about")}>
            تفاصيل القطعة وقصتها <span>⌄</span>
          </button>
        </section>
      </div>

      <BottomNav page="categories" onNav={onNav} />
    </main>
  );
}

export default ProductDetails;