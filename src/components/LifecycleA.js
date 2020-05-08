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
    render(){
        console.log('Lifecycle A -Render')
        return(
            <LifecycleB/>
            
        )
    }
}
export default LifecycleA