import React,{Component} from 'react'

class LifecycleB extends Component{
    constructor(){
        super()
        this.state={
            message:'State Variable'
        }
       
        console.log('Lifecycle B -Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle B -getStateFromProps')
        return null

    }
    componentDidMount(){
        console.log('Lifecycle B -ComponentDidMount')
    }
    shouldComponentUpdate(){

        console.log('Lifecycle B -shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('Lifecycle B -getSnapshotBeforeUpdate')
        return null

    }
    componentDidUpdate(){
        console.log('Lifecycle B -componentDidUpdate')
    }
    render(){
        console.log('Lifecycle B -Render')
        return(
            <div>Hey Hi</div>
            
        )
    }
}
export default LifecycleB