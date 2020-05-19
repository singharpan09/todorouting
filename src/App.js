import React from "react";
import { connect } from "react-redux";
import "./App.css";

function App() {
  return <div className="App">This is main component</div>;
}

const mapStateToProps = (state) => {
  todos: state.todo;
};
export default connect(mapStateToProps)(App);
