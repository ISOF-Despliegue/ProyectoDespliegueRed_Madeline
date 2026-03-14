const express = require("express");
const gamesController = require("../controllers/gameController");

const router = express.Router();

router.get("/", gamesController.getGameData);

module.exports = router;