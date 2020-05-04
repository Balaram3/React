import React,{Component} from 'react'

class EventHandling extends Component{

    handleClick(){
        console.log('Handling Click Event')
    }
    render(){
        return(
            <button onClick={this.handleClick}>Click Me</button>
        )
    }

}

export default EventHandling