const express = require("express");
const app = express();

app.get("/getweather", (req, res) => {
    const location = req.query.location;
    let temp, conditions;

    if (location == "New Orleans") {
        temp = 99;
        conditions = "hot and humid";
    } else if (location == "Seattle") {
        temp = 40;
        conditions = "rainy and overcast";
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