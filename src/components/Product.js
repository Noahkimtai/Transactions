import React, { useState } from "react";

function Product({product}){
    //create state to hold the rating
    const [rating,setRating] = useState(product.rating.rate)
    return (
    <div className="wrapper">
        <div className="section">
            <img src={product.image} alt={product.id} className="img-responsive"></img>
            <button onClick={(e)=>{setRating(() =>rating+0.1)}}>like</button>
            <button onClick={e =>{setRating(() =>rating-0.1)}}>dislike</button>
            <button>Buy</button> 
            <p>Price: {product.price} <span>Rating:{rating}</span></p> 
        </div>
    </div>

    );
}
export default Product;