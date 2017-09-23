import React, { Component } from "react";

const Todo = ({ task, handleRemove }) => (
  <div>
    Your task is {task}
    <button onClick={handleRemove}>Delete me!</button>
  </div>
);

export default Todo;

function sameOddDigital(num1, num2) {
  var result = 0;
  var obj = {};
  var str1 = "" + num1;
  var str2 = "" + num2;
  for (var i = 0, len = Math.max(str1.length, str2.length); i < len; i++) {
    if (str1[i] % 2 === 1) {
      result++;
      obj[str1[i]] = (obj[str1[i]] || 0) + 1;
    }
    if (str2[i] % 2 === 1) {
      result--;
      obj[str2[i]] = (obj[str2[i]] || 0) - 1;
    }
  }
  for (var key in obj) {
    if (obj[key] !== 0) {
      return false;
    }
  }
  return !result;
}
