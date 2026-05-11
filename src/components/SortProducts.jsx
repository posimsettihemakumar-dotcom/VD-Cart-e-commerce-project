import "../css/sortproducts.css";

function SortProducts({ setSortType }) {
  return (
    <div className="sort-box">
      <select
        onChange={(e) =>
          setSortType(e.target.value)
        }
      >
        <option value="">Sort Products</option>
        <option value="low">Price Low to High</option>
        <option value="high">Price High to Low</option>
        <option value="az">Name A-Z</option>
      </select>
    </div>
  );
}

export default SortProducts;