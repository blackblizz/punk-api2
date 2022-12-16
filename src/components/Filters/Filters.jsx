import React from 'react'

const Filters = (props) => {

  const {id, title} = props;

  

  return (
    <div>
        <input id={id} type="checkbox"/> <label htmlFor={id}>{title}</label>
    </div>
  )
}

export default Filters