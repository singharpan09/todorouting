import React, { Component } from "react";
import { connect } from "react-redux";
import { todoCompleted } from "./actions";
import "./DisplayTodo.css";

class DisplayTodo extends Component {
  handlechange = (todo) => {
    this.props.todocomplete(todo);
  };
  render() {
    return (
      <React.Fragment>
        <center>
          {this.props.todos.map((todo) => (
            <p key={todo.id}>
              {todo.description}
              <input
                className="todo"
                type="checkbox"
                checked={todo.completed}
                onChange={() => this.handlechange(todo)}
              />
              {todo.completed === true && (
                <span className="badge badge-secondary">Completed</span>
              )}
            </p>
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

const mapDispatchToProps = (dispatch) => {
  return {
    todocomplete: (todo) => dispatch(todoCompleted(todo)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodo);
