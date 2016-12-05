import { ADD_TODO, DELETE_TODO, TOGGLE_TODO_DONE } from '../actions';


export const initialState = { todos: [] };

export default function todos (state = initialState, action) {

  switch (action) {

    case ADD_TODO:

      return Object.assign({}, state,
        { todos: state.todos.concat([action.todo]) }
      );

    case DELETE_TODO:

      return Object.assign({}, state,
        { todos: state.todos.splice(action.index, 1) }
      );

    case TOGGLE_TODO_DONE: {

      const item = state.todos[action.index];

      return Object.assign({}, state,
        { todos: state.todos.splice(action.index, 1, Object.assign({}, item, { isDone: !item.isDone })) }
      );
    }

    default:
      return state;
  }
}
