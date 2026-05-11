import "../css/order.css";

function Orders() {
  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="orders-container">
      <h1>My Orders 📦</h1>

      {orders.length === 0 ? (
        <h2>No orders yet</h2>
      ) : (
        orders.map((order) => (
          <div
            className="order-card"
            key={order.id}
          >
            <h3>{order.name}</h3>
            <p>{order.price}</p>
            <p>Status: {order.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;