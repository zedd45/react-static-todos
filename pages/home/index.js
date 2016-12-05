/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TodoList from '../../components/TodoList.jsx';
import AddTodoForm from '../../components/AddTodoForm.jsx';


const mapStateToProps = (state) => {

  return { todoList: state.todos };
};

export class HomePage extends Component {

  static propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.object),
  };

  componentDidMount() {

    document.title = 'React Static Todo App';
  }

  render () {

    return (
      <div className="container-fluid" style={{ marginTop: '2px' }}>
        <div className="todo-list-panel col-md-8 col-md-offset-2">
          <fieldset>
            <legend>My TODO List</legend>
            <TodoList todos={this.props.todoList} />
            <AddTodoForm />
          </fieldset>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps)(HomePage);
