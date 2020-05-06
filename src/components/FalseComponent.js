import React  from 'react'
const FalseComponent=(props)=>{
    return(
        <div>
            <div>Display is set to False</div>
        <button type='submit' onClick={()=>props.handlDisplay()}>Swap Display</button>
        </div>
    )
}

export default FalseComponent