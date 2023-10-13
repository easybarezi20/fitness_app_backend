const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const WorkoutSchema = new mongoose.Schema(
    {
        workout:{
            type: String,
            required: true,
        },
        muscles:{
            type: String,
            required: true,
        },
        photo:{
            type: String,
            required: true,
        }
    }
);

const Workouts = mongoose.model("Workouts", WorkoutSchema);
module.exports = Workouts