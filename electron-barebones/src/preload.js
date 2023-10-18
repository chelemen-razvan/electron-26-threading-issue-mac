const { contextBridge } = require('electron');

const Cam = require('@video/cam');

contextBridge.exposeInMainWorld('desktop', {
  cam: {
    init: async (hook) => {
      const cam = new Cam(hook);
      const initResult = cam.testGCD();

      console.log('Init result:', initResult);
    }
  }
});
