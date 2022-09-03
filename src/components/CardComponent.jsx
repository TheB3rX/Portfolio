import React from 'react'
import { useState } from 'react'

export const CardComponent = (projectName,projectInfo) => {
  const [cardAttributes,setCardAttributes]=useState({title:'',description:'',image:''})
  return (
    <div>
      <div className='card'>      
          <div className='card-title'>
            Swing UI Development like shit
          </div>
          <div className='card-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
      </div>
    </div>
  )

  function changeCardInfo(title,desc,imageRoute){
    setCardAttributes(cardAttributes,[])
  }
}