import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './pages/Product';
import About from './pages/About';
import Home from './pages/Home'
import Contact from './pages/Contact';
import ProductDetail from "./pages/ProductDetail";
import Layout from "./components/Layout";
function App() {
return (
<Router>
<Layout>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/product" element={<Product/>}/>
<Route path="/product" element={<About/>}/>
<Route path="/product" element={<Contact/>}/>
<Route path="/product/:id" element={<ProductDetail/>}/>
</Routes>
</Layout>
</Router>
);
}
export default App;