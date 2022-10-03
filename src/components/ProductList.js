import React, {useState,useEffect} from "react";

function ProductList(){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(res => res.json()).
        then(data =>setProducts(data));})
    
    return(
        <div>
            <p>{products.length}</p>
        </div>
    );
}
export default ProductList;