import SearchBox from "../SearchBox/SearchBox";
import Filters from "../Filters/Filters";
import { useState } from "react";
import "./Navbar.scss"

const Navbar = (props) => {

  const {setSearchTerm, setCheckABV, setCheckYear, setCheckPH, checkABV, checkYear, checkPH} = props;
  
 

  const handleInput = (event) => {
    //capture the user input
    const cleanInput = event.target.value.toLowerCase();
    //if this was a div click, it would be event.target.innerHTML
    //store it in state variable (searchTerm)
    setSearchTerm(cleanInput);
  }

  // //all the cards that contain the searchTerm
  // const filteredPosts = posts.filter((post) => {
  //   //set beer name to lowercase
  //   const beerNameLower = post.name.toLowerCase();
  //   //return the beers that contain the searchTerm
  //   return beerNameLower.includes(searchTerm) && post.info;
  // })

  return (
    <>
    <div className="pic"></div>
    <div className="navbar">
      <SearchBox handleInput={handleInput} />
      <Filters
          id="1"
          title="High ABV (>6.0%)"
          onChange={setCheckABV}
          check={checkABV}                  
        />
        <Filters
          id="2"
          title="Classic Range"
          onChange={setCheckYear}
          check={checkYear}             
        />
        <Filters
          id="3"
          title="Acidic (ph < 4)"
          onChange={setCheckPH}
          check={checkPH}             
        />
    </div>
    </>
  )
}

export default Navbar