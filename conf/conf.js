import wd from 'wd';
import * as dotenv from 'dotenv'

dotenv.config()
const desiredCaps = {
    platformName: "Android",
    deviceName: "emulator-5554",
    udid: "127.0.0.1:56697",
    appPackage:"ee.mtakso.client",
    appActivity: "ee.mtakso.client.activity.SplashHomeActivity",
    platformVersion:"9",
    automationName: "Appium",
    autoGrantPermissions: true,
    noReset: true,
    newCommandTimeout: "120" 
  };

  const driver = wd.promiseChainRemote({
    host: 'localhost',
    port: 4723
  });

  export { desiredCaps , driver};