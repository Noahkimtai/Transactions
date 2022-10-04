import React, {useState,useEffect} from "react";
import AddCart from "./AddCart";
import Product from "./Product";
import Search from "./Search";

function ProductList(){
    const [products, setProducts] = useState([]);
    const [search, setSearch] =useState('')
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(res => res.json())
        .then(data =>setProducts(data));
    },[])
   function handleSearch(e){
        e.preventDefault()
        setSearch(e.target.value)
        alert(e.target.value)
        const filteredProducts = products.filter(product =>product.category.includes(e.target.value));
        setProducts(filteredProducts)
    }

    return(
        <div>
            <Search handleSearch = {handleSearch}/>
            <Product product={products}/>
             <AddCart cart = {cart} />
        </div>
    );
}
export default ProductList;