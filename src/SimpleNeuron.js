import React from "react";

export default class NeuralNetwork extends React.Component {
  calculate() {
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
    return v;
  }
}
