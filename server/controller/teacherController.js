const attendanaceModel = require("../models/attendance");
const AssignmentModel = require("../models/assignment");
const { catchAsync } = require("../utlis/catchAsync");
const upload = require("../utlis/assignmentUpload");
const uploadMiddleware = upload.single("assignment");
const postHandler = catchAsync(async (req, res, next) => {
  let { teacherName, studentId, subject, noOfPeriods } = req.body;
  if (!teacherName || !studentId || !subject || !noOfPeriods) {
    return res.json({ error: "Fields must not be empty" });
  }
  const newAttendance = new attendanaceModel({
    teacherName,
    studentId,
    subject,
    noOfPeriods,
  });
  const savedAttendance = await newAttendance.save();
  res.status(200).json({ savedAttendance });
});

const assignmentHandler = catchAsync(async (req, res, next) => {
  const obj = {
    subject: req.body.subject,
    teacher: req.body.teacher,
    className: req.body.className,
    assignmentInfo: req.body.assignmentInfo,
    assignedDate: req.body.assignedDate,
    isDocumentFormat: req.body.isDocumentFormat,
    assignmentFile: req.file.path,
    lastDate: req.body.lastDate,
  };
  const assignment = new AssignmentModel(obj);
  const savedAssignment = await assignment.save();

  res.status(201).json(savedAssignment);
});

module.exports = { postHandler, assignmentHandler, uploadMiddleware };
