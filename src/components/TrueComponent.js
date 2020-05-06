import React  from 'react'

const TrueComponent=(props)=>{
    return(
        <div>
            <div>Display is set to True</div>
        <button type='submit' onClick={()=>props.handlDisplay}>Swap Display2</button>
        </div>
    )
}

export default TrueComponent