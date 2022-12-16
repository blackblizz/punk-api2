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
        return post.abv > 6
      })

      const filteredYear = (checkYear) && posts.filter((post) => {
        const firstBrewedYear = post.first_brewed.str.slice(-4)
          return Number(firstBrewedYear) < 2010
      }) 

      const filteredPH = (checkPH) && posts.filter((post) => {
        return post.ph < 4
      })

      
      
  return (
    <>
    {searchTerm && posts ? filteredPosts.map((post) => {
      return <Card info = {post}/>}) : posts && posts.map((post) => {
        return <Card info = {post}/>})}
     
    {(checkABV) && posts ? filteredABV.map((post) => {
      return <Card info = {post}/>}) : posts && posts.map((post) => {
        return <Card info = {post}/>})}

    {(checkYear) && posts ? filteredYear.map((post) => {
      return <Card info = {post}/>}) : posts && posts.map((post) => {
        return <Card info = {post}/>})}

    {(checkPH) && posts ? filteredPH.map((post) => {
      return <Card info = {post}/>}) : posts && posts.map((post) => {
        return <Card info = {post}/>})}    
  </>
    )
    }

export default Main