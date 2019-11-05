const express = require('express');


const app = express();

const films = ["Pursuit of Happyness", "I am Legend", "I, Robot"];

app.use("/top", (req,res) => {
    res.render("top.ejs", {films: films});
});

app.listen(8080);