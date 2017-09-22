import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let todos = this.props.todos.map(function(val) {
      return <Todo task={val.task} key={val.id} />;
    });

    return (
      <div>
        <h1>See the todos!</h1>
        {todos}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(TodoList);
