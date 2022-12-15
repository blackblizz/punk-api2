import SearchBox from "../SearchBox/SearchBox";
import Card from "../Card/Card";
import Main from "../Main/Main";
import { useState } from "react";

const Navbar = (props) => {

  const {setSearchTerm} = props;
  

  const handleInput = (event) => {
    //capture the user input
    const cleanInput = event.target.value.toLowerCase();
    //if this was a div click, it would be event.target.innerHTML
    //store it in state variable (searchTerm)
    setSearchTerm(cleanInput);
  }

  // //all the cards that contain the searchTerm
  // const filteredPosts = posts.filter((post) => {
  //   //set album title to lowercase
  //   const beerNameLower = post.name.toLowerCase();
  //   //return the albums that contain the searchTerm
  //   return beerNameLower.includes(searchTerm) && post.info;
  // })

  return (
    <>
      <SearchBox handleInput={handleInput} />
      
    </>
  )
}

export default Navbar