const express = require('express');
const cors = require("cors");
const app = express();


app.use(cors());
const port = process.env.PORT || 4000;

const apiData = require("./../db.json")

app.get("/", (req,res) => {
    res.send("Hello");
});

app.get("/service", (req,res) => {
    res.send(apidata);
});

app.listen(port, () => {
    console.log("i am live");
});