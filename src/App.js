import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput  from './components/userInput/userInput';
import UserOutput  from './components/userOutput/userOutput';

class App extends Component {
  state = {
    usernames:["first", "second"]
  }

  manipulateState = () =>{
    this.setState({
      usernames:[1,3]
    })
  }

  inputChanger = (event) =>{
    console.log('hiiid');
    this.setState({
      usernames:[event.target.value,4]
    })
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.manipulateState}>Hi</button>
        <UserOutput username={this.state.usernames[0]}/>
        <UserOutput username={this.state.usernames[1]}/>
        <UserInput changer={this.inputChanger} name={this.state.usernames[0]}/>
      </div>
    );
  }
}

export default App;
