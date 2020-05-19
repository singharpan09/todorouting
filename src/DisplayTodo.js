import React, { Component } from "react";
import { connect } from "react-redux";

class DisplayTodo extends Component {
  render() {
    console.log(this.props.todos);
    return (
      <React.Fragment>
        <center>
          {this.props.todos.map((todo) => (
            <p>{todo.description}</p>
          ))}
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
export default connect(mapStateToProps)(DisplayTodo);
