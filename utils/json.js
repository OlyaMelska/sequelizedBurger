const fs = require("fs");

const readJson = path => {
  const p = new Promise((resolve, reject) => {
    fs.readFile(require.resolve(path), (err, data) => {
      if (err) {
        reject(err);
      } else {
        const parsed = JSON.parse(data);
        resolve(parsed);
      }
    });
  });
  return p;
};

module.exports = {
  readJson
};
