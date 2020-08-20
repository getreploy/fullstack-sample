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
    console.log(process.env.REACT_APP_REPLOY_BACKEND);
    const url = process.env.REACT_APP_REPLOY === "true" ? process.env.REACT_APP_REPLOY_BACKEND : "http://localhost:5000";
    fetch(url)
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
              Hello there: <br />
              <code>{this.state.data}</code>
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hello world.
            </a>
          </header>
        </div>
      )
    );
  }
}

export default App;
