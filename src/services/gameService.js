async function getHardcodedGameData() {
    const firstResult = {
        id: 1,
        name: "Metroid",
        releaseYear: 1986,
        platform: "NES"
    }

    if (!firstResult.results || firstResult.results.length === 0) {
        throw new Error("GAME_NOT_FOUND");
    }

    return {
        id: firstResult.id,
        name: firstResult.name,
        releaseYear: firstResult.releaseYear,
        platform: firstResult.platform
    };
}

module.exports = {
    getHardcodedGameData,
}