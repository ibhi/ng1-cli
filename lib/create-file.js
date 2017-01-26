const fs = require('fs');
const path = require('path');

const createFile = (filePath, fileName, content) => {
    fs.writeFile(filePath + '/' + fileName, content);
}
console.log(path.resolve(process.cwd()));

// createFile(path.resolve(process.cwd()), 'test.txt', 'Hello');

module.exports = createFile;
