import React, { Component } from 'react';
import Greet from './components/Greet'
import './App.css';
import Test from './components/Test'
import Welcome from './components/Welcome'
import Doms from './components/Doms'
import Message from './components/Message'
import Counter from './components/Counter'
class  App extends Component {
  render(){
  return (
    <div className="App">
      <Welcome/>
      <Message></Message>
      <Doms/>
      <Counter/>
      <Greet name='Future'></Greet>
    </div>
  )
  }
}

export default App;
