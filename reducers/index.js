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

    case DELETE_TODO:

      return Object.assign({}, state,
        { todos: state.todos.splice(action.payload.index, 1) }
      );

    case TOGGLE_TODO_DONE: {

      const item = state.todos[action.payload.index];

      return Object.assign({}, state,
        { todos: state.todos.splice(action.index, 1, Object.assign({}, item, { isDone: !item.isDone })) }
      );
    }

    default:
      return state;
  }
}
