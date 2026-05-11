import { useState } from "react";
import "../css/coupon.css";

function Coupon({ total, setDiscount }) {
  const [code, setCode] = useState("");

  const applyCoupon = () => {
    if (code === "SAVE10") {
      setDiscount(total * 0.1);
      alert("10% Discount Applied 🎉");
    } else if (code === "SAVE20") {
      setDiscount(total * 0.2);
      alert("20% Discount Applied 🎉");
    } else {
      alert("Invalid Coupon");
    }
  };

  return (
    <div className="coupon-box">
      <input
        type="text"
        placeholder="Enter Coupon Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button onClick={applyCoupon}>
        Apply
      </button>
    </div>
  );
}

export default Coupon;