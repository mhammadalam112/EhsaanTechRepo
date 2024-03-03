const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const knex = require("./database");

app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/dishes", (req, res) => {
  knex.select('*').from('dishes')
    .then(rows => {
      return res.json(rows);
    })
    .catch((err) => { return res.json({ "status": "error occured" }) })
});

app.get("/dishes/:id", (req, res) => {
  const id = req.params.id;
  knex('dishes')
    .where({ id: id })
    .then(rows => {
      return res.json(rows);
    })
    .catch((err) => { return res.json({ "status": "error occured" }) })
});

app.post("/dishes", (req, res) => {
  const body = req.body;

  const insertObject = {
    dish_name: body.name,
    category: body.category,
    quantity: body.quantity,
    price: body.price
  };

  knex('dishes')
    .insert(insertObject)
    .then(() => { return res.json({ "status": "success" }) })
    .catch((err) => { return res.json({ "status": "error" }) })
});

app.patch("/dishes/:id", (req, res) => {
  const body = req.body;
  const id = req.params.id;

  const updateObject = {
    dish_name: body.name,
    category: body.category,
    quantity: body.quantity,
    price: body.price
  };

  knex('dishes')
    .where({ id: id })
    .update(updateObject)
    .then(() => { return res.json({ "status": "success" }) })
    .catch((err) => { return res.json({ "status": "error" }) })

});

app.delete("/dishes/:id", (req, res) => {
  const id = req.params.id;
  knex('dishes')
    .where({ id: id })
    .del()
    .then(() => { return res.json({ "status": "success" }) })
    .catch((err) => { return res.json({ "status": "error" }) })
});



app.listen(PORT, () => console.log("server started at PORT " + PORT));