const { config } = require('./wdio.shared.conf');
// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The reference to the app
        testobject_app_id: '1', // app version id - find it in saucelabs dashboard app versions
        // The api key that has a reference to the app-project in the TO cloud
        testobject_api_key: 'D9F910DF4B894017B15C2FB7AD25192B',
        // You can find more info in the Appium Basic Setup section
        platformName: 'Android',
        platformVersion: '12',
        idleTimeout: 180,
        // testobject_cache_device: true,
        // noReset: true,
        orientation: 'PORTRAIT',
        newCommandTimeout: 180,
        privateDevicesOnly: false,
        enableAnimations: false,
        autoAcceptAlerts: true,
        // The name of the test for in the cloud
        testobject_test_name: 'location',
        // deviceName: 'iPhone.*',
        // maxInstances: 2,
        // tabletOnly: false,
        // testobject_cache_device: true,
        // noReset: true,
        locationServicesEnabled: true,
        locationServicesAuthorized: true
    },
];

// =========================
// Sauce RDC specific config
// =========================
// The new version of WebdriverIO will:
// - automatically update the job status in the RDC cloud
// - automatically default to the US RDC cloud
config.services = [ 'sauce' ];
// If you need to connect to the US RDC cloud comment the below line of code
config.region = 'eu';
// and uncomment the below line of code
// config.region = 'us';
config.protocol = 'https';
config.host = 'appium.testobject.com';
config.port = 443;
config.path = '/wd/hub';

// This port was defined in the `wdio.shared.conf.js` for appium
// delete config.port;

exports.config = config;
