import React, { useRef } from "react";
import Header from "../components/header.jsx";
import BottomNav from "../components/bottomNav.jsx";

import "../styles.css";

// نفس صورة الهيرو المستخدمة في الأقسام والسلة
import heroHome from "../assets/heroHome.png";

const menu = [
  ["طلباتي", "orders"],
 
  ["عناويني", "profile"],
  ["طرق الدفع", "checkout"],
  ["موزعينا", "distributors"],
  ["عن GAGO", "about"],
  ["المساعدة والدعم", "profile"],
 
];

function Profile({ onNav }) {
  const menuRef = useRef(null);

  return (
    <div className="gago-categories gago-profile"  >
      <Header onNav={onNav} />

      {/* ===== الهيرو (نسخة أقصر) ===== */}
      <section className="categories-hero profile-hero">
        <img
          src={heroHome}
          alt="GAGO Furniture – Azure Series"
          className="categories-hero-img"
        />
        <div className="categories-hero-fade" />

        <div className="profile-hero-content">
          <div className="profile-avatar">أ</div>

          <div className="profile-hero-text">
            <span className="eyebrow">WELCOME BACK</span>
            <h1>أحمد محمد</h1>
            <p>ahmed@example.com</p>
          </div>
        </div>

       
      </section>

      {/* ===== القائمة على خلفية البحر ===== */}
      <main className="categories-main">
        <div className="sea-shimmer" aria-hidden="true" />

        <section className="category-showcase" ref={menuRef}>
          <div className="showcase-heading">
            <h2>حسابك في GAGO</h2>
            <p>كل اللي تحتاجه في مكان واحد.</p>
          </div>

          <div className="profile-glass-list">
            {menu.map(([label, page], i) => (
              <button
                type="button"
                key={label + i}
                className="profile-glass-item"
                onClick={() => onNav(page)}
              >
                <span>{label}</span>
                <span className="video-play-icon">↗</span>
                <span className="video-bottom-line" />
              </button>
            ))}
          </div>
        </section>
      </main>

      <BottomNav page="profile" onNav={onNav} />
    </div>
  );
}

export default Profile;