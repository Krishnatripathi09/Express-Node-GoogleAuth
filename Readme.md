# Command Prompt

Opened command Prompt
Moved to Documents Folders
Created a directory named Google-Auth with command mkdir Google-Auth
Changed the path to created Directory with cd Google-Auth
Then created the package.json file with command __npm init -y__.
Then created the app.js file with command __echo. > app.js__
And also the file Readme.md with command __echo. > Readme.md__

So we have insatlled all these "npm i express passport passport-google-oauth20 express-session dotenv" Packages from Npm to proceed with google auth

```javascript
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
```
After installing all the packages we proceed to create the session as we will be using sessions to handle logged-In User Info.

here we are useing a middleware to create a session and store it : 
here __Secret__ is the secret with which our session will be signed once user Logs-in. __resave__ is the option to save the session everytime it is changed as we have set it to false. __saveUninitialized__ means A new ession is created and stored even if nothing is stored in it.



