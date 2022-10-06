import React from "react";

function AddCart({cart, handleAddCart,count}){
    return(
        <>
        <h2>My Cart <span>{count} Items</span></h2>
        <div className="wrapper">
            {cart.map(prod => {return(
            <div>
                <img key={prod.id} src={prod.image} alt={prod.id} className="img-responsive"></img> 
                <h5>Price: {prod.price} <span>Rating:{prod.rating.rate}</span></h5>
                <button onClick={(e)=>alert(`${prod.description}`)}>description</button>
                <p>{prod.title}</p>
            </div>
        )})}
        </div>
        </>
    );
}
export default AddCart;