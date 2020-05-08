import React,{Component} from 'react'

class FormData extends Component{
    constructor(){
        super()
        this.state={
            userName:'',
            password:''
        }
    }
    handleEmail=(event)=>{
        this.setState(
            {
                userName:event.target.userName
            },console.log(this.state.userName)
        )

    }
    render(){
        return(
            <div>
            <form>
                
                   
                        <label>User Name</label>
                        <input value ={this.state.userName} onChange={this.handleEmail} type='email'/>
                        <label>Password</label>
                        <input type='password'/>
            </form>
            </div>
        )
    }
}


export default FormData