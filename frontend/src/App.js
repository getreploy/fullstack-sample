import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000")
      .then(response => {
        return response.text();
      })
      .then(data => {
        this.setState({ data });
      });
  }
  render() {
    return (
      this.state && (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Result: <br />
              <code>{this.state.data}</code>
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yo world.
            </a>
          </header>
        </div>
      )
    );
  }
}

export default App;
