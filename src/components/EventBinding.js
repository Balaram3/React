/*
Four Ways to bind data
*/
import React ,{Component } from 'react'


class EventBinding extends Component{
    constructor(){
        super()
        this.state={
            message:'Intial Message'
        }

        this.method2=this.method2.bind(this)
    }
    method1(){
        this.setState(
            {
                message:'METHOD1'
            }
        )
    }
    method2(){
        this.setState(
            {
                message:'Method2'
            }
        )
    }
    method3(){
        this.setState(
            {
                message:'method3'
            }
        )
    }
    method4=()=>{
        this.setState({
            message:'method4'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.method1.bind(this)}>Method1 for binding</button>
                <button onClick={this.method2}>Method2 for binding</button>
                <button onClick={()=>this.method3()}>Method3 for binding</button>
                <button onClick={this.method4}>Method4 for binding</button>
            </div>
        )
    }
}
export default EventBinding