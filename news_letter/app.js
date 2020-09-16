const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const User = require('./models/User');
const localStrategy = require('passport-local').Strategy;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const ContactMeRouter = require('./routes/contactme');
const ForumRouter = require('./routes/Forum');
const SignUpOrLogInRouter = require('./routes/SignUpLogIn');
const calcRouter = require('./routes/Calc');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set setting
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// passport seting

app.use(session({

  secret: 'shhhh just beetween us',
  resave: false,
  saveUninitialized: false

}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new localStrategy(User.authenticate()));

// connection to database
mongoose.connect('mongodb://localhost:27017/HealthyNShape', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set('useCreateIndex', true);

// requests
app.use('/', indexRouter);
app.use('/contact', ContactMeRouter);
app.use('/users', usersRouter);
app.use('/forum', ForumRouter);
app.use('/signUpOrIn', SignUpOrLogInRouter);
app.use('/CalsCalculator', calcRouter);

// starting server
app.listen(3000, function () {
  console.log('server start at 3000...');
});
