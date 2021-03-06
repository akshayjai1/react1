import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/userInput/UserInput.css';
import './components/userOutput/UserOutput.css';
import UserInput  from './components/userInput/userInput';
import UserOutput  from './components/userOutput/userOutput';
import ValidationComponent from './components/validationComponent/ValidationComponent';
import CharOne from './components/char/CharOne';
// import CharComponent from './components/char/charComponent';

class App extends Component {
  state = {
    usernames:["first", "second"],
    logos:[1,3,3]
  }

  
  manipulateState = () =>{
    this.setState({
      usernames:[1,3]
    })
  }
  
  inputChanger = (event) =>{
    this.setState({
      usernames:[event.target.value,4]
    })
  }
  render() {
    const style = {
      backgroundColor: "#3ee"
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button style={style} onClick={this.manipulateState}>Hi</button>
        {
          this.state.usernames.map(e=>{
            return <UserOutput username={e}/>
          })
        }
        {/* <UserOutput username={this.state.usernames[0]}/>
        <UserOutput username={this.state.usernames[1]}/> */}
        <UserInput changer={this.inputChanger} name={this.state.usernames[0]}/>
        <ValidationComponent sLen={this.state.usernames[0].length}/>
        {
          this.state.usernames[0].split("").map(e=>{
            return <CharOne letter={e}/>
          })
        }
        {/* <CharComponent letters={this.state.usernames[0]} /> */}
      </div>
    );
  }
}

export default App;
