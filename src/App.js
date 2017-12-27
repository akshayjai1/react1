import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/userInput/UserInput.css';
import './components/userOutput/UserOutput.css';
import UserInput  from './components/userInput/userInput';
import UserOutput  from './components/userOutput/userOutput';

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
    console.log('hiiid');
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
        <UserOutput username={this.state.usernames[0]}/>
        <UserOutput username={this.state.usernames[1]}/>
        <UserInput changer={this.inputChanger} name={this.state.usernames[0]}/>
        {this.state.logos}{this.state.logos.length}
        <div className={ (this.state.logos && (this.state.logos.length === 3)) ? 'width_15_percent' : (this.state.logos && (this.state.logos.length === 2)) ? 'width_20_percent' : 'width_50_percent' } >
        some data
</div>
      </div>
    );
  }
}

export default App;
// const styles = StyleSheet.create({
//   component: {
//     backgroundColor: '#f88',
//     marginVertical: 10
//   }
// });