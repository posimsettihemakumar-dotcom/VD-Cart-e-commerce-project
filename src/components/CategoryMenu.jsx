import "../css/categorymenu.css";

function CategoryMenu({ categories, setSelectedCategory }) {
  return (
    <section className="categories">
      {categories.map((item, index) => (
        <div
          key={index}
          className="category-card"
          onClick={() => setSelectedCategory(item)}
        >
          <h3>{item}</h3>
        </div>
      ))}
    </section>
  );
}

export default CategoryMenu;