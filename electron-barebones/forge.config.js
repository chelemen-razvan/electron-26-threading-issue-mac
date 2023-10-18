const path = require('node:path');
const fs = require('fs-extra');
const shell = require('shelljs')

module.exports = {
  buildIdentifier: 'my-build',
  hooks: {
  },
  makers: [{
    name: '@electron-forge/maker-squirrel',
  }, {
    name: '@electron-forge/maker-pkg',
    platforms: ['darwin'],
  }, {
    name: '@electron-forge/maker-deb',
    config: {},
  }, {
    name: '@electron-forge/maker-rpm',
    config: {},
  }],
};
