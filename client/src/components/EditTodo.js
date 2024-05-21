import React from "react";
import { Fragment, useEffect, useState } from "react";
// modal display source : https://www.w3schools.com/bootstrap4/bootstrap_modal.asp

const EditTodo = ({ todo }) => {
    //console.log(todo);
    const [description, setDescription] = useState(todo.description);

    //edit description function
    const updateDescription = async(e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
               method: "PUT",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(body) 
            })//send response to restful api

            //console.log(response);
            window.location = "/"
        } catch (err) {
            console.error(err.message);
        }
    }
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div className="modal" 
        id={`id${todo.todo_id}`} 
        onClick={() => setDescription(todo.description)} // so if we don't finish editing the description will go back to it's original form in the edit input
        >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button type="button" className="close" data-dismiss="modal" 
                onClick={() => setDescription(todo.description)} // so if we don't finish editing the description will go back to it's original form in the edit input
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input 
                type="text" 
                className="form-control" 
                value={description} 
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick = {e => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)} // so if we don't finish editing the description will go back to it's original form in the edit input
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default EditTodo;
