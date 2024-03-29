'use strict';

var path = require('path');

var rootPath = path.normalize(__dirname + '/../../..');

module.exports = {
  appId: 'sentientmachinelabs',
  root: rootPath,
  port: process.env.PORT || 9000
};
