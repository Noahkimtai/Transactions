import React, {useState,useEffect} from "react";
import AddCart from "./AddCart";
import Product from "./Product";
import Search from "./Search";

function ProductList(){
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(res => res.json())
        .then(data =>setProducts(data));
    },[])

  // function to filter the data based on the search
  function searchLogic(searchDescription){
    const filteredData = products.filter(el =>el.description.includes(searchDescription))
    setProducts(filteredData)
  };
  

    return(
        <div>
            <Search searchLogic={searchLogic} />
            <Product product={products}/>
            <AddCart cart = {cart} />
        </div>
    );
}
export default ProductList;