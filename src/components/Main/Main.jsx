import Card from "../Card/Card";
import { useState, useEffect } from "react";

const Main = () => {

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

  return (
    <>
    {/* <button onClick={getBeer}>1</button> */}
    {posts && posts.map((post) => {
        return <Card info = {post}/>
      })}
    </>
//     <div>{mappedBeers}</div>
  )
}

export default Main