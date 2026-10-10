import React, { useRef } from "react";
import Header from "../components/header.jsx";
import BottomNav from "../components/bottomNav.jsx";
import { money } from "../data/index.js";

import "../styles.css";

// نفس صورة الهيرو المستخدمة في صفحة الأقسام
import heroHome from "../assets/heroHome.png";

const SHIPPING = 250;

function Cart({ cart, onNav, onQty }) {
  const listRef = useRef(null);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="gago-categories gago-cart"  >
      <Header onNav={onNav} />

      {/* ===== الهيرو (نسخة أقصر من هيرو الأقسام) ===== */}
      <section className="categories-hero cart-hero">
        <img
          src={heroHome}
          alt="GAGO Furniture – Azure Series"
          className="categories-hero-img"
        />
        <div className="categories-hero-fade" />

        <div className="cart-hero-text">
          <span className="eyebrow">YOUR PIECES</span>
          <h1>سلة مختارة</h1>
          <p>قطع مختارة من بورسعيد إلى بيتك.</p>
        </div>

      
      </section>

      {/* ===== المحتوى على خلفية البحر ===== */}
      <main className="categories-main">
        <div className="sea-shimmer" aria-hidden="true" />

        <section className="category-showcase" ref={listRef}>
          <div className="showcase-heading">
            <h2>قطعك من GAGO</h2>
            <p>
              {cart.length
                ? "راجع اختياراتك قبل ما نكمل."
                : "ابدأ بإضافة قطعة تعجبك."}
            </p>
          </div>

          {cart.length ? (
            <div className="cart-glass-list">
              {cart.map((item) => (
                <article className="cart-glass-card" key={item.id}>
                  <div className="cart-glass-img">
                    <img src={item.img} alt={item.name} />
                    <div className="video-overlay" />
                  </div>

                  <div className="cart-glass-info">
                    <div className="video-topline">
                      <span>{item.cat}</span>
                    </div>

                    <h3>{item.name}</h3>
                    <strong className="cart-price">{money(item.price)}</strong>

                    <div className="cart-qty">
                      <button
                        type="button"
                        onClick={() => onQty(item.id, -1)}
                        aria-label="تقليل الكمية"
                      >
                        −
                      </button>
                      <b>{item.qty}</b>
                      <button
                        type="button"
                        onClick={() => onQty(item.id, 1)}
                        aria-label="زيادة الكمية"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="cart-remove"
                    onClick={() => onQty(item.id, -99)}
                    aria-label={`حذف ${item.name} من السلة`}
                  >
                    ×
                  </button>

                  <span className="video-bottom-line" />
                </article>
              ))}
            </div>
          ) : (
            <div className="cart-empty-glass">
              <p>السلة فاضية حاليًا.</p>
              <button
                type="button"
                className="cart-cta"
                onClick={() => onNav("categories")}
              >
                ابدأ التسوق ↗
              </button>
            </div>
          )}

          {cart.length > 0 && (
            <div className="cart-summary-glass">
              <div>
                <span>المجموع الفرعي</span>
                <b>{money(total)}</b>
              </div>
              <div>
                <span>الشحن</span>
                <b>{money(SHIPPING)}</b>
              </div>
              <div className="cart-total">
                <span>الإجمالي</span>
                <b>{money(total + SHIPPING)}</b>
              </div>

              <button
                type="button"
                className="cart-cta"
                onClick={() => onNav("checkout")}
              >
                متابعة الشراء ↗
              </button>
            </div>
          )}
        </section>
      </main>

      <BottomNav page="cart" onNav={onNav} />
    </div>
  );
}

export default Cart;