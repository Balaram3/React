import React from 'react'
import ElementMap from './ElementMap'
function ArrayRendering (){
    let arrayData=[
        {
            id:1,
            name:'First Element',
            age:1,
            country:'India'
        },
        {
            id:2,
            name:'Second Element',
            age:2,
            country:'US'
        },
        {
            id:3,
            name:'Third Element',
            age:3,
            country:'SriLanka'
        }
    ]
    let elems=arrayData.map(data=><ElementMap key={data.id} data={data}/>)
    return(
        <div>
            {elems}
        </div>
    )

}
export default  ArrayRendering