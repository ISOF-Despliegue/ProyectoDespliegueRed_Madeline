const gameService = require("../services/gameService");

async function getGameData(req, res) {
    try {
        const gameName = (req.query.name || "").trim();

        if (!gameName) {
            res.status(400).json({
                message: "You must send a game name in the query param 'name'.",
            });
            return;
        }

        const gameData = gameService.getGameDataByName(gameName);
    } catch (error) {
        
    }
}

module.exports = {
    getGameData,
}