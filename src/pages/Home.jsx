import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import SortProducts from "../components/SortProducts";

function Home({
  addToCart,
  addToWishlist,
  selectedCategory,
  search,
}) {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/api/products/"
      );
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Filter
  let filteredProducts = products.filter(
    (item) =>
      (selectedCategory === "All" ||
        item.category.toLowerCase() ===
          selectedCategory.toLowerCase()) &&
      item.name.toLowerCase().includes(
        search.toLowerCase()
      )
  );

  // Sort
  if (sortType === "low") {
    filteredProducts.sort(
      (a, b) =>
        Number(a.price.replace("₹", "")) -
        Number(b.price.replace("₹", ""))
    );
  }

  if (sortType === "high") {
    filteredProducts.sort(
      (a, b) =>
        Number(b.price.replace("₹", "")) -
        Number(a.price.replace("₹", ""))
    );
  }

  if (sortType === "az") {
    filteredProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  // Pagination AFTER sorting
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const currentProducts = filteredProducts.slice(
    firstIndex,
    lastIndex
  );

  if (loading) {
    return (
      <div className="loader">
        Loading products...
      </div>
    );
  }

  return (
    <>
      <SortProducts setSortType={setSortType} />

      <div className="product-grid">
        {currentProducts.length === 0 ? (
          <h2 className="no-products">
            No Products Found 😔
          </h2>
        ) : (
          currentProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Home;