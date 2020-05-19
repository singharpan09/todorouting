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
    console.log(this.props.todos);
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
        </center>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addtodo: (item) => dispatch(todoAdded(item)),
  };
};
export default connect(null, mapDispatchToProps)(Form);
