import React, { PropTypes } from 'react';


export default function Todo ({ content, deleteCallback, isDone, markDone }) {

  const itemClassModifier = isDone ? 'list-group-item-success' : '';

  return (
    <li className={`list-group-item ${itemClassModifier}`}>
      { isDone && <i className="glyphicon glyphicon-ok"></i> }{' '} { /* almost reminicent of the days of &nbsp; - we need a physical space inserted to make space between these elements */ }
      <span className="list-item-text">{content}</span>
      <div className="button-group pull-right">
        {!isDone &&
          <button type="button" onClick={markDone} className="btn btn-success btn-xs">
            <i className="glyphicon glyphicon-ok"></i> Done
          </button>
        }
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
  markDone: PropTypes.func.isRequired,
};

Todo.defaultProps = {
  isDone: false,
};
