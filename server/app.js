const express = require("express");
const app = express();
const cors = require("cors");
require("./config/dbConfig");

// Import Router
const studentRouter = require("./routes/studentRoutes");
const sampleRouter = require("./routes/sampleRoutes");
const newStudentRouter = require("./routes/newStudentRoutes");
const noticeRouter = require("./routes/noticeRoutes");
const teacherRouter = require("./routes/teacherRoutes");
const attendanceRouter = require("./routes/attendanceRoutes");
const adminDatapostRouter = require("./routes/adminDataPostRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Routes
app.use("/v1/student/attendance", attendanceRouter);
app.use("/v1/student", studentRouter);
app.use("/v1/notice", noticeRouter);
app.use("/v1/teacher", teacherRouter);
app.use("/v1", sampleRouter);
app.use("/v1/newstudent", newStudentRouter);
app.use("/v1/admin", adminDatapostRouter);

module.exports = app;
