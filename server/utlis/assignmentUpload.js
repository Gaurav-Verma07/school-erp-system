const multer = require("multer");
const path = require("path");
//the excelfile is saved to the public/adminExcelUploads directory from root .
// the name of excel file is `admin_{file_nameuploaded}` .
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/teacherAssignmentUploads"));
  },

  filename: function (req, file, cb) {
    cb(null, `admin_${file.originalname}`);
  },
  filter: function (req, file, cb) {
    if (req.file.mimetype === "application/pdf") return cb(true, null);
    else return cb(false, null);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
