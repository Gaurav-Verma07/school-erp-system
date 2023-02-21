const mongoose = require('mongoose');

const newStudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
    unique: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
  },
});

const NewstudentModel = mongoose.model('NewStudent', newStudentSchema);
 module.exports = NewstudentModel
