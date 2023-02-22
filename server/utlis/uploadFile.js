// this module uploads the file send by admin to the server
const multer = require("multer");
const path = require("path");
//the excelfile is saved to the public/adminExcelUploads directory from root .
// the name of excel file is `admin_{file_nameuploaded}` .
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/adminExcelUploads"));
  },
  filename: function (req, file, cb) {
    cb(null, `admin_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
