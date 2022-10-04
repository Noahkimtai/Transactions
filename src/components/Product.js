import React from "react";

function Product({product}){
    return (
        <div className="wrapper">
            {product.map(prod => {return(
            <div>
                <img key={prod.id} src={prod.image} alt={prod.id} className="img-responsive"></img>
                <button>Add to Cart</button> 
                <h3>Price: {prod.price} <span>Rating:{prod.rating.rate}</span></h3> 
            </div>
           
            )})}
        </div>
    );
}
export default Product;