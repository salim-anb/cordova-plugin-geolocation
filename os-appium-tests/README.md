# OutSystems Appium Tests Framework

References:
https://github.com/webdriverio/appium-boilerplate

https://github.com/igniteram/appium-webdriverio-typescript

https://medium.com/the-web-tub/testing-cordova-apps-with-appium-2b3b236e026b

# Setup
1. Have Appium installed
1. Run npm install to get the required dependencies

# Run Tests locally

To run the tests:
1. Start Appium server
    * either by using the command line or launching the server with the appium desktop application
    * have a device connected or emulator available
2. Run the command `npm run android`

After the tests run, you can then generate a report with allure:

`npm run report`

The generated report will be located in the **_allure-report_** folder
Then open the generated report with:
`npm run openReport`


# Sauce Labs Device Service

To run the tests in the device farm follow the steps: 
1. upload your application (either _.ipa_ or _.apk_) to saucelabs dashboard.
2. Change the config files "wdio.saucelabs.android.conf.js" and "wdio.saucelabs.ios.conf.js "
    a) set the testobject_api_key for each platform - iOS & Android
    b) set the Android & iOs versions 
3. using a terminal execute the commands
    a) `npm run saucelabs-ios` 
    b) `npm run saucelabs-android`

