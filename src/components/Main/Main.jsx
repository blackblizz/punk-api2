import Card from "../Card/Card";
import beers from "../../data/beers";

const Main = () => {

    const getBeer = () => {
        fetch ("https://punkapi.com/documentation/v2")
        .then((res) => {
          return res.json();
        })
        .then((returnedData) => {
          console.log(returnedData)
        }) 
      }

//     const mappedBeers = beers.map((beer) => {
//         return <Card info = {beer}/>
//       })
  return (
    <>
    <button onClick={getBeer}>1</button>
    </>
//     <div>{mappedBeers}</div>
  )
}

export default Main