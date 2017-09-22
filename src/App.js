import React, { Component } from "react";
import "./App.css";
import rootReducer from "./rootReducer";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import TodoList from "./TodoList";

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
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
