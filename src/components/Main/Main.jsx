import Card from "../Card/Card";
import { useState, useEffect } from "react";

const Main = (props) => {

  const {searchTerm, checkABV, checkYear, checkPH} = props;

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

      const filteredABV = (checkABV) && posts.filter((post) => {
        console.log(post)
        return post.abv > 6
      })

      const filteredYear = (checkYear) && posts.filter((post) => {
        const firstBrewedYear = post.first_brewed.slice(-4)
          return Number(firstBrewedYear) < 2010
      }) 

      const filteredPH = (checkPH) && posts.filter((post) => {
        return post.ph < 4
      })
      
      
      const [displayBeers, setDisplayBeers] = useState("");
      const displayRules = () => {
        if (posts) {
          
        
        if (searchTerm) {
          setDisplayBeers(filteredPosts.map((post) => {
            return <Card info = {post}/>}))
        } else if (checkABV) {       
          setDisplayBeers(filteredABV.map((post) => {
            return <Card info = {post}/>}))
        } else if (checkYear) {
          setDisplayBeers(filteredYear.map((post) => {
            return <Card info = {post}/>}))
        } else if (checkPH) {
          setDisplayBeers(filteredPH.map((post) => {
            return <Card info = {post}/>}))
        }  else{
          setDisplayBeers(posts.map((post) => {
            return <Card info = {post}/>}));
        }
    }   
  }
    useEffect(() => {displayRules()},[searchTerm, checkABV, checkYear, checkPH, posts])
  return (
    <>
    {displayBeers}
    </>
    )
    }

export default Main