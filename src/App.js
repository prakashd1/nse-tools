import React from "react";
import { Helmet } from "react-helmet";
import { Switch, Route, Redirect } from "react-router-dom";
import Resturant from "./Resturants";
class App extends React.Component {
  render() {
    var sn = new Resturant();
    var x = sn.calculate();

    return (
      <div className="App">
        <h1>{x}</h1>
      </div>
    );
  }
}
export default App;
