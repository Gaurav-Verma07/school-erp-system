const teacherModels = require("../models/teacher");
const { catchAsync } = require("../utlis/catchAsync");
const upload = require("../utlis/uploadFile");
const excelToJsonConverter = require("../utlis/excelToJsonConverter");
const uploadMiddleware = upload.single("dataFile"); 
const postTeachersDataController = catchAsync(async (req, res, next) => {
  const json = excelToJsonConverter(req.file.path);
  await teacherModels.insertMany(json, (err, result) => {
    if (err) console.log(err);
    if (result) {
      res.status(200).json({
        msg: "Teachers data uploaded successfully into database",
        filename: req.file.originalname,
      });
    }
  });
});

module.exports = { postTeachersDataController, uploadMiddleware };
