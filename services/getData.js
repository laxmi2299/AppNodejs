var fs = require("fs");

function getDataFromFile(url) {
  var contents = fs.readFileSync(url);
  var jsonContent = JSON.parse(contents);
  // console.log(jsonContent);
  return jsonContent;
}
module.exports = {
  getDataFromFile: getDataFromFile
};
