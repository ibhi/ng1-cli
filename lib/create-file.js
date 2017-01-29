
const readFile = (fs, path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
};

/**
 * @function replaceName
 * @description Replaces provided name with the provided content in proper format
 * @param  {string} name - Name to be replaced
 * @param  {string} content - Content where name to be replaced with
 * @return {string} content - Replaced content
 */
const replaceName = (replace, name, content) => {
  content = replace.withCamelCase('__camelCaseName__', name, content);
  content = replace.withKebabCase('__snakeCaseName__', name, content);
  content = replace.withCapitalize('__capitalizeName__', name, content);
  return content;
};

const replaceModuleName = (moduleName, content) => moduleName ? content.replace(/Module/gim, moduleName) : content;

const writeFile = (fs, filePath, fileName, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath + '/' + fileName, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// {
//   fs: fs,
//   chalk: chalk,
//   replace: replaceFn,
//   name: 'helloComponent',
//   moduleName: 'app.home'
//   templatePath: 'ng-cli/',
//   destPath: /home/john/ng-cli/,
//   type: 'component',
//   ext: '.js',
// }

const createFile = ({ fs, chalk, replace, name, moduleName, templatePath, destPath, type, ext }) => {
  return new Promise((resolve, reject) => {
    readFile(fs, templatePath)
      .then(
        (content) => replaceName(replace, name, content)
      ).then(
        (content) => replaceModuleName(moduleName, content)
      ).then(
        (content) => writeFile(fs, destPath, name + '.' + type + ext, content)
      ).then(
        () => {
          console.log(chalk.green.bold.underline('Created ' + name + '.' + type + ext));
          resolve();
        },
        () => {
          console.log(chalk.red('Error creating ' + destPath + '/' + name + '.' + type + ext));
          reject();
          process.exit(1);
        }
      );
  });
};

module.exports = createFile;
