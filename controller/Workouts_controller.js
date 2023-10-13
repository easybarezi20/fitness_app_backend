const express = require("express");
const router = express.Router();
const { Workouts } = require("../models")

require("../config/db.connection");

router.get('/getworkouts', async (req,res, next) => {
    try {
        const workouts = await Workouts.find({});
        res.status(200).json(workouts)
    } catch (error) {
        console.error(error);
        next(error);
    }
})

router.post('/createworkout', async (req,res,next) => {
    try {
        const createWorkout = await Workouts.create(req.body);
        res.status(201).json(createWorkout)
    } catch (error) {
        console.error(error);
        next(error);
    }
})

module.exports = router