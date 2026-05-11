import { Link } from "react-router-dom";
import "../css/ordersuccess.css";

function OrderSuccess() {
  return (
    <div className="success-container">
      <div className="success-box">
        <h1>🎉 Order Placed Successfully!</h1>
        <p>Your order will be delivered soon.</p>

        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;