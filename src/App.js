import React, { Component } from "react";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
    };
  }

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
          <input
            onChange={this.handleUpdatedInput}
            type="text"
            value={this.state.todo}
          />
          <br /> <button>Submit</button>
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
export default connect(mapStateToProps)(App);
