import "../css/productcard.css";
import { Link } from "react-router-dom";

function ProductCard({
  product,
  addToCart,
  addToWishlist,
}) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img
          src={`http://127.0.0.1:8000${product.image}`}
          alt={product.name}
          className="product-image"
        />
        <h3>{product.name}</h3>
      </Link>

      <p>{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>

      <button
        onClick={() => addToWishlist(product)}
      >
        ❤️ Wishlist
      </button>
    </div>
  );
}

export default ProductCard;