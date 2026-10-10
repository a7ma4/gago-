import React, { useState } from "react";
import logo from "../assets/GAGO-Logo.png";
import Menu from "./Menu";

function Header({ onNav }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="topbar">
        <button
          className="iconBtn menuBtn"
          aria-label="فتح الأقسام"
          onClick={() => setMenuOpen(true)}
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
          <button onClick={() => onNav("distributors")}> الموزعين</button>
        </nav>

        <div className="headActions">
         
          <button className="iconBtn" aria-label="سلة التسوق" onClick={() => onNav("cart")}>
            <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
          </button>
        </div>
      </header>

      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} onNav={onNav} />
    </>
  );
}

export default Header;