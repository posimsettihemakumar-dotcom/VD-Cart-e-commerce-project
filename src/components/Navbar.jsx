import { Link, useNavigate } from "react-router-dom";
import "../css/navbar.css";

function Navbar({ cart, search, setSearch }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged out");
    navigate("/auth");
  };

  return (
    <nav className="navbar">
      <div className="logo">🛍️VD CART</div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search Products...🔍"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <div className="nav-buttons">
        {token ? (
          <button onClick={logout}>
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart">
          <button>
            Cart 🛒({cart.length})
          </button>
        </Link>

        <Link to="/wishlist">
          <button>Wishlist ❤️</button>
        </Link>

        <Link to="/reviews">
          <button>Reviews⭐</button>
        </Link>

        <Link to="/orders">
          <button>Orders📦</button>
        </Link>

        <Link to="/profile">
          <button>Profile🪪</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;