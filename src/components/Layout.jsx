import React from "react";
import { NavLink } from "react-router-dom";
const Layout = ({ children }) => (
<div className="layout">
<header>
<nav>
<NavLink to="/" activeClassName="active">Home</NavLink>
<NavLink to="/about" activeClassName="active">About</NavLink>
<NavLink to="/contact" activeClassName="active">Contact</NavLink>
<NavLink to="/product" activeClassName="active">Product</NavLink>
</nav>
</header>
<main>{children}</main>
<footer>
<p>&copy; Your Company 2023</p>
</footer>
</div>
);
export default Layout;