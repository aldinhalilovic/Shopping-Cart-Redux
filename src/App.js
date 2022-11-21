import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Favourites from "./pages/favourites";
import Products from "./pages/products";
import Shop from "./pages/shop/Index";
import About from "./pages/about/Index";

function App() {
  const size = {
    minHeight: "80vh",
    scrollbarWidth: "none",
  };
  return (
    <div>
      <Navbar />
      <div style={size}>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
