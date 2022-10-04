import React from "react";

function AddCart({cart, handleAddCart}){
    return(
        <div className="section">
            <h2>Cart</h2>
            {cart.map(prod => {return(
            <>
                <img key={prod.id} src={prod.image} alt={prod.id} className="img-responsive"></img> 
                <h3>Price: {prod.price} <span>Rating:{prod.rating.rate}</span></h3> 
            </>
        )})}
        </div>
    );
}
export default AddCart;