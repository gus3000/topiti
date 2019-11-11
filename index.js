const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: "Will Smith",
    resave: false,
    saveUninitialized: true
}));

app.use(express.urlencoded());

app.use((req,res,next) => {
    if(!req.session.films)
    {
        req.session.films = ["Pursuit of Happyness", "I am Legend", "I, Robot"];
    }
    next();
});

app.post("/top/add", (req, res, next) => {
    if(!req.body.film)
    {
        console.log("oups");
        res.redirect("/top");
        return;
    }
    req.session.films.push(req.body.film);
    res.redirect("/top");
});

app.use("/top", (req,res) => {
    res.render("top.ejs", {films: req.session.films});
});

app.listen(8080);