import React, { Component } from 'react';
import Greet from './components/Greet'
import './App.css';
import EventHandling from './components/EventHandling'
import Test from './components/Test'
import Welcome from './components/Welcome'
import EventBinding from './components/EventBinding'
import Doms from './components/Doms'
import Message from './components/Message'
import Counter from './components/Counter'
import ParentComponent from './components/ParentComponent'
class  App extends Component {
  render(){
  return (
    <div className="App">
      <Welcome/>
      <Message name='Berkshire'></Message>
      <EventHandling/>
      <ParentComponent></ParentComponent>
      <EventBinding></EventBinding>
      
      <Doms/>
      <Counter/>
      <Greet name='Visitor' company='ThirdEye'></Greet>
    </div>
  )
  }
}

export default App;
