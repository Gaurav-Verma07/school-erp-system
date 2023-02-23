const excelToJson = require("convert-excel-to-json");
const fs = require("fs");

function excelToJsonConverter(path) {
  const result = excelToJson({
    source: fs.readFileSync(path),
    columnToKey: {
      "*": "{{columnHeader}}",
    },
    header: {
      rows: 1,
    },
  });
  return result.Sheet1;
}

module.exports = excelToJsonConverter;
