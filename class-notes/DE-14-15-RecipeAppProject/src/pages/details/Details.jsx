import React from 'react'
import { useLocation } from 'react-router-dom'

const Details = () => {

  const location=useLocation()
//navigate ten state ile gönderilen verinin burada yakalanması için kullanılan bir hook
  console.log(location.state.i.recipe);
  return (
    <div>{location.state.i.recipe.label}</div>
  )
}

export default Details;