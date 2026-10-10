
import React from "react";

import logo from "../assets/logo.jpg";
import hero from "../assets/hero.webp";

function Success({ onNav }) {
  return (
    <main
      className="success"
      style={{
        backgroundImage: `linear-gradient(#f1e7dbcc,#f1e7dbdd),url(${hero})`,
      }}
    >
      <img src={logo} alt="GAGO Logo" />

      <div className="check">✓</div>

      <span className="eyebrow">ORDER CONFIRMED</span>

      <h1>تم تأكيد طلبك بنجاح</h1>

      <p>قطعة من بورسعيد في طريقها إليك.</p>

      <strong>#GAGO4587</strong>

      <button className="darkPill" onClick={() => onNav("home")}>
        العودة للتسوق →
      </button>

      <small>FROM LAND TO SEA</small>
    </main>
  );
}

export default Success;
