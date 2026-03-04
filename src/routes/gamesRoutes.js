const express = require("express");
const gamesController = require("../controllers/gameController");

const router = express.Router();

router.get("/games", gamesController.getGameData);

module.exports = router;