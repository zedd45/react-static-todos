import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo.jsx';
import { deleteTodo } from '../actions';


const mapStateToProps = (state) => {

  return { todos: state.todos };
};

const mapDispatchToProps = () => {

  return { }
};

export function TodoList (todos) {

  return (
    <ul className="list-group">
      {todos.map((todo, index) => {

        return (<Todo {...todo} index={index} key={index} />);
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
