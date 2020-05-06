import React, { Component } from 'react';
import Greet from './components/Greet'
import './App.css';
import Display from './components/Display';
class  App extends Component {
  render(){
  return (
    <div className="App">
      
      <Greet name='Visitor' company='ThirdEye'></Greet>
      <Display/>
    </div>
  )
  }
}

export default App;
/*
<Welcome/>
      <Message name='Berkshire'></Message>
      <EventHandling/>
      <ParentComponent></ParentComponent>
      <EventBinding></EventBinding>
      
      <Doms/>
      <Counter/>*/