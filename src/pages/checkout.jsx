import React, { useRef, useState } from "react";
import Header from "../components/header.jsx";
import { money } from "../data/index.js";

import "../styles.css";

// 👇 غيّري المسار ده لصورة الهيرو بتاعتك
import heroImg from "../assets/checkout.png";

const SHIPPING = 250;

const payMethods = [
  ["cod", "الدفع عند الاستلام"],
  ["card", "بطاقة بنكية · Visa / Mastercard"],
  ["instapay", "فوري / InstaPay"],
];

function Checkout({ cart, onNav }) {
  const formRef = useRef(null);
  const [pay, setPay] = useState("cod");

  const total =
    cart.reduce((sum, item) => sum + item.price * item.qty, 0) + SHIPPING;

  return (
    <div className="gago-categories gago-checkout"  >
      <Header onNav={onNav} />

      {/* ===== الهيرو: مكان صورتك ===== */}
      <section className="categories-hero checkout-hero">
        <img
          src={heroImg}
          alt="إتمام الطلب - GAGO"
          className="categories-hero-img"
        />
        <div className="categories-hero-fade" />

        <div className="checkout-hero-text">
          <span className="eyebrow">CHECKOUT</span>
          <h1>إتمام الطلب</h1>
        </div>

        <button
          type="button"
          className="hero-scroll"
          onClick={() =>
            formRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <small>البيانات</small>
          <span />
        </button>
      </section>

      {/* ===== المحتوى على خلفية البحر ===== */}
      <main className="categories-main">
        <div className="sea-shimmer" aria-hidden="true" />

        <section className="category-showcase" ref={formRef}>
          <div className="showcase-heading">
            <h2>بيانات الطلب</h2>
            <p>خطوات بسيطة وقطعتك في الطريق.</p>
          </div>

          {/* الخطوات */}
          <div className="checkout-steps">
            <b>1 البيانات</b>
            <span>2 الشحن</span>
            <span>3 الدفع</span>
          </div>

          {/* الفورم */}
          <div className="checkout-glass">
            <label>
              الاسم الكامل
              <input placeholder="أحمد محمد" />
            </label>

            <label>
              رقم الهاتف
              <input placeholder="01XXXXXXXXX" inputMode="tel" />
            </label>

            <label>
              المحافظة / المدينة
              <input placeholder="بورسعيد — مصر" />
            </label>

            <label>
              العنوان بالتفصيل
              <textarea placeholder="الحي، الشارع، رقم العقار" rows={3} />
            </label>
          </div>

          {/* طريقة الدفع */}
          <div className="checkout-glass">
            <h3 className="checkout-subtitle">طريقة الدفع</h3>

            {payMethods.map(([id, label]) => (
              <button
                key={id}
                type="button"
                className={`checkout-pay${pay === id ? " active" : ""}`}
                onClick={() => setPay(id)}
                aria-pressed={pay === id}
              >
                <span className="checkout-radio" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* الملخص */}
          <div className="checkout-glass checkout-summary">
            <div>
              <span>الشحن</span>
              <b>{money(SHIPPING)}</b>
            </div>
            <div className="checkout-total">
              <span>الإجمالي</span>
              <b>{money(total)}</b>
            </div>

            <button
              type="button"
              className="cart-cta"
              onClick={() => onNav("success")}
            >
              تأكيد الطلب ↗
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Checkout;