const path = require('path');

let rootPath = path.normalize(path.join(__dirname, '/../'));

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://Admin:AdminmLab89@ds155825.mlab.com:55825/react-module',
    port: 55825
  },
  staging: {
  },
  production: {
    port: process.env.PORT
  }
};
