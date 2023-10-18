const Cam = require('@video/cam');

const cam = new Cam((event, state) => {
    console.warn('Worker events', event, state)
});

const initResult = cam.testGCD();

console.log(initResult);