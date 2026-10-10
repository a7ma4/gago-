import React, { useRef } from "react";
import Header from "../components/header.jsx";
import BottomNav from "../components/bottomNav.jsx";

import "../styles.css";

import hero from "../assets/hero.webp";
import brandRef from "../assets/harbor.webp";

const timeline = [
  ["1859", "بداية الحكاية", "طلعت أرض من البحر واتسمت بورسعيد."],
  ["1869", "فنار المدينة", "علامة على الأفق وروح تتطلع للمستقبل."],
  ["2023", "ولدت GAGO", "من أرض بورسعيد، بأيادي مصرية وبجودة تنافس العالم."],
];

function About({ onNav }) {
  const storyRef = useRef(null);

  return (
    <div className="gago-categories gago-about"  >
      <Header onNav={onNav} />

      {/* ===== الهيرو ===== */}
      <section className="categories-hero about-hero">
        <img
          src={hero}
          alt="GAGO Furniture"
          className="categories-hero-img"
        />
        <div className="categories-hero-fade" />

        <div className="about-hero-text">
          <span className="eyebrow">GAGO FURNITURE</span>
          <h1>
            FROM LAND
            <br />
            TO SEA.
          </h1>
        </div>

        <button
          type="button"
          className="hero-scroll"
          onClick={() =>
            storyRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <small>الحكاية</small>
          <span />
        </button>
      </section>

      {/* ===== المحتوى على خلفية البحر ===== */}
      <main className="categories-main">
        <div className="sea-shimmer" aria-hidden="true" />

        <section className="category-showcase" ref={storyRef}>
          <div className="showcase-heading">
            <h2>الحكاية</h2>
            <p>من البحر للبر.</p>
          </div>

          {/* القصة */}
          <article className="about-glass about-story">
            <div className="video-topline">
              {/* <span>THE STORY</span> */}
              {/* <span className="video-play-icon">↗</span> */}
            </div>

            <h3>بورسعيد كانت من البحر للبر... ورحلتنا إحنا العكس.</h3>

            <p>
              من مدينة اتبنت من البحر ووصلت العالم بقناة السويس،
              بنبني GAGO من أرض بورسعيد ونوصلها للعالم.
            </p>

            <span className="video-bottom-line" />
          </article>

          {/* الخط الزمني */}
          <div className="about-timeline">
            {timeline.map(([year, title, text]) => (
              <article className="about-glass" key={year}>
                <b className="about-year">{year}</b>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="video-bottom-line" />
              </article>
            ))}
          </div>

          {/* صورة الختام */}
          <article
            className="about-photo"
            style={{ backgroundImage: `url(${brandRef})` }}
          >
            <div className="video-overlay" />
            <div className="about-photo-content">
              <span className="eyebrow">BUILT LIKE THE CITY.</span>
              <h2>بسيط. قوي. وله قصة.</h2>
            </div>
            <span className="video-bottom-line" />
          </article>
        </section>
      </main>

      <BottomNav page="profile" onNav={onNav} />
    </div>
  );
}

export default About;