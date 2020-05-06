import React, { Component } from 'react';
import Greet from './components/Greet'
import './App.css';
import Display from './components/Display';
import ArrayRendering from './components/ArrayRendering';
class  App extends Component {
  render(){
  return (
    <div className="App">
      
      <Greet name='Visitor' company='ThirdEye'></Greet>
      <Display/>
      <ArrayRendering/>
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