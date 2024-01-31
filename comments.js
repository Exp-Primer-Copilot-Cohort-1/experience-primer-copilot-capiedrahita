//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Set view engine
app.set('view engine', 'ejs');

//Set public folder to store static files
app.use(express.static('public'));

//Use body-parser
app.use(express.urlencoded({ extended: true }));

//Use method-override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//Use express-session
const session = require('express-session');
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  })
);

//Use connect-flash
const flash = require('connect-flash');
app.use(flash());

//Use passport
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

//Use connect-flash
app.use(flash());

//Use moment
const moment = require('moment');

//Use connec
