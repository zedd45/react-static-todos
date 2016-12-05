import React, { PropTypes } from 'react';
import Todo from './Todo.jsx';

const deleteCallback = (list, removalIndex) => {

  return list.splice(removalIndex, 1);
}


export default function TodoList ({ todos }) {

  return (
    <ul className="list-group">
      {todos.map((todo, index) => {

        return (<Todo {...todo} deleteCallback={deleteCallback.bind(todos, index)} key={index} />);
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
};
