import { ADD_TODO, DELETE_TODO, TOGGLE_TODO_DONE } from '../actions';


export const initialState = {
  todos: [{
    content: 'take out the trash',
    isDone: true,
  },
  {
    content: 'play ball with the dog',
    isDone: false, // never.  It's never ending.  Where does he get all the energy (but I love it)
  }],
};

export default function todos (state = initialState, action) {

  switch (action.type) {

    case ADD_TODO:

      return Object.assign({}, state, {
        todos: state.todos.concat([Object.assign({}, { content: action.payload.content, isDone: false })])
      });

    case DELETE_TODO: {

      const todos = [].concat(state.todos);
      todos.splice(action.payload.index, 1);

      return Object.assign({}, state, { todos });
    }

    case TOGGLE_TODO_DONE: {

      const targetIndex = action.payload.index;
      const item = state.todos[targetIndex];
      const revisedItem = Object.assign({}, item, { isDone: !item.isDone });
      const todos = [].concat(state.todos);

      todos[targetIndex] = revisedItem;

      return Object.assign({}, state, { todos });
    }

    default:
      return state;
  }
}
