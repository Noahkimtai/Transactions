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
        <div>
            <input type='text' placeholder="Search using category" onChange={handleSearch}></input>
        </div>
    );
}
export default Search;