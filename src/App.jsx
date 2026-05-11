import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import CategoryMenu from "./components/CategoryMenu";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Reviews from "./pages/Reviews";
import ProductDetails from "./pages/ProductDetails";

import ProtectedRoute from "./components/ProtectedRoute";
import Wishlist from "./pages/Wishlist";
import Payment from "./pages/Payment";
import Address from "./pages/Address";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const[wishlist,setWishlist]=useState([])

  const categories = [
    "All",
    "Mobiles",
    "Fashion",
    "Electronics",
    "Home",
    "Beauty",
    "Grocery",
    "Books",
    "Appliances",
  ];

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

 const removeFromCart = (id) => {
  const updatedCart = cart.filter(
    (item) => item.id !== id
  );
  setCart(updatedCart);
};

  const increaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  };

  const decreaseQty = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };
  const addToWishlist=(product)=>{
    const exists =wishlist.find(
      (item)=>item.id===product.id
    );
    if (!exists){
      setWishlist([...wishlist,product]);
    }
  }
  const removeFromWishlist=(id)=>{
    setWishlist(
      wishlist.filter((item)=>item.id!==id)
    );
  }

  return (
    <>
      <Navbar
        cart={cart}
        search={search}
        setSearch={setSearch}
      />

      <Routes>
        <Route path="/login" element={<Auth />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <>
                <Banner />
                <CategoryMenu
                  categories={categories}
                  setSelectedCategory={setSelectedCategory}
                />
                <Home
                  addToCart={addToCart}
                  addToWishlist={addToWishlist}
                  selectedCategory={selectedCategory}
                  search={search}
                />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetails addToCart={addToCart} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout cart={cart} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reviews"
          element={
            <ProtectedRoute>
              <Reviews />
            </ProtectedRoute>
          }
        />
       <Route
  path="/wishlist"
  element={
    <ProtectedRoute>
      <Wishlist
        wishlist={wishlist}
        addToCart={addToCart}
        removeFromWishlist={removeFromWishlist}
      />
    </ProtectedRoute>
  }
/>
<Route
  path="/payment"
  element={
    <ProtectedRoute>
      <Payment cart={cart}/>
    </ProtectedRoute>
  }
/>
<Route
  path="/address"
  element={
    <ProtectedRoute>
      <Address />
    </ProtectedRoute>
  }
/>
<Route
  path="/orders"
  element={
    <ProtectedRoute>
      <Orders />
    </ProtectedRoute>
  }
/>
<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
<Route
  path="/success"
  element={
    <ProtectedRoute>
      <OrderSuccess />
    </ProtectedRoute>
  }
/>

      </Routes>
      <Footer/>
    </>
  );
}

export default App;