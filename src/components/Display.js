import React,{Component} from 'react'
import TrueComponent from './TrueComponent'
import FalseComponent from './FalseComponent'

class Display extends Component{
    constructor(){
        super()
        this.state={
            displayOn:false
        }
        this.swapDisplay=this.swapDisplay.bind(this)
    }
    swapDisplay(prevState){
        console.log('Button Clicked' +this.state.displayOn)
        this.setState(prevState=>({           
                displayOn:!prevState.displayOn
            }
        ))
        console.log('Button Clicked' +this.state.displayOn)
    }
    render(){
        
            if(this.state.displayOn)
            return <TrueComponent handlDisplay={this.swapDisplay}/>
            
            else
            return <FalseComponent handlDisplay={this.swapDisplay}/>
            
        
    }
}

export default Display