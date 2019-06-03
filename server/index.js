const express = require("express");
const keys = require("./configs/keys");

const app = express();
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "auth/google/callback"
    },
    accesstoken => {
      console.log(accesstoken);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
