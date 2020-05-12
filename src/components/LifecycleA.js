import React,{Component} from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component{
    constructor(){
        super()
        this.state={
            message:'State Variable'
        }
       
        console.log('Lifecycle A -Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle A -getStateFromProps')
        return null

    }
    componentDidMount(){
        console.log('Lifecycle A -ComponentDidMount')
    }
    shouldComponentUpdate(){

        console.log('Lifecycle A -shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('Lifecycle A -getSnapshotBeforeUpdate')
        return null

    }
    componentDidUpdate(){
        console.log('Lifecycle A -componentDidUpdate')
    }
    changeState=()=>{
        this.setState({
            message:'state Changed'
        },console.log('state changed')

        )
    }
    render(){
        console.log('Lifecycle A -Render')
        return(
            <div>
            <LifecycleB/>
            <button onClick={this.changeState}>Change State</button>
            </div>
            
        )
    }
}
export default LifecycleA