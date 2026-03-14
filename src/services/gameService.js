function getHardcodedGameData() {
    const gameData = {
        id: 1,
        name: "Metroid",
        releaseYear: 1986,
        platform: "NES"
    }

    return gameData;
}

module.exports = {
    getHardcodedGameData,
}