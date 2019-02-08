import graphqlHTTP from "express-graphql";
import { RocketSchema } from "./graphql/schema";
import { Router } from "express";

const router = Router();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const indexRoute = router.get("/", (req, res, next) => {
    res.render('index', {
        title: "Rocket Mock GraphQl Server",
        text: "Go to /graphql to have a fun!"
    });
});

app.use("/", indexRoute);

app.use("/graphql", graphqlHTTP({
    schema: RocketSchema,
    graphiql: true
}))

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
