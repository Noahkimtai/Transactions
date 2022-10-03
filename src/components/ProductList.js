import React, {useState,useEffect} from "react";
import Product from "./Product";

function ProductList(){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(res => res.json()).
        then(data =>setProducts(data));
    },[])

    /* const product = products.map((product) =>{
        <Product product={product}/>
    }) */
    return(
        <div>
            <Product product={products}/>
        </div>
    );
}
export default ProductList;