'use strict';

const fs = require('fs');
const fse = require('./fse');

const isNotSymbolicLink = src => !fs.lstatSync(src).isSymbolicLink();

function copyDirContentsSync(srcDir, destDir, opts) {
  const options = Object.assign(
    {
      noLinks: false,
    },
    opts
  );

  const copySyncOptions = {
    dereference: true,
  };
  if (options.noLinks) {
    copySyncOptions.filter = isNotSymbolicLink;
  }
  fse.copySync(srcDir, destDir, copySyncOptions);
}

module.exports = copyDirContentsSync;
