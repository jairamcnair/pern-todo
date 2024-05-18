import React from "react";
import {Fragment} from "react";
import { useState } from "react";

function InputTodo(){

    const[description, setDescription] = useState(""); // description=state, initial state/value = "" setDescription = how we set/change the state/value

    return(
        <Fragment> 
            <h1 className = "text-center mt-5"> PERN Todo List </h1>
            <form className="d-flex mt-5">
                <input 
                    type="text" 
                    className="form-control" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button className="btn btn-success"> Add </button>
            </form>
        </Fragment>
    );
}

export default InputTodo;