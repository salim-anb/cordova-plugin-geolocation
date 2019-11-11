const { config } = require('./wdio.shared.conf');
const { join } = require('path');
const waitforTimeout = 30 * 60000;
const commandTimeout = 30 * 60000;
// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        // automationName: 'UiAutomator2',
        deviceName: 'Nexus 4', // '8AFY0K90E', // 'Nexus_5_API_28', // '9885f349344534324d', 'Pixel_2_XL_API_28', //
        platformName: 'Android',
        // platformVersion: '10.0',
        // chromedriver: join(process.cwd(), './chromedriver2.exe'),
        app: join(process.cwd(), './apps/Location_Sample_App.apk'), // Path to your native app
        // appPackage: 'com.outsystemsenterprise.LocationSampleApp',
        // appActivity: 'com.outsystemsenterprise.LocationSampleApp.MainActivity',
        noReset: true,
        waitforTimeout: waitforTimeout,
        commandTimeout: commandTimeout,
        newCommandTimeout: 30 * 60000,
        locationServicesEnabled: true,
        locationServicesAuthorized: true    
    },
];

exports.config = config;
