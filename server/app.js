var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const passport = require('passport');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/category');
var articleRouter = require('./routes/article');
var authRouter = require('./routes/auth');

var app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

passport.use('jwt', new JWTstrategy({
    secretOrKey: 'SUPER_SECRET',
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
},
    (user, done) => {
        try {
            return done(null, user);
        } catch (error) {
            done(error);
        }
    }
))
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category', categoryRouter);
app.use('/article', articleRouter);
app.use('/auth', authRouter);

module.exports = app;
