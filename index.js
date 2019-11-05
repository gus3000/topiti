const express = require('express');
const ejs = require('ejs');

const app = express();

app.use("/top", (req,res) => {
    res.render("top.ejs");
});

app.listen(8080);