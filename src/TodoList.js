import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import * as actions from "./actions";
// import { addTodo } from "./actions";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();

    // this.props.dispatch(addTodo(this.state.task));
    this.props.addTodo(this.state.task);

    this.setState({
      task: ""
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  deleteTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    let todos = this.props.todos.map(val => {
      return (
        <Todo
          task={val.task}
          key={val.id}
          handleRemove={this.deleteTodo.bind(this, val.id)}
        />
      );
    });

    return (
      <div>
        <form onSubmit={this.handleAdd}>
          <input
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Add a todo!</button>
        </form>
        <h1>See the todos!</h1>
        {todos}
      </div>
    );
  }
}

function mapStateToProps(state) {
  debugger;
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps, actions)(TodoList);
