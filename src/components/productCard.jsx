import React, { useState } from "react";
import { useCart } from "../context/CartContext.jsx";

const money = (n) => new Intl.NumberFormat("en-EG").format(n) + " EGP";

function ProductCard({ p, onClick }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation(); // عشان ميفتحش صفحة المنتج لما تدوس على الزرار
    addToCart(p, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <button className="pCard" onClick={onClick} style={{position:'relative',}}>
      <div className="pImage">
        <img src={p.img} alt={p.name || p.ar} />

        
      </div>

      <div className="pBody">
        <small>{p.cat}</small>
        <h3>{p.name}</h3>
        <p>{p.ar}</p>
        <strong>{money(p.price)}</strong>
      </div>


<span
          className={`addToCartCircle ${added ? "added" : ""}`}
          role="button"
          tabIndex={0}
          aria-label="أضف للسلة"
          onClick={handleAdd}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleAdd(e);
            }
          }}
        >
          <i
            className={`fa-solid ${added ? "fa-check" : "fa-cart-plus"}`}
            aria-hidden="true"
          ></i>
        </span>

    </button>
  );
}

export default ProductCard;