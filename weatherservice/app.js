const express = require("express");
const app = express();
//const { BigQuery } = require('@google-cloud/bigquery');
//const bigquery = new BigQuery();

app.get("/getweather", (req, res) => {
    const location = req.query.location;
    let temp, conditions;

    if (location == "Tokyo") {
        //const query = "SELECT TRUNC((5 / 9) * (temp - 32), 1) AS Celsius,date FROM bigquery-public-data.noaa_gsod.gsod2023 where stn = '476620' order by date desc limit 1";
        temp = 10.0;
        conditions = "2023-12-31";
    } else if (location == "Tokyo Intl") {
        //const query = "SELECT TRUNC((5 / 9) * (temp - 32), 1) AS Celsius,date FROM bigquery-public-data.noaa_gsod.gsod2023 where stn = '476710' order by date desc limit 1";
        temp = 10.7;
        conditions = "2023-12-31";
    } else if (location == "Tokyo Heliport") {
        //const query = "SELECT TRUNC((5 / 9) * (temp - 32), 1) AS Celsius,date FROM bigquery-public-data.noaa_gsod.gsod2023 where stn = '476870' order by date desc limit 1";
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