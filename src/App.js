import React from "react";
import { Helmet } from "react-helmet";
import { Switch, Route, Redirect } from "react-router-dom";
import SimpleNeuron from "./SimpleNeuron";
class App extends React.Component {
  render() {
    var sn = new SimpleNeuron();
    var x = sn.calculate();

    return (
      <div className="App">
        <h1>{x}</h1>
      </div>
    );
  }
}
export default App;
