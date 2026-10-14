import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Solutions from "./pages/Solutions.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import About from "./pages/About.jsx";
import Calculator from "./pages/Calculator.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`app ${dark ? "dark" : ""}`}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="*"
          element={
            <main className="section-wrap not-found">
              <h1>Page not found</h1>
              <p>The page you requested doesn't exist.</p>
              <a className="button button-primary" href="/">
                Return home
              </a>
            </main>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}
