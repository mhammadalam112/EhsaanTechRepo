const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const dishesRouter = require("./routes/dishes");

app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/dishes',dishesRouter);


app.listen(PORT, () => console.log("server started at PORT " + PORT));