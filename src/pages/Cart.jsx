import "../css/cart.css";
import Coupon from "../components/Coupon";
import { useState } from "react";
import { Link } from "react-router-dom";

function Cart({ cart, removeFromCart, increaseQty, decreaseQty }) {

  const total = cart.reduce(
    (sum, item) =>
      sum +
      Number(item.price.replace("₹", "").replace(/,/g, "")) *
        item.quantity,
    0
  );
  const[discount,setDiscount]=useState(0)
  const finalTotal=total-discount

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      <Coupon
      total={total}
      setDiscount={setDiscount}/>

      {cart.length === 0 ? (
        <p className="cart">Cart is Empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>

              <h3>{item.name}</h3>

              <p>{item.price}</p>

              <div className="qty-box">
                <button onClick={() => decreaseQty(item.id)}>-</button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>

            </div>
          ))}

          <h2 className="total">Total: ₹{total}</h2>
        </>
      )}
      <div className="cart-buttons">
      <Link to="/checkout">
           <button className="checkout-btn">
            Proceed to Checkout
           </button>
      </Link>
      

</div>
    </div>
  );
}

export default Cart;