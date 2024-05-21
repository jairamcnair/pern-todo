import React from "react";
import {Fragment} from "react";
import { useState } from "react";

function InputTodo(){

    const[description, setDescription] = useState(""); // description=state, initial state/value = "" setDescription = how we set/change the state/value

    const onSubmitForm = async e => { // the (e) represents the description value we will pass to the query
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            //console.log({description});
            //console.log(response);
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }
    return(
        <Fragment> 
            <h1 className = "text-center mt-5"> PERN Todo List </h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input 
                    type="text" 
                    className="form-control" 
                    value={description}
                    onChange = {e => {setDescription(e.target.value)}}
                />
                <button className="btn btn-success"> Add </button>
            </form>
        </Fragment>
    );
}

export default InputTodo;