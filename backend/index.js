const express = require("express");
const cors = require("cors");

// Importing connection
require("./db/config");
// Importing schema for Users collection in db
const Users_model = require("./db/users");

const Jwt = require("jsonwebtoken");
const jwtKey = "news";

// Getting functionality of express
const app = express();

// Middleware to process req before recieving
app.use(express.json());
// Middleware to avoid cors error
app.use(cors());

// Just to render something at landing page
app.get("/", (req, res) => {
  res.send("<h1>This is Backend</h1>");
});

// signup API
app.post("/signup", async (req, res) => {
  let result_ = await Users_model.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (result_ == null) {
    let new_user = new Users_model(req.body);
    let result = await new_user.save();

    // To not to send password in response
    result = result.toObject();

    // To not send password as a result
    delete result.password;
    // To make a Jwt token for the current user
    Jwt.sign({ result }, jwtKey, { expiresIn: "3h" }, (err, token) => {
      if (err) {
        res.send({ result: "Something went wrong" });
      } else {
        res.send({ result, auth: token });
      }
    });
  } else {
    res.send({ result: "User already exists" });
  }
});

// login API
app.post("/login", async (req, res) => {
  let result = await Users_model.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (result == null) {
    // if both email and password together sent by login doesnt match any entry in collection
    res.send(false);
  } else {
    // To make a Jwt token for the current user
    Jwt.sign({ result }, jwtKey, { expiresIn: "3h" }, (err, token) => {
      if (err) {
        res.send({ result: "Something went wrong" });
      } else {
        res.send({ result, auth: token });
      }
    });
  }
});

function verifyToken(req, res, next) {
  // Getting token from headers
  let token = req.headers["authorization"];
  // Verifying token
  if (token) {
    // splitiing the token into list ["bearer", token]
    token = token.split(" ")[1];
    Jwt.verify(token, jwtKey, (err, valid) => {
      if (err) {
        res.status(401).send({ result: "Please provide valid token" });
      } else {
        next();
      }
    });
  } else {
    res.status(403).send({ result: "Please add token with header" });
  }
}
app.listen(5000);
