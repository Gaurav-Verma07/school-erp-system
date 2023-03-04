const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Teacher",
  },
  className: {
    type: String,
    required: true,
  },
  assignmentInfo: {
    type: String,
    required: true,
  },
  assignedDate: {
    type: Date,
    required: true,
  },
  isDocumentFormat: {
    type: String,
    required: true,
    enum: ["pdf"],
  },
  assignmentFile: {
    type: String,
    required: true,
  },
  lastDate: {
    type: Date,
    required: true,
  },
});

AssignmentModel = mongoose.model("Assignment", assignmentSchema);

module.exports = AssignmentModel;
