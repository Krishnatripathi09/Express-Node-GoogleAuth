require("dotenv").config();

const express = require("express");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    reasave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
