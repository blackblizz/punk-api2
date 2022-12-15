import Card from "../Card/Card";
import { useState, useEffect } from "react";

const Main = (props) => {

  const {searchTerm} = props;

    const [ posts, setPosts ] = useState("")

    const [ load, setLoad] = useState(true);

    const getBeer = () => {
        fetch ("https://api.punkapi.com/v2/beers")
        .then((res) => {
          return res.json();
        })
        .then((returnedData) => {
          setPosts(returnedData)
        }) 
      }

      useEffect(getBeer, [])

      const filteredPosts = searchTerm && posts.filter((post) => {
          
          const beerNameLower = post.name.toLowerCase();
         
          return beerNameLower.includes(searchTerm);
        })

  return (
    <>
    {searchTerm && posts ? filteredPosts.map((post) => {
      return <Card info = {post}/>}) : posts && posts.map((post) => {
        return <Card info = {post}/>})}
     
  </>
    )
    }

export default Main