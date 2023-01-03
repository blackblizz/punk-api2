import React from 'react'
import "./SearchBox.scss"

const SearchBox = (props) => {

  const { handleInput } = props;
  

  return (
    <>
    <div>
    <input className="input0" onChange={handleInput} placeholder={"Search..."}/>
    </div>
    </>
  )
}

export default SearchBox