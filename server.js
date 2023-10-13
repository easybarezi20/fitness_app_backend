// import dotenv 
require("dotenv").config()

const { PORT } = process.env;

// import express
const express = require("express");
const app = express();

// import mongodb connection
require("./config/db.connection");

app.use(express.json());

// import morgan and cors 
const cors = require("cors");
const morgan = require("morgan");

// import controllers
const { workoutsController } = require('./controller')

// middleware
const customMiddleware = (req,res,next) => {
    console.log("middleware executed!!");
    next()
}
app.use(customMiddleware)
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/workouts', workoutsController)

// TEST ROUTE -> WORKING
app.get("/", (req, res) => {
    res.send("Sanity Check for fitness app");
  });
// LISTEN ROUTE
app.listen(process.env.PORT || 4000, () => {
    console.log(`Listening on port ${PORT}`);
});