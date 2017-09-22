const DEFAULT_STATE = {
  todos: [],
  id: 0
};

export default function rootReducer(state = DEFAULT_STATE, action) {
  if (action.type === "ADD_TODO") {
    let newState = Object.assign({}, state);

    let newTodo = {
      id: ++newState.id,
      task: action.payload
    };

    newState.todos.push(newTodo);

    return newState;
  }
  if (action.type === "REMOVE_TODO") {
    let newTodos = state.todos.filter(function(todo) {
      return todo.id !== +action.payload;
    });
    return { ...state, todos: newTodos };
    // return Object.assign({}, state, {todos: newTodos})
  }
  return state;
}
