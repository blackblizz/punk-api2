import React from 'react'
import './Card.scss';

const Card = (props) => {

    const { image_url, name, first_brewed, abv, ph } = props.info
    
  return (
   <section className="beerCards"> 
    <div className="beerCard">
      <div className="beerPic">
        <img src={image_url} alt="beer pic" height="200"></img>
        </div>
      <div className="container">
        <p>Name: {name}</p>
        <p>First Brewed: {first_brewed}</p>
        <p>ABV: {abv}</p>
        <p>Acidity: {ph}</p>
      </div>  
    </div>
    </section>
  )
}

export default Card