import React from 'react'
import ElementMap from './ElementMap'
import './styleSheets/regularStyles.css'
import style from './styleSheets/myapp.module.css'
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
    let nameData=['Nam-1','Nam-2','Nam-3']
    let elems=nameData.map((data,index)=><h2 className='blueBG'key={index}>{data} </h2>)
    return(
        <div>

            {elems}
            <h3 className={style.modularCss}>Module css canot be used in Child Components</h3>
        </div>
    )

}
export default  ArrayRendering