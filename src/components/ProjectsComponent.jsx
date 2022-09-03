import React from 'react'
import { useState } from 'react'
import { CardComponent } from './CardComponent'

export const ProjectsComponent = () => {
  const [title,setTitle] = useState('')
  return (
    <div>
      <div className='projects-title'>
        <h1>My projects</h1>
      </div>
    <div className='card-group'>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
    </div>
    </div>
  )
}
