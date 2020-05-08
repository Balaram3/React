import React, { Component } from 'react';
import './App.css';
import LifecycleA from './components/LifecycleA';
class  App extends Component {
  render(){
  return (
    <div className="App">
      
      <LifecycleA/>

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