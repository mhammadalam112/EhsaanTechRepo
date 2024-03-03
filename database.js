const dotenv = require("dotenv");
dotenv.config();

const knex = require("knex")({
    client: 'mysql2',
    connection : {
        server : process.env.MYSQL_HOST,
        user : process.env.MYSQL_USER,
        password : process.env.MYSQL_PASSWORD,
        database : process.env.MYSQL_DATABASE,
    }
});

knex.raw("SELECT VERSION()").then((res)=>{
    console.log("Connection Successful: ",res);
});

module.exports = knex;
