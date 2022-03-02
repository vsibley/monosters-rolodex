import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor () {
    super();

    this.state= {
      name: {firstName: 'Vanessa',  lastName: 'Sibley'},
      company: 'Two Barrells',
    };
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello my name is {this.state.name.firstName} {this.state.name.lastName} and I work at {this.state.company}</p>
          <button onClick={() =>{
            this.setState({name: {firstName: 'Ness', lastName: 'Sagiao'} });
            console.log(this.state);
          }}>
            Change Name
            </button>
        </header>
      </div>
    );
  }
}

export default App;
