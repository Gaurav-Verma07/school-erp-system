const studentModel = require('../models/student');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');
const attendanaceModel = require('../models/attendance');
const { catchAsync } = require('../utlis/catchAsync');

const loginHandler = catchAsync(async (req, res, next) => {
  let { email, password } = req.body;
  if (!email || !password) {
    return res.json({
      error: 'Fields must not be empty',
    });
  }
    const data = await studentModel.findOne({ email: email });
    if (!data) {
      return res.json({
        error: 'Invalid email',
      });
    } else {
      const login = password === data.password ? true : false;
      if (login) {
        const token = jwt.sign({ name: data.name }, JWT_SECRET);
        const encode = jwt.verify(token, JWT_SECRET);
        return res
          .status(200).json({
            token: token,
            user: encode,
          });
      } else {
        return res.json({
          error: 'Invalid password',
        });
      }
    }
  });

const logoutHandler = catchAsync(async (req, res, next) => {
  res
    .status(200)
    .cookie('token', null, {
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: 'Logged Out Successfully',
    });
});

const allAttendance = catchAsync(async (req, res, next) => {
    const data = await attendanaceModel.find();
    res.status(200).json({ result: data });
  });

const subjectAttendance = catchAsync(async (req, res, next) => {
  const subject = req.params.id;
  if (!subject) {
    res.json({ error: 'no subject present' });
  }
    const data = await attendanaceModel.find({ subject: subject });
    if (!data) {
      res.json({ error: 'No subject of such type exists' });
    } else {
      res.status(200).json(data);
    }
  });

module.exports = { loginHandler, logoutHandler, allAttendance, subjectAttendance };
