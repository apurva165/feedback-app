const express = require("express");
const keys = require("./configs/keys");

const app = express();
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;

//passport.use(new googleStrategy());
// app.get("/", (req, res) => {
//   res.send({ hi: "there" });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT);
