import React from "react";
import {Fragment} from "react";
import './App.css';

// components
import InputTodo from "./components/InputTodo.js";
import ListTodos from "./components/ListTodos.js";
/*import ListTodos from "./components/ListTodos";
import EditTodo from "./components/EditTodo";*/

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>

      
    </Fragment>
  );
}

export default App;
