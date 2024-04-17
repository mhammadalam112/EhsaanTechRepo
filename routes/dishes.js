const express = require("express");
const router = express.Router();
const {    
handleGetAllDishes,
handleGetDishById,
handleCreateDish,
handleUpdateDish,
handleDeleteDish} = require('../controllers/dishes');

router.get("/", handleGetAllDishes);

router.get("/:id", handleGetDishById);

router.post("/", handleCreateDish);

router.patch("/:id", handleUpdateDish);

router.delete("/:id", handleDeleteDish);


module.exports = router;