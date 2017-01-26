const _ = require('lodash');

const withCamelCase = (find, replace, content) => content.replace(new RegExp(find, 'gim'), _.camelCase(replace));

const withKebabCase = (find, replace, content) => content.replace(new RegExp(find, 'gim'), _.kebabCase(replace));

const withCapitalize = (find, replace, content) => content.replace(new RegExp(find, 'gim'), _.upperFirst(_.camelCase(replace)));

module.exports = {
  withCamelCase,
  withKebabCase,
  withCapitalize
};
