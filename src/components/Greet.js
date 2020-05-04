import React from 'react'

const Greet = (props) =>{
    const {name,company}=props
   return(
       <h1>Hello,  {name}. Are you working at {company} </h1>
    )
}

export  default Greet