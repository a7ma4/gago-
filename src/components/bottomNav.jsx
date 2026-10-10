import React from "react";

import { useCart } from "../context/CartContext.jsx";
function BottomNav({ page, onNav }) {
  const { totalItems } = useCart();

  const items = [
    { id: "home", label: "الرئيسية", icon: "fa-solid fa-house" },
    { id: "categories", label: "الأقسام", icon: "fa-solid fa-border-all" },
    { id: "cart", label: "السلة", icon: "fa-solid fa-cart-shopping" },
    { id: "profile", label: "حسابي", icon: "fa-solid fa-user" },
    { id: "search", label: "البحث", icon: "fa-solid fa-magnifying-glass" },
  ];

  return (
    <nav className="bottomNav" aria-label="التنقل السفلي">
      {items.map(({ id, label, icon }) => (
        <button
          key={id}
          className={page === id ? "active" : ""}
          onClick={() => onNav(id)}
          aria-label={label}
        >
          <span className="navIconWrap">
            <i className={icon} aria-hidden="true"></i>
            {id === "cart" && totalItems > 0 && (
              <span className="cartBadge">{totalItems}</span>
            )}
          </span>
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}

export default BottomNav;