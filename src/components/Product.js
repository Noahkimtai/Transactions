import React, { useEffect, useState } from "react";

function Product({product, addToCart}){
    //create state to hold the rating
    const [rating,setRating] = useState(product.rating.rate)
    const [rateCount, setRateCount] =useState(product.rating.count)
    
    // When the rating changes make a post request to the server to change the rating
/*     useEffect(() =>{
        product.rating.rate = rating
        product.rating.count = rateCount
        fetch(`https://fakestoreapi.com/products/${product.id}`,{
            method:'PATCH',
            headers:{'content-Type':'application/json'},
            body:JSON.stringify(product)
        }).then(res=>res.json())
        .then(json=>alert(json.id))
    },[rating]) */
    return (
    <div>
        <div>
            <img src={product.image} alt={product.id} className="img-responsive"></img>
            <button className ='star' onClick={(e)=>{setRating((rating) =>rating+0.1);
            setRateCount((rateCount) =>rateCount+1)}}>★</button>
            <button onClick={()=>addToCart(product.id)}>Buy</button> 
            <p>Ksh: {product.price} Rating:{rating}</p> 
        </div>
    </div>

    );
}
export default Product;