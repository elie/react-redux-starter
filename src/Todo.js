import React, { Component } from "react";

const Todo = ({ task, handleRemove }) => (
  <div>
    Your task is {task}
    <button onClick={handleRemove}>Delete me!</button>
  </div>
);

export default Todo;
