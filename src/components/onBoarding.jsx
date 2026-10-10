import React, { useState } from "react";
import hero from "../assets/heroHome.webp";
import brandRef from "../assets/harbor.webp";
import productRef from "../assets/build.webp";

function Onboarding({ onDone }) {
  const [i, setI] = useState(0);
    const slides = [
    {
      img: hero,
      k: "BORN IN PORT SAID",
      t: "From Land to Sea",
      p: "Modern furniture with an Egyptian spirit, from a city built from the sea.",
      c:"#fff"
    },
    {
      img: brandRef,
      k: "BUILT LIKE THE CITY",
      t: "From Port Said... to the World",
      p: "بورسعيد بدأت رحلتها من البحر للبر، لكن رحلتنا إحنا بالعكس تمامًا؛ من بر المدينة للبحر. وده ببساطة جوهر شعارنا، إننا بنبدأ من أرضنا، وننطلق لآفاق وأراضٍ جديدة. والبحر هنا مش مجرد بحر، لكنه رمز لكل رحلة بتاخدنا لمكان أبعد وفرص أكبر.",
      c:"#3d3d2d",
    },
    {
      img: productRef,
      k: "From Land to Sea",
      t: "Built Like The City",
        p: "وبنفس الروح دي، اتولد جاجو بنشتغل زي ما أصحاب الأرض اشتغلوا... إيدنا في البر، وعينينا على البحر، إحنا من بورسعيد، من السكان الأصليين، قررنا نبني البراند بتاعنا زي ما بورسعيد اتبنت، وقررنا نكبر فيها ونوصل للعالم منها وإليها بجودة تنافس التجارة العالمية وبأيادي مصرية بورسعيدية.",
        c:"#2F211A"
    },
  ];
  const s = slides[i];

  return (
    <div className="onboard" style={{ backgroundImage: `url(${s.img})` }}>
      <div className="onCopy">
        <div className="eyebrow">{s.k}</div>
        <h1>{s.t}</h1>
        <h3 style={{ color: s.c }}>{s.p}</h3>
        <div className="dots">
          {slides.map((_, x) => (
            <i className={x === i ? "on" : ""} key={x} />
          ))}
        </div>
        <div className="onActions">
          <button
            className="darkPill"
            onClick={() => (i < 2 ? setI(i + 1) : onDone())}
          >
            {i < 2 ? "التالي" : "ابدأ رحلتك"} <span>→</span>
          </button>
          <button className="skip" onClick={onDone}>تخطي</button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;