import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo.jsx';
import { deleteTodo, toggleTodoDone } from '../actions';


const mapStateToProps = (state) => {

  return { todos: state.todos };
};

function dispatchDelete(dispatch, index) {

  return dispatch(deleteTodo(index));
}

function dispatchToggle(dispatch, index) {

  return dispatch(toggleTodoDone(index));
}


export function TodoList ({ dispatch, todos }) {

  return (
    <ul className="list-group">
      {todos.map((todo, index) => {

        return (
          <Todo
            {...todo}
            deleteCallback={dispatchDelete.bind(null, dispatch, index)}
            markDone={dispatchToggle.bind(null, dispatch, index)}
            index={index}
            key={index}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object),
};

TodoList.defaultProps = {
  todos: [],
};

export default connect(mapStateToProps)(TodoList);
