import React from "react";
import { Helmet } from "react-helmet";
import { Switch, Route, Redirect } from "react-router-dom";

export default function App() {
  console.log("something is happening");
  const net = new brain.NeuralNetwork({
    hiddenLayers: [3]
  });
  const trainingData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
  ];

  net.train(trainingData);
  var v = net.run([0, 0]);
  console.log(v);
  return (
    <div className="App">
      <h1>{v}</h1>
    </div>
  );
}
