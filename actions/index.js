import uuid from 'node-uuid';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO_DONE = 'TOGGLE_TODO_DONE';

export const addTodo = ({ payload }) => {

  return { type: ADD_TODO, payload: Object.assign({}, payload, { id: uuid.v4() }) };
}

export const deleteTodo = ({ index }) => {

  return { type: DELETE_TODO, payload: { index } };
}

export const toggleTodoDone = ({ index }) => {

  return { type: TOGGLE_TODO_DONE, payload: { index } };
}
