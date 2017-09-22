import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import rootReducer from "./rootReducer";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";

const mySuperDuperStore = createStore(
  rootReducer,
  compose(
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={mySuperDuperStore}>
        <div>
          <h1>Welcome to our app!</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
