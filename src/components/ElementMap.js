import React from 'react'
function ElementMap({data}){
    return(
    <div>
        <h2>Name:   {data.name}</h2>
        <h2>Age:    {data.age}</h2>
        <h2>Country:{data.country}</h2>

    </div>
    )
}

export default ElementMap