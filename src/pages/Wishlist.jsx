import "../css/wishlist.css";

function Wishlist({
  wishlist,
  addToCart,
  removeFromWishlist,
}) {
  return (
    <div className="wishlist-container">
      <h1>My Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <h2>No wishlist items</h2>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <img
                src={`http://127.0.0.1:8000${item.image}`}
                alt={item.name}
                className="wishlist-image"
              />

              <h3>{item.name}</h3>
              <p>{item.price}</p>

              <button
                onClick={() => addToCart(item)}
              >
                Add To Cart
              </button>

              <button
                className="remove-btn"
                onClick={() =>
                  removeFromWishlist(item.id)
                }
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;