const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  appointDate: {
    type: Date,
    required: true,
  },
  isPermanent: {
    type: Boolean,
    required: true,
  },
  classTeacher: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  otherDesignation: {
    type: String,
  },
});

const TeacherModel = mongoose.model("Teacher", teacherSchema);
module.exports = TeacherModel;
