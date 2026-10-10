import React, { useRef } from "react";
import Header from "../components/header.jsx";
import BottomNav from "../components/bottomNav.jsx";

import "../styles.css";

// 👇 غيّري المسار ده لصورة الهيرو بتاعتك
import heroImg from "../assets/موزعين.png";

function Distributors({ onNav }) {
  const contentRef = useRef(null);

  return (
    <div className="gago-categories gago-distributors"  >
      <Header onNav={onNav} />

      {/* ===== الهيرو: مكان صورتك ===== */}
      <section className="categories-hero distributors-hero">
        <img
          src={heroImg}
          alt="موزعين GAGO"
          className="categories-hero-img"
        />
        <div className="categories-hero-fade" />

        <div className="distributors-hero-text">
          <span className="eyebrow">FIND GAGO</span>
          <h1>موزعينا</h1>
          <p>المكان جزء من الحكاية.</p>
        </div>

        <button
          type="button"
          className="hero-scroll"
          onClick={() =>
            contentRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          {/* <small>الفروع</small> */}
          <span />
        </button>
      </section>

      {/* ===== المحتوى على خلفية البحر ===== */}
      <main className="categories-main">
        <div className="sea-shimmer" aria-hidden="true" />

        <section className="category-showcase" ref={contentRef}>
          <div className="showcase-heading">
            <h2>فروع GAGO</h2>
            <p>تعالى شوف القطع على الطبيعة.</p>
          </div>

          {/* الخريطة */}
          <div
            className="distributors-map"
            style={{
              backgroundImage: `linear-gradient(#33495766,#33495799),url(${heroImg})`,
            }}
          >
            <div className="video-overlay" />
            <div className="mapPin">⌖</div>
            <div className="mapPin p2">⌖</div>
            <div className="mapPin p3">⌖</div>
            <span className="video-bottom-line" />
          </div>

          {/* الفروع */}
          <div className="distributors-glass-list">
            <article className="distributors-glass-card">
              <div className="video-topline">
                <span>PORT SAID</span>
                <span className="video-play-icon">↗</span>
              </div>
              <h3>GAGO Port Said</h3>
              <p>بورسعيد · شارع فلسطين</p>
              <button type="button" className="cart-cta">
                الاتجاهات ↗
              </button>
              <span className="video-bottom-line" />
            </article>

            <article className="distributors-glass-card">
              <div className="video-topline">
                <span>CAIRO</span>
                <span className="video-play-icon">↗</span>
              </div>
              <h3>GAGO Cairo</h3>
              <p>القاهرة · للتجار والموزعين</p>
              <button type="button" className="cart-cta">
                تفاصيل ↗
              </button>
              <span className="video-bottom-line" />
            </article>
          </div>
        </section>
      </main>

      <BottomNav page="profile" onNav={onNav} />
    </div>
  );
}

export default Distributors;