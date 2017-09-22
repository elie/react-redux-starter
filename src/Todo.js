import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>Your task is {this.props.task}</p>;
  }
}
