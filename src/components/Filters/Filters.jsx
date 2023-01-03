import React from 'react'
import "./Filters.scss"

const Filters = (props) => {

  const {id, title, onChange, check} = props;

  

  return (
    <div className="filters">
        <input className="checkBox" id={id} type="checkbox" onChange={()=>onChange(!check)}/> <label htmlFor={id}>{title}</label>
    </div>
  )
}

export default Filters