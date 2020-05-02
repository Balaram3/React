import React, { Component } from "react"


class Counter extends Component{
    constructor(){
        super()
        this.state={
            counter:0
        }
    }
    incrementCounter(){
        this.setState((prevState)=>({
            counter:prevState.counter+1
        })
            
        ,()=>{
            console.log('Call Back Value:: '+this.state.counter)
        })
        console.log(this.state.counter)
    }
    incrementFive(){
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
    }
    render(){
    return(
            <div>
                <h2>count:{this.state.counter}</h2>
                <button onClick={()=>this.incrementFive()}>Click to increase</button>
            </div>
    )
}
}

export default Counter