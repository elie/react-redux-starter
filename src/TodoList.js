import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleAdd() {}

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    let todos = this.props.todos.map(function(val) {
      return <Todo task={val.task} name="task" key={val.id} />;
    });

    return (
      <div>
        <form onSubmit={this.handleAdd}>
          <input
            type="text"
            value={this.state.task}
            onChange={this.handleChange}
          />
        </form>
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
