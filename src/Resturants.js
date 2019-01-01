import React from "react";

export default class Restaurant extends React.Component {
  calculate(day) {
    const restaurants = {
      "Brilliant Yellow Corral": "Monday",
      "Penny’s": "Tuesday",
      "Right Coast Wings": "Wednesday",
      "The Delusion Last Railway Car": "Thursday",
      "Fun Day Inn": "Friday",
      JHOP: "Saturday",
      Owls: "Sunday"
    };

    // input: { Monday, Tuesday, Wednesday, etc. }
    // output: { Restaurant1, Restaurant2 }

    const trainingData = [];

    for (let restaurantName in restaurants) {
      const dayOfWeek = restaurants[restaurantName];
      trainingData.push({
        input: { [dayOfWeek]: 1 },
        output: { [restaurantName]: 1 }
      });
    }

    const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

    const stats = net.train(trainingData);

    console.log(stats);

    console.log(net.run({ Monday: 1 }));

    function restaurantForDay(dayOfWeek) {
      const result = net.run({ [dayOfWeek]: 1 });
      let rod = Object.keys(result).reduce((a, b) => {
        return result[a] > result[b] ? a : b;
      });

      return rod;
    }
    if (day === undefined) return restaurantForDay("Monday");

    return restaurantForDay(day);
  }
}
