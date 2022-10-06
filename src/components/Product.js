import React, { useState } from "react";

function Product({product, addToCart}){
    //create state to hold the rating
    const [rating,setRating] = useState(product.rating.rate)
    return (
    <div className="wrapper">
        <div>
            <img src={product.image} alt={product.id} className="img-responsive"></img>
            <button className ='star' onClick={(e)=>{setRating(() =>rating+0.1)}}>★</button>
            <button onClick={()=>addToCart(product.id)}>Buy</button> 
            <p>Price: {product.price} <span>Rating:{rating}</span></p> 
        </div>
    </div>

    );
}
export default Product;