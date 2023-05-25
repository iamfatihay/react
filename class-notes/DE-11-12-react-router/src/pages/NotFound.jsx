import React from 'react'
import { Container } from 'react-bootstrap'
import resim from '../img/notFound.jpeg'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate=useNavigate()

  return (
    <Container>
      <img src={resim} alt="" width="400px" />
      <button className="btn btn-danger" onClick={()=>navigate("/")} >GO HOME </button>
    </Container>
  )
}

export default NotFound