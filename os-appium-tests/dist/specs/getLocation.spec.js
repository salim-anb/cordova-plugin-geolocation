"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import constants and classes needed
require("jasmine");
const constants_1 = require("../constants");
const Context = require("../helpers/Context");
const PermissionAlert_1 = require("../helpers/PermissionAlert");
const GetLocationScreen = require("../screenobjects/GetLocationScreen");
const HomeScreen = require("../screenobjects/LocationHomeScreen");
describe('[TestSuite, Description("Get Location")]', () => {
    const allowPermissionIfNeeded = (allow) => {
        Context.switchToContext(Context.CONTEXT_REF.NATIVE);
        if (PermissionAlert_1.default.isShown(true, browser)) {
            PermissionAlert_1.default.allowPermission(allow, browser);
            PermissionAlert_1.default.isShown(false, browser);
        }
        Context.switchToContext(Context.CONTEXT_REF.WEBVIEW);
    };
    const waitForScreen = (title) => {
        GetLocationScreen.getTitle().waitForDisplayed(constants_1.DEFAULT_TIMEOUT);
        const screenTitle = GetLocationScreen.getTitle().getText();
        expect(screenTitle).toContain(title);
    };
    beforeAll(() => {
        // Wait for webview to load
        Context.waitForWebViewContextLoaded();
        // Switch the context to WEBVIEW
        Context.switchToContext(Context.CONTEXT_REF.WEBVIEW);
        // Wait for Home Screen
        waitForScreen(HomeScreen.SCREENTITLE.HOME_SCREEN);
    });
    it('[Test, Description("Get location with all parameters"), Priority="P0"]', () => {
        // Enter Home Screen
        HomeScreen.getTitle().waitForDisplayed(constants_1.DEFAULT_TIMEOUT);
        const homeScreenButton = HomeScreen.getLocationLink();
        homeScreenButton.waitForDisplayed(constants_1.DEFAULT_TIMEOUT);
        homeScreenButton.click();
        // Wait for Get Location Screen
        waitForScreen(GetLocationScreen.SCREENTITLE.LOCATION_SCREEN);
        // Setup of the test
        const setupTimeouttButton = GetLocationScreen.SetupTimeoutAndMaxAgeParameters();
        setupTimeouttButton.waitForDisplayed(constants_1.DEFAULT_TIMEOUT);
        setupTimeouttButton.click();
        // In case an alert message appears to allow permissions to the phone, it clicks ALLOW
        allowPermissionIfNeeded(true);
        // click get Location button
        const locationButton = GetLocationScreen.getLocationBtn();
        locationButton.waitForDisplayed(constants_1.DEFAULT_TIMEOUT);
        locationButton.click();
        // The expected result is for the contact to be created (message text = true)
        const successCard = GetLocationScreen.getSuccessCard();
        successCard.waitForDisplayed(constants_1.DEFAULT_TIMEOUT);
        successCard.scrollIntoView();
        const successMessageText = GetLocationScreen.getSuccessCard().getText();
        expect(successMessageText).toEqual('Contact successfully added.');
    });
});
