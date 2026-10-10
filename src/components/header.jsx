import React from "react";
import logo from "../assets/GAGO-Logo.png";

function Header({ onNav }) {
  return (
    <header className="topbar">
      <button
        className="iconBtn menuBtn"
        aria-label="فتح الأقسام"
        onClick={() => onNav("categories")}
      >
        <i className="fa-solid fa-bars" aria-hidden="true"></i>
      </button>
      <button className="brand" onClick={() => onNav("home")} aria-label="GAGO Furniture - الرئيسية">
        <img src={logo} alt="GAGO Furniture" />
      </button>



      
      <nav className="desktopNav" aria-label="التنقل الرئيسي">
        <button onClick={() => onNav("home")}>الرئيسية</button>
        <button onClick={() => onNav("categories")}>المجموعة</button>
        <button onClick={() => onNav("about")}>حكايتنا</button>
        <button onClick={() => onNav("distributors")}>المعارض</button>
      </nav>




      <div className="headActions">
        <button className="iconBtn" aria-label="بحث" onClick={() => onNav("search")}>
          <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        </button>
        <button className="iconBtn" aria-label="سلة التسوق" onClick={() => onNav("cart")}>
          <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;