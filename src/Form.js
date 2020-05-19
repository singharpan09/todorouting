import React, { Component } from "react";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { todoAdded } from "./actions";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { todo } = this.state;
    this.props.addtodo(todo);
    this.setState({ todo: "" });
  };

  handleUpdatedInput = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };
  render() {
    const NumberOftodos =
      this.props.todos.length === 0
        ? `You have no todos for the day`
        : `You have #${this.props.todos.length} todos for the day`;
    return (
      <React.Fragment>
        <center>
          <h3>#TODO_FOR_DAY</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleUpdatedInput}
              type="text"
              value={this.state.todo}
              required
            />
            <br /> <button type="submit">Submit</button>
          </form>
          <br />
          <p>{NumberOftodos}</p>
        </center>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addtodo: (item) => dispatch(todoAdded(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
