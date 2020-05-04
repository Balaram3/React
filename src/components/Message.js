import React,{Component} from 'react'



class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome Visitor'
        }
    }
        changeMessage(name){
            this.setState({
                message:'Thank you   For subscribing'
            } )
        }
        
    render(){
        const name=this.props.name
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage(name)}>Subscribe</button>
            </div>
        )
    }
}


export default Message