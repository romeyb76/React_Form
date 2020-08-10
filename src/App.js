import React, { Component } from "react";
import "./styles.css";
import FormContainer from "./containers/FormContainer";

class App extends Component {
  render() {
    return (
      <div className="Container">
        <h3>React Form</h3>
        <FormContainer />
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
