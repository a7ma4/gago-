import React, { useEffect, useRef } from "react";
import Header from "../components/header.jsx";
import BottomNav from "../components/bottomNav.jsx";

import { cats } from "../data/index.js";

import "../styles.css";

// صورة الهيرو (الصورة اللي بعتيها)
import heroHome from "../assets/heroHome.png";

// بوسترات تظهر لحد ما الفيديو يحمّل
import hero from "../assets/hero.webp";
import brandRef from "../assets/harbor.webp";
import productRef from "../assets/build.webp";

// فيديو الأقسام (غيّري الاسم/المسار لو عندك فيديو مختلف لكل قسم)
import category1 from "../assets/category-1.mp4.mp4";

const videos = [category1, category1, category1, category1, category1, category1];
const posters = [hero, brandRef, productRef, hero, brandRef, productRef];

function CategoryVideoCard({ cat, index, onNav }) {
  const videoRef = useRef(null);

  // الفيديو يشتغل بس وهو ظاهر على الشاشة (أخف على الموبايل)
useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  // شغّل فوراً
  const tryPlay = () => video.play().catch(() => {});
  
  // لو الصفحة loaded
  tryPlay();
  
  // fallback: لو المتصفح رفض، انتظر أي تفاعل
  const unlock = () => { tryPlay(); document.removeEventListener("touchstart", unlock); document.removeEventListener("click", unlock); };
  document.addEventListener("touchstart", unlock, { once: true });
  document.addEventListener("click", unlock, { once: true });

  return () => {
    document.removeEventListener("touchstart", unlock);
    document.removeEventListener("click", unlock);
  };
}, []);

  return (
    <a
      href={`#/category/${encodeURIComponent(cat[0])}`}
      className={`category-video-card${index === 0 ? " category-featured" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        onNav("category", cat[0]); // الصفحة اللي هيروحلها القسم
      }}
      aria-label={cat[1]}
    >
 {/* غيّر من metadata لـ auto */}
<video
  ref={videoRef}
  className="category-video"
  src={videos[index % videos.length]}
  muted
  loop
  playsInline
  preload="auto"
/>
      <div className="video-overlay" />

      <div className="video-topline">
        <span>{cat[0]}</span>
        <span className="video-play-icon">↗️</span>
      </div>

      <div className="video-content">
        <h3>{cat[1]}</h3>
        <span className="video-explore">القسم </span>
      </div>

      <span className="video-bottom-line" />
    </a>
  );
}

export default function Categories({ onNav }) {
  const showcaseRef = useRef(null);

  return (
    <div className="gago-categories"  >
      <Header onNav={onNav} />

      {/* ===== الهيرو: صورة Azure Series ===== */}
      <section className="categories-hero">
        <img
          src={heroHome}
          alt="GAGO Furniture – Azure Series"
          className="categories-hero-img"
        />
        <div className="categories-hero-fade" />

        <button
          type="button"
          className="hero-scroll"
          onClick={() =>
            showcaseRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <small>الأقسام</small>
          <span />
        </button>
      </section>

      {/* ===== الأقسام فيديوهات على خلفية البحر ===== */}
      <main className="categories-main">
        <div className="sea-shimmer" aria-hidden="true" />

        <section className="category-showcase" ref={showcaseRef}>
          <div className="showcase-heading">
            <h2>أقسام GAGO</h2>
            <p>مساحات مختلفة. نفس الروح.</p>
          </div>

          <div className="category-video-grid">
            {cats.map((c, i) => (
              <CategoryVideoCard key={c[0] + i} cat={c} index={i} onNav={onNav} />
            ))}
          </div>
        </section>
      </main>

      <BottomNav page="categories" onNav={onNav} />
    </div>
  );
}
