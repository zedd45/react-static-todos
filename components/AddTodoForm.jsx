import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


const mapDispatchToProps = () => {

  return { addTodo };
};

export class AddTodoForm extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor (props) {

    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: '',
    };
  }

  handleChange (event) {

    event.preventDefault();

    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit () {

    const { value } = this.state;
    this.props.dispatch(addTodo({ content: value }));
    this.setState({ value: '' });
  }

  render () {

    return (
      <form className="form-inline">
        <input placeholder="enter a todo, here" className="form-control" type="text" name="new-item" onChange={this.handleChange} />
        <input className="btn btn-primary" value="Add Item" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default connect()(AddTodoForm);
