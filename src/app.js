const express = require("express");
const cors = require("cors");
const gamesRoutes = require("./routes/gamesRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

function handleHealthCheck(req, res) {
    res.status(200).json({
        status: "Ok",
        message: "API running correctly"
    });
}

app.get("/health", handleHealthCheck);

app.get('/', (req, res) => {
    res.send("Server running correctly");
})

app.use("/games", gamesRoutes);

function handleNotFound(req, res) {
    res.status(404).json({
        message: "The specified resource couldn't be found"
    });
}

app.use(handleNotFound);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})