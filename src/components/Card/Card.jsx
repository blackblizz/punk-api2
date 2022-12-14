import React from 'react'

const Card = (props) => {

    const { image_url, name, first_brewed, abv, ph } = props.info
    
  return (
    <>
    <div className="beerCard">
        <img src={image_url} alt="beer pic" height="200"></img>
        <p>Name: {name}</p>
        <p>First Brewed: {first_brewed}</p>
        <p>ABV: {abv}</p>
        <p>Acidity: {ph}</p>
        
    </div>
    </>
  )
}

export default Card