import React, { useState, useEffect } from "react";


function Search({searchLogic}){
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
        <div className="section">
            <input type='text' placeholder="Search using product name" onChange={handleSearch}></input>

            <label for="cars">Select by Category:</label>

            <select name="products" id="products">
             <option value="all">All</option>
              <option value="lectronic">Electronic</option>
              <option value="men's clothing">Men</option>
              <option value="Jewelery">Jewelery</option>
              <option value="women's clothing">women's clothing</option>
            </select>
        </div>
    );
}
export default Search;