import React from 'react';
const money = (n) => new Intl.NumberFormat("en-EG").format(n) + " EGP";
function ProductCard({ p, onClick }) {
  return (
    <button className="pCard" onClick={onClick}>
     <div className="pImage">
  <img src={p.img} alt={p.name || p.ar} />
  {/* <span>{p.tag}</span> */}
  <i>♡</i>
</div>
      <div className="pBody">
        <small>{p.cat}</small>
        <h3>{p.name}</h3>
        <p>{p.ar}</p>
        <strong>{money(p.price)}</strong>
      </div>
    </button>
  );
}

export default ProductCard;
