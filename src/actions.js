export function addTodo(newTask) {
  return {
    type: "ADD_TODO",
    payload: newTask
  };
}

export function removeTodo(id) {
  return {
    type: "REMOVE_TODO",
    payload: id
  };
}
