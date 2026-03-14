const gameService = require("../services/gameService");

function getGameData(req, res) {
    try {
        /* const gameName = (req.query.name || "").trim();

         if (!gameName) {
            res.status(400).json({
                message: "You must send a game name in the query param 'name'.",
            });
            return;
        } */
        
        const gameData = gameService.getHardcodedGameData();

        res.status(200).json({
            message: "Successful game query",
            data: gameData
        });
    } catch (error) {
        if(error.message === "GAME_NOT_FOUND") {
            res.status(404).json({
                message: "Requested game not found"
            });
            return;
        } else {
            res.status(500).json({
                message: "Internal server error"
            })
        }
    }
}

module.exports = {
    getGameData,
}