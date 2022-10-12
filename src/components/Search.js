import React, { useState, useEffect } from "react";


function Search({searchLogic,handleFilter}){
    // create a state for holding search data
    const [searchDescription,setSearchDescription] = useState('')

    // When search data changes trigger sideeffect
    useEffect(()=>{
      searchLogic(searchDescription)
    },[searchDescription])
  
    function handleSearch(e){
      e.preventDefault()
      setSearchDescription(e.target.value)
    }


    return (
        <div className="search">
            <input  type='text' placeholder="Search using product name" onChange={handleSearch}></input>
              
            <label for="cars">Filter by Category:</label>
            <select onChange={handleFilter}name="products" id="products" className="input">
             <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="men's clothing">Mens clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="women's clothing">Women's clothing</option>
            </select>
        </div>
    );
}
export default Search;