import React from "react";

function Product({product}){
    return (
        <div>
            {product.map(prod => {return(
            <>
                <img key={prod.id} src={prod.image} className="img-responsive"></img>
                <button>Add to Cart</button> 
                {/* <span>{prod.rating.reduce((x,y)=>x+y)}</span> */}
            </>
           
            )})}
        </div>
    );
}
export default Product;