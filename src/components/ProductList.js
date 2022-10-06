import React, {useState,useEffect} from "react";
import AddCart from "./AddCart";
import Product from "./Product";
import Search from "./Search";
import About from './About'

function ProductList(){
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(res => res.json())
        .then(data =>setProducts(data));
    },[])

  // function to filter the data based on the search
  function searchLogic(searchDescription){
    const filteredData = products.filter(el =>el.title.includes(searchDescription))
    setProducts(filteredData)
  };

  function handleFilter(e){
    const filteredData = products.filter(el =>el.category ===e.target.value)
    setProducts(filteredData)    
  }
  function addToCart(id){
    const filteredData = products.filter(el =>el.id ===id)
    setCart((cart) => cart.concat(filteredData))
  }

    return(
        <div className="section"> 
            <Search searchLogic={searchLogic} handleFilter ={handleFilter} />
            <div className ='wrapper'> 
                {products.map(product => <Product key={product.id}  product={product} addToCart ={addToCart}/>)}
            </div>
            <AddCart cart = {cart} />
            <About />
        </div>
    );
}
export default ProductList;