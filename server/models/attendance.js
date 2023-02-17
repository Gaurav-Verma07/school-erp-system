const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema(
    {
        teacher_name: {
            type: String,
            required: true,
        },
        student_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now(),
        },
        no_of_periods: {
            type: Number,
            required: true,
        }
    }
)

const AttendaceModel = mongoose.model("attendace",AttendanceSchema);
module.exports = AttendaceModel;