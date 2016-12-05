import React, { PropTypes } from 'react';


export default function Todo ({ content, deleteCallback, isDone }) {

  const itemClassModifier = isDone ? 'list-group-item-success' : null;

  return (
    <li className={`list-group-item ${itemClassModifier}`}>
      { isDone && <i className="glyphicon glyphicon-ok"></i> }
      <span className="list-item-text">{content}</span>
      <div className="button-group pull-right">
        <button onClick={deleteCallback} title="delete item" type="button" className="btn btn-xs btn-link">
          <i className="glyphicon glyphicon-remove"></i>
        </button>
      </div>
    </li>
  );
}

Todo.PropTypes = {
  content: PropTypes.node.isRequired,
  deleteCallback: PropTypes.func.isRequired,
  isDone: PropTypes.bool,
};

Todo.defaultProps = {
  isDone: false,
};
