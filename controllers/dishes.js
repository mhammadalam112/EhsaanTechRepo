const knex = require("../connection");


async function handleGetAllDishes(req,res){
    knex.select('*').from('dishes')
    .then(rows => {
      return res.json(rows);
    })
    .catch((err) => { return res.json({ "status": "error occured" }) })
};

async function handleGetDishById(req,res){
    const id = req.params.id;
    knex('dishes')
      .where({ id: id })
      .then(rows => {
        return res.json(rows);
      })
      .catch((err) => { return res.json({ "status": "error occured" }) })
};

async function handleCreateDish(req,res){
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
};

async function handleUpdateDish(req,res){
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
};

async function handleDeleteDish(req,res){
    const id = req.params.id;
    knex('dishes')
      .where({ id: id })
      .del()
      .then(() => { return res.json({ "status": "success" }) })
      .catch((err) => { return res.json({ "status": "error" }) })
};


module.exports = {
    handleGetAllDishes,
    handleGetDishById,
    handleCreateDish,
    handleUpdateDish,
    handleDeleteDish
};