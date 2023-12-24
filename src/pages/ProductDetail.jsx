import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../ProductData";
const ProductDetail = () => {
const params = useParams();
const navigate = useNavigate()
const goBack = () => {
navigate("/product")
}
return (
<>
<h1>ProductDetail</h1>
<hr />
<p>Product ID: {params.id}</p>
<p>Name: {products[params.id].name}</p>
<p>Price: {products[params.id].price}</p>
<button onClick={goBack}>Back</button>
</>
);
};
export default ProductDetail;