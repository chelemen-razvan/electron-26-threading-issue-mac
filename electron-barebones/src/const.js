const { app } = require('electron');
const path = require('node:path');
const packageJson = require('./../package.json');

const APP_NAME = packageJson.productName;

const IS_WIN = process.platform === 'win32';

const USER_DATA_PATH = app.getPath('userData');

const APP_DATA_PATH = IS_WIN ? path.join(USER_DATA_PATH, '..', '..', 'Local', APP_NAME) : path.join(USER_DATA_PATH, APP_NAME);

const PROGRAM_DATA_PATH = IS_WIN ? path.join('C:', 'ProgramData', APP_NAME) : APP_DATA_PATH;


module.exports = {
  APP_NAME,
  APP_DATA_PATH,
  PROGRAM_DATA_PATH
}
