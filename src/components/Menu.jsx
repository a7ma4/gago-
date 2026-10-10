import React from "react";
import logo from "../assets/GAGO-Logo.png";

function Menu({ open, onClose, onNav }) {
  const go = (page) => {
    onNav(page);
    onClose();
  };

  return (
    <>
      {/* الخلفية الشفافة - تقفل القائمة لما تدوس برا */}
      <div
        className={`menuOverlay ${open ? "show" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* القائمة الجانبية */}
      <aside className={`sideMenu ${open ? "open" : ""}`} aria-label="القائمة الرئيسية">
        <div className="sideMenuHead">
          <img src={logo} alt="GAGO Furniture" className="sideMenuLogo" />
          <button className="iconBtn closeBtn" aria-label="إغلاق القائمة" onClick={onClose}>
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>

        <nav className="sideMenuNav" aria-label="روابط القائمة">
          <button onClick={() => go("about")}>
            <i className="fa-solid fa-book-open" aria-hidden="true"></i>
            حكايتنا
          </button>
          <button onClick={() => go("distributors")}>
            <i className="fa-solid fa-store" aria-hidden="true"></i>
             الموزعين
          </button>
          <button onClick={() => go("search")}>
            <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
            بحث
          </button>
        </nav>

        {/* تسجيل الدخول / حسابي - ثابت تحت خالص */}
        <div className="sideMenuFooter">
          <button className="accountBtn" onClick={() => go("account")}>
            <i className="fa-solid fa-user" aria-hidden="true"></i>
            تسجيل الدخول
          </button>
        </div>
      </aside>
    </>
  );
}

export default Menu;
