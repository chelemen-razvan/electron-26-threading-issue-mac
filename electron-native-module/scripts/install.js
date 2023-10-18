const spawn = require('cross-spawn');
const os = require('os');

if (os.platform() === 'win32' || os.platform() === 'darwin') {
    spawn.sync('pnpm', ['run', 'native-build'], {
        stdio: 'inherit'
    });
}
