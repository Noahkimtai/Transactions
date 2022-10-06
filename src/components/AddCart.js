import React from "react";

function AddCart({cart, handleAddCart}){
    return(
        <div className="wrapper">
            <h2>My Cart</h2>
            {cart.map(prod => {return(
            <div>
                <img key={prod.id} src={prod.image} alt={prod.id} className="img-responsive"></img> 
                <h5>Price: {prod.price} <span>Rating:{prod.rating.rate}</span></h5>
                <p>{prod.title} {prod.description}</p>
            </div>
        )})}
        </div>
    );
}
export default AddCart;