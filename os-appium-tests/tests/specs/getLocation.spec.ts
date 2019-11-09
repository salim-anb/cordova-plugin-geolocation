// Import constants and classes needed
import 'jasmine';
import { DEFAULT_TIMEOUT, DEFAULT_TIMEOUT_INTERVAL } from '../constants';
import * as Context from '../helpers/Context';
import PermissionAlert from '../helpers/PermissionAlert';
import * as GetLocationScreen from '../screenobjects/GetLocationScreen';
import * as HomeScreen from '../screenobjects/LocationHomeScreen';

describe('[TestSuite, Description("Get Location")]', () => {

    const allowPermissionIfNeeded = (allow: boolean) => {
        Context.switchToContext(Context.CONTEXT_REF.NATIVE);

        if (PermissionAlert.isShown(true, browser)) {
            PermissionAlert.allowPermission(allow, browser);
            PermissionAlert.isShown(false, browser);
        }
        Context.switchToContext(Context.CONTEXT_REF.WEBVIEW);
    };

    const waitForScreen = (title: string) => {
        GetLocationScreen.getTitle().waitForDisplayed(DEFAULT_TIMEOUT);
        const screenTitle: string = GetLocationScreen.getTitle().getText();
        expect(screenTitle).toContain(title);
    };


    beforeAll(() => {

        // Wait for webview to load
        Context.waitForWebViewContextLoaded();

        // Switch the context to WEBVIEW
        Context.switchToContext(Context.CONTEXT_REF.WEBVIEW);

        // Wait for Get Location Screen
        waitForScreen(GetLocationScreen.SCREENTITLE.LOCATION_SCREEN);

    });

    it('[Test, Description("Get location with all parameters"), Priority="P0"]', () => {

        // Enter Home Screen
        HomeScreen.getTitle().waitForDisplayed(DEFAULT_TIMEOUT);
        const homeScreenButton = HomeScreen.getPositionLink();
        homeScreenButton.waitForDisplayed(DEFAULT_TIMEOUT);
        homeScreenButton.click();

        // Wait for Get Location Screen
        waitForScreen(GetLocationScreen.SCREENTITLE.LOCATION_SCREEN);

        // Setup of the test
        const setupTimeouttButton = GetLocationScreen.SetupTimeoutAndMaxAgeParameters();
        setupTimeouttButton.waitForDisplayed(DEFAULT_TIMEOUT);
        setupTimeouttButton.click();

        // In case an alert message appears to allow permissions to the phone, it clicks ALLOW
        allowPermissionIfNeeded(true);

        // The expected result is for the contact to be created (message text = true)
        const successCard = GetLocationScreen.getSuccessCard();
        successCard.waitForDisplayed(DEFAULT_TIMEOUT);
        successCard.scrollIntoView();

        const successMessageText = GetLocationScreen.getSuccessCard().getText();
        expect(successMessageText).toEqual('Contact successfully added.');

    });

});
