import React from "react";
import {Fragment, useEffect, useState} from "react";
import EditTodo from "./EditTodo.js";
// table from https://www.w3schools.com/bootstrap/bootstrap_tables.asp 


const ListTodos = () => {

    const[todos, setTodos] = useState([]); //default value of empty array
    
    // delete todo function
    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });
            //console.log(deleteTodo);
            setTodos(todos.filter(todo => todo.todo_id !== id)); // so you don't have to refresh for todo to disappear
        } catch (err) {
            console.error(err.message);
        }
    }

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json(); // getting json data back

            //console.log(jsonData); // check to see if data is fetched
            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        getTodos();
    }, []);

    console.log(todos);
    return(
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>
                    */}
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td> {todo.description} </td>
                            <td> <EditTodo todo={todo}/> </td>
                            <td> <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
    
            </table>

        </Fragment>
    )
}
export default ListTodos;