import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../css/productdetails.css";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const res = await axios.get(
      "http://127.0.0.1:8000/api/products/"
    );

    const found = res.data.find(
      (item) => item.id === Number(id)
    );

    setProduct(found);
  };

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details-container">
      <img
        src={`http://127.0.0.1:8000${product.image}`}
        alt={product.name}
        className="details-image"
      />

      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      <p>{product.description}</p>
      <p><b>Category:</b> {product.category}</p>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductDetails;