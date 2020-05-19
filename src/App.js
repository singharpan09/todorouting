import React from "react";
import Form from "./Form";
import DisplayTodo from "./DisplayTodo";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./Navbar";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={Form} />
        <Route path="/todo" component={DisplayTodo} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
