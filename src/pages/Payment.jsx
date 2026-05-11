import { useState } from "react";
import "../css/payment.css";
import { useNavigate } from "react-router-dom";

function Payment({ cart }) {
  const [method, setMethod] = useState("card");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const navigate = useNavigate();

  const handlePayment = () => {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    if (method === "card") {
      if (!cardName || !cardNumber || !expiry || !cvv) {
        alert("Fill all payment details");
        return;
      }
    }

    let oldOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const newOrders = cart.map((item) => ({
      id: Date.now() + item.id,
      name: item.name,
      price: item.price,
      status: "Delivered",
    }));

    localStorage.setItem(
      "orders",
      JSON.stringify([...oldOrders, ...newOrders])
    );

    if (method === "cod") {
      alert("Order placed with Cash on Delivery ✅");
    } else {
      alert("Payment Successful 🎉");
    }

    navigate("/success");
  };

  return (
    <div className="payment-container">
      <div className="payment-box">
        <h1>Choose Payment</h1>

        <div className="payment-methods">
          <label>
            <input
              type="radio"
              value="card"
              checked={method === "card"}
              onChange={(e) => setMethod(e.target.value)}
            />
            Card Payment
          </label>

          <label>
            <input
              type="radio"
              value="cod"
              checked={method === "cod"}
              onChange={(e) => setMethod(e.target.value)}
            />
            Cash on Delivery
          </label>
        </div>

        {method === "card" && (
          <>
            <input
              type="text"
              placeholder="Card Holder Name"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />

            <div className="payment-row">
              <input
                type="text"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />

              <input
                type="password"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </>
        )}

        <button onClick={handlePayment}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Payment;