const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: "Will Smith",
    resave: false,
    saveUninitialized: true
}));

app.use((req,res,next) => {
    if(!req.session.films)
    {
        req.session.films = ["Pursuit of Happyness", "I am Legend", "I, Robot"];
    }
    next();
});

app.use("/top", (req,res) => {
    res.render("top.ejs", {films: req.session.films});
});

app.listen(8080);