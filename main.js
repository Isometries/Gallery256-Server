"use strict";

const express = require("express"),
  app = express(),
  router = express.Router(),
  mongoose = require("mongoose"),
  photoController = require("./controllers/photosController"),
  Photo = require("/models/photo");


mongoose.Promise = global.Promise;
//testing purposes
mongoose.coonext(
    "mongodb://localhost:27017/photo_db",
    { userNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Succesfully connected to database");
});
