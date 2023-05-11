import React from 'react'
import "./Card.scss"


const Card = ({datA}) => {
    console.log(datA);


  return (
    <div className='konteynir'>
        {datA.map(({id,name,comment,job,img})=>{
            return(
                <div className='kart' key={id}>
                    <h1>{name}</h1>
                    <h2>{job}</h2>
                    <p>{comment}</p>
                    <img src={img} alt="" />
                    <div className='btn-div'>
                        <button className='btn-div-small'>Small</button>
                        <button className='btn-div--large'>Large</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Card