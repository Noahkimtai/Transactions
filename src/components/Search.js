import React from "react";


function Search({handleSearch}){
    return (
        <div>
            <input type='text' placeholder="Search using category" onChange={(e)=>handleSearch(e)}></input>
        </div>
    );
}
export default Search;