
// this is the third file created for the project

// 1. create Pool object
const Pool = require("pg").Pool; 

// 2. set up configurations
const pool = new Pool({
    user: "postgres",
    password: "Miloiscute3#a",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

// 3. export
module.exports = pool;