import React from 'react'

const Filters = (props) => {

  const {id, title, onChange, check} = props;

  

  return (
    <div>
        <input id={id} type="checkbox" onChange={()=>onChange(!check)}/> <label htmlFor={id}>{title}</label>
    </div>
  )
}

export default Filters