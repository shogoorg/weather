const express = require("express");
const app = express();

app.get("/getweather", (req, res) => {
    const location = req.query.location;
    let temp, conditions;

    if (location == "Tokyo") {
        temp = 10;
        conditions = "2023-12-31";
    } else if (location == "Tokyo Intl") {
        temp = 10.7;
        conditions = "2023-12-31";
    } else if (location == "Tokyo Heliport") {
        temp = 10.2;
        conditions = "2023-12-31";
    } else {
        res.status(400).send("there is no data for the requested location");
    }

    res.json({
        weather: temp,
        location: location,
        conditions: conditions
    });
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
    console.log(`weather service: listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("welcome to hard-coded weather!");
});