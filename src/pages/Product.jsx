import React from 'react'
import { NavLink } from "react-router-dom"
import { products } from '../ProductData'
const Product = () => {
  return (
    <div>
    <h1>Product</h1>
    <hr />
    <table border="1" style={{width: "100%"}}>
<tr>
<th>ID</th>
<th>Name</th>
<th>Price</th>
<th>Detail</th>
</tr>
{
products.map((p)=>(
<tr>
<td>{p.id}</td>
<td>{p.name}</td>
<td>{p.price}</td>
<td>
<NavLink to={"/product/"+p.id}>[Detail]</NavLink>
</td>
</tr>
))
}
</table>
    </div>
    
  )
}

export default Product