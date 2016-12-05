import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


const mapDispathToProps = () => {

  return { addTodo };
};

export class AddTodoForm extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  constructor (props) {

    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: '',
    };
  }

  handleChange (event) {

    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit () {

    const { value } = this.state;
    this.props.addTodo({ content: value });
  }

  render () {

    return (
      <form className="form-inline">
        <input placeholder="enter a todo, here" className="form-control" type="text" name="new-item" value={this.state.value} onChange={this.handleChange} />
        <input className="btn btn-primary" value="Add Item" type="submit" onClick={handleSubmit} />
      </form>
    );
  }
}

export default connect(null, mapDispathToProps)(AddTodoForm);
