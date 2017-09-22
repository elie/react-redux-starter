export function addTodo(newTask) {
  return {
    type: "ADD_TODO",
    payload: newTask
  };
}

export function editTodo(task) {
  return {
    type: "EDIT_TODO",
    payload: task
  };
}

export function removeTodo(id) {
  return {
    type: "REMOVE_TODO",
    payload: id
  };
}
