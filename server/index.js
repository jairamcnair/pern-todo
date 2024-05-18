// project source: https://www.youtube.com/watch?v=ldYcgPKEZC8&t=305s
// this is the first file created for the project

// 1. require express library for the server (express let's us quicky create the server)
const express = require("express");

// 2. the app variable will run the express library
const app = express(); 

// this waas added after the db.js file was created
const pool = require("./db") 


// 3. estblish middleware
const cors = require("cors");
app.use(cors());
app.use(express.json()); // this gives us access to the request.body object


// ROUTES - STEP 4, 15.44 into video

// create a todo
app.post("/todos", async(req, res) => {
    try{
        const{ description } = req.body; // get's the JSON requested object

        // pass todo description to query
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
        res.json(newTodo);
    }
    catch(err){
        console.error(err.message)
    }
})

// read the todos
// select all the todos
app.get("/todos", async(req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message)
    }
})
// select one todo by id
app.get("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// update a todo
app.put("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body; 

        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
        res.json("Todo was updated");
    } catch (err) {
        console.error(err.message);
    }
})

// delete a todo
app.delete("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;

        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("Todo was deleted!");
        
    } catch (err) {
        console.error(err.message);
    }
})



//4. the server will run on port 5000, when the server starts, the call-back function logs "Server started..."
app.listen(5000, () => {
    console.log("Server has started on port 5000");
})
//5. check if the server starts correctly. Type - node index (press enter) and the console.log text should be in the terminal
// or right click the index.js file and click 'run code'



/*
6.
anytime you build a fullstack application, you need to get data from the client-side, and the only way
to get data from the client-side is to get it from the request.body object which app.use(express.json()); lets us do (line 10)
*/
