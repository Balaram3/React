import React from 'react'
import ElementMap from './ElementMap'
function ArrayRendering (){
    let arrayData=[
        {
            name:'First Element',
            age:1,
            country:'India'
        },
        {
            name:'Second Element',
            age:2,
            country:'US'
        },
        {
            name:'Third Element',
            age:3,
            country:'SriLanka'
        }
    ]
    let elems=arrayData.map(data=><ElementMap data={data}/>)
    return(
        <div>
            {elems}
        </div>
    )

}
export default  ArrayRendering