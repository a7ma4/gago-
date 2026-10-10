import React, { useEffect, useRef } from "react";
import Header from "../components/header.jsx";
import BottomNav from "../components/bottomNav.jsx";
import ProductCard from "../components/productCard.jsx";
import { products, cats, money } from "../data";

import "../styles.css";

import heroHome from "../assets/hero.jpg";
import storyPhoto from "../assets/photo_2026-10-10_18-38-33.jpg";

// فيديو الأقسام (غيّري الاسم/المسار لو عندك فيديو مختلف لكل قسم)
import category1 from "../assets/category-1.mp4.mp4";

const videos = [category1, category1, category1, category1];

function HomeCategoryVideoCard({ cat, index, onNav }) {
  const videoRef = useRef(null);

  // الفيديو يشتغل بس وهو فعلاً ظاهر على الشاشة، ويوقف لما يخرج برا
  // الشاشة — بالطريقة دي مش بنحمّل/نشغّل كل الفيديوهات مرة واحدة
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => video.play().catch(() => {});

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tryPlay();
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 } // يشتغل لما 40% من الكارت يبان
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={`#/category/${encodeURIComponent(cat[0])}`}
      className="category-video-card"
      onClick={(e) => {
        e.preventDefault();
        onNav("category", cat[0]); // الصفحة اللي هيروحلها القسم
      }}
      aria-label={cat[1]}
    >
      <video
        ref={videoRef}
        className="category-video"
        src={videos[index % videos.length]}
        muted
        playsInline
        preload="metadata"
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

function Home({ onNav, onProduct }) {
  return (
    <div className="gago-home">
      <Header onNav={onNav} />

      <main className="page">
        {/* HERO */}
        <section
          className="gago-hero"
          style={{ backgroundImage: `url(${heroHome})` }}
        >
          <div className="hero-content">
            <button className="hero-explore" onClick={() => onNav("categories")}>
              <span>اكتشف المجموعة</span>
              <span className="hero-arrow" aria-hidden="true">↗</span>
            </button>
          </div>

          <div className="hero-bottom-label">
            <span>صُنع في بورسعيد</span>
            <span>GAGO FURNITURE · PORT SAID, EGYPT</span>
          </div>
        </section>

        {/* STORY */}
        <section className="gago-story section">
          <div className="story-copy">
            <span className="eyebrow">OUR STORY · PORT SAID</span>
            <h2>
              حكاية بدأت
              <br />
              <em>من البحر.</em>
            </h2>
            <p>
              من روح بورسعيد، بنصمم قطع أثاث تجمع بين جمال الخامات
              وبساطة التصميم، علشان كل قطعة يبقى ليها حكاية.
            </p>
            <button className="gago-button" onClick={() => onNav("about")}>
              اكتشف حكايتنا <span>↗</span>
            </button>
          </div>

          <div className="story-image-wrap">
            <img src={storyPhoto} alt="قطعة من تصميم GAGO Furniture" />
            <span className="image-caption">INSPIRED BY THE SEA</span>
          </div>
        </section>

        {/* MOVING BRAND STRIP */}
        <div className="gago-marquee">
          <div className="marquee-track">
            {[0, 1, 2, 3].map((item) => (
              <span key={item}>
                GAGO FURNITURE <i>✳</i> FROM PORT SAID TO THE WORLD <i>✳</i>
              </span>
            ))}
          </div>
        </div>

        {/* CATEGORIES — نفس كارت الفيديو بتاع صفحة الأقسام */}
        <section className="section gago-section">
          <div className="sectionHead">
            <div>
              <span className="eyebrow">SHOP BY SPACE</span>
              <h2>اختار مساحتك</h2>
            </div>

            <button className="gago-text-button" onClick={() => onNav("categories")}>
              كل التصنيفات ↗
            </button>
          </div>

          <div className="category-video-grid">
            {cats.slice(0, 4).map((category, index) => (
              <HomeCategoryVideoCard
                key={category[0]}
                cat={category}
                index={index}
                onNav={onNav}
              />
            ))}
          </div>
        </section>

        {/* SHELL COLLECTION */}
        <section className="gago-shell-section">
          <div className="shell-heading">
            <span className="eyebrow">THE SHELL COLLECTION</span>
            <h2>
              لؤلؤة من
              <br />
              <em>بورسعيد.</em>
            </h2>
            <p>
              تفاصيل مستوحاة من البحر، وأثاث بتصميم معاصر
              يحافظ على جمال الخامات الطبيعية.
            </p>
          </div>

          <div className="gago-shell-grid">
            {products.slice(0, 3).map((product, index) => (
              <button
                key={product.id}
                className="gago-shell-card"
                onClick={() => onProduct(product)}
              >
                <div className="shell-art">
                  <img
                    className="shell-product"
                    src={product.img}
                    alt={product.name}
                  />
                  <span className="shell-index">0{index + 1}</span>
                </div>

                <div className="shell-product-info">
                  <div>
                    <h3>{product.ar || product.name}</h3>
                    <span>{product.tag}</span>
                  </div>
                  <strong>{money(product.price)}</strong>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="section gago-section">
          <div className="sectionHead">
            <div>
              <span className="eyebrow">THE GAGO EDIT</span>
              <h2>قطع لها حضور</h2>
            </div>

            <button className="gago-text-button" onClick={() => onNav("categories")}>
              تسوق المجموعة ↗
            </button>
          </div>

          <div className="productGrid">
            {products.map((product) => (
              <ProductCard key={product.id} p={product} onClick={() => onProduct(product)} />
            ))}
          </div>
        </section>

        {/* FIND A SHOWROOM */}
        <section className="gago-find gago-find-plain">
          <div className="find-overlay" />
          <div className="find-content">
            <span className="eyebrow">COME CLOSER TO GAGO</span>
            <h2>المكان جزء من الحكاية.</h2>
            <p>اكتشف أقرب موزع ومعرض ليك.</p>
            <button className="gago-button gago-button-light" onClick={() => onNav("distributors")}>
              ابحث عن موزع <span>↗</span>
            </button>
          </div>
        </section>
      </main>

      <BottomNav page="home" onNav={onNav} />
    </div>
  );
}

export default Home;