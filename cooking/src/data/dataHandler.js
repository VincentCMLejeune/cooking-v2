const fs = require("fs");

const updateData = (sourceFilePath, destinationFilePath, message) => {
  fs.readFile(sourceFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the source file:", err);
      return;
    }
    const jsonData = JSON.parse(data);
    jsonData.lastSaved = new Date();
    fs.writeFile(
      destinationFilePath,
      JSON.stringify(jsonData, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.error("Error writing to the destination file:", err);
          return;
        }
        console.log(message);
      }
    );
  });
};
const dataFilePath = "./data.json";
const backupFilePath = "./backupData.json";

const backupData = () => {
  updateData(
    dataFilePath,
    backupFilePath,
    "Successfully registered data in backup file"
  );
};
const restoreData = () => {
  updateData(
    backupFilePath,
    dataFilePath,
    "Successfully restored data from backup file"
  );
};

restoreData();
module.exports = { backupData, restoreData };
