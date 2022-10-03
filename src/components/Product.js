import React from "react";

function Product({product}){
    return (
        <div>
            {product.map(prod => {return(<img key={prod.id} src={prod.image}></img>)})}
        </div>
    );
}
export default Product;