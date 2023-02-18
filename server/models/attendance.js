const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema(
    {
        teacherName: {
            type: String,
            required: true,
        },
        studentId: {
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
        noOfPeriods: {
            type: Number,
            required: true,
        }
    }
)

const AttendaceModel = mongoose.model("attendace",AttendanceSchema);
module.exports = AttendaceModel;