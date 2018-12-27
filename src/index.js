import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import createHistory from "history/createBrowserHistory";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import "./styles.css";
const initialState = {};
const history = createHistory();
import configureStore from "./configureStore";
const store = configureStore(initialState, history);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
