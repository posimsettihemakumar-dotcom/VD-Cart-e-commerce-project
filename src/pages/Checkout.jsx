import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/checkout.css";

function Checkout() {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");

  const handleCheckout = () => {
    if (!address) {
      alert("Enter delivery address");
      return;
    }

    localStorage.setItem("address", address);

    navigate("/payment");
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <textarea
        placeholder="Enter delivery address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button onClick={handleCheckout}>
        Continue
      </button>
    </div>
  );
}

export default Checkout;