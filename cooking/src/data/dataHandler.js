const fs = require("fs");

const updateData = (sourceFilePath, destinationFilePath) => {
  fs.readFile(sourceFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the source file:", err);
      return;
    }
    const jsonData = JSON.parse(data);
    fs.writeFile(
      destinationFilePath,
      JSON.stringify(jsonData, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.error("Error writing to the destination file:", err);
          return;
        }

        console.log(
          "Contents of the source JSON file have been written to the destination file."
        );
      }
    );
  });
};
const dataFilePath = "./data.json";
const backupFilePath = "./backupData.json";

const backupData = () => {
  updateData(dataFilePath, backupFilePath);
};
const restoreData = () => {
  updateData(backupFilePath, dataFilePath);
};

module.exports = { backupData, restoreData };
