import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";
import "./styles.css";

import Home from "./pages/home.jsx";
import Categories from "./pages/categories.jsx";
import Listing from "./pages/listing.jsx";
import ProductDetails from "./pages/productDetails.jsx";
import Cart from "./pages/cart.jsx";
import Checkout from "./pages/checkout.jsx";
import About from "./pages/about.jsx";
import Success from "./pages/success.jsx";
import Distributors from "./pages/distributors.jsx";
import Search from "./pages/search.jsx";
import Profile from "./pages/profile.jsx";

import { products } from "./data/index.js";
import { useCart } from "./context/CartContext.jsx";

// Maps the old onNav("pageName", arg) calls used across every page/component
// to real routes, so none of the page files need to change.
function routeFor(pageName, arg) {
  switch (pageName) {
    case "home":
      return "/";
    case "category":
      return `/category/${encodeURIComponent(arg)}`;
    case "product":
      return `/product/${encodeURIComponent(arg?.id ?? arg)}`;
    case "wishlist":
      return "/profile";
    case "menu":
      return null; // menu is a UI toggle, not a navigation target
    default:
      return `/${pageName}`;
  }
}

function useAppNav() {
  const navigate = useNavigate();
  return (pageName, arg) => {
    const path = routeFor(pageName, arg);
    if (!path) return;
    navigate(path);
  };
}

function HomeRoute() {
  const nav = useAppNav();
  return <Home onNav={nav} onProduct={(p) => nav("product", p)} />;
}

function CategoriesRoute() {
  const nav = useAppNav();
  return <Categories onNav={nav} />;
}

function ListingRoute() {
  const nav = useAppNav();
  const { slug } = useParams();
  return (
    <Listing
      category={slug}
      onNav={nav}
      onProduct={(p) => nav("product", p)}
    />
  );
}

function ProductRoute() {
  const nav = useAppNav();
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => String(p.id) === id) || products[0];

  const add = () => {
    if (!product) return;
    addToCart(product, 1);
  };

  return <ProductDetails p={product} onNav={nav} onAdd={add} />;
}

function CartRoute() {
  const nav = useAppNav();
  const { items, updateQty, removeFromCart } = useCart();

  const qty = (id, change) => {
    if (change === -99) {
      removeFromCart(id);
      return;
    }
    const current = items.find((item) => item.id === id);
    if (!current) return;
    updateQty(id, Math.max(1, current.qty + change));
  };

  return <Cart cart={items} onNav={nav} onQty={qty} />;
}

function CheckoutRoute() {
  const nav = useAppNav();
  const { items } = useCart();
  return <Checkout cart={items} onNav={nav} />;
}

function AboutRoute() {
  const nav = useAppNav();
  return <About onNav={nav} />;
}

function DistributorsRoute() {
  const nav = useAppNav();
  return <Distributors onNav={nav} />;
}

function SuccessRoute() {
  const nav = useAppNav();
  return <Success onNav={nav} />;
}

function SearchRoute() {
  const nav = useAppNav();
  return <Search onNav={nav} onProduct={(p) => nav("product", p)} />;
}

function ProfileRoute() {
  const nav = useAppNav();
  return <Profile onNav={nav} />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeRoute />} />
      <Route path="/categories" element={<CategoriesRoute />} />
      <Route path="/category/:slug" element={<ListingRoute />} />
      <Route path="/product/:id" element={<ProductRoute />} />
      <Route path="/cart" element={<CartRoute />} />
      <Route path="/checkout" element={<CheckoutRoute />} />
      <Route path="/about" element={<AboutRoute />} />
      <Route path="/distributors" element={<DistributorsRoute />} />
      <Route path="/success" element={<SuccessRoute />} />
      <Route path="/search" element={<SearchRoute />} />
      <Route path="/profile" element={<ProfileRoute />} />
      <Route path="/wishlist" element={<ProfileRoute />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;