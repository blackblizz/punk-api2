import React from 'react'

const SearchBox = (props) => {

  const { handleInput } = props;
  

  return (
    <>
    
    <input onChange={handleInput} placeholder={"Search..."}/>
    </>
  )
}

export default SearchBox