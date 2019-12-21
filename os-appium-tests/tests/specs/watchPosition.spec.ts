// Import constants and classes needed
import 'jasmine';
import { DEFAULT_TIMEOUT, DEFAULT_TIMEOUT_INTERVAL } from '../constants';
import * as Context from '../helpers/Context';
import PermissionAlert from '../helpers/PermissionAlert';
import * as BottomScreen from '../screenobjects/BottomScreen';
import * as ClearWatchScreen from '../screenobjects/ClearWatchScreen';
import * as HomeScreen from '../screenobjects/LocationHomeScreen';
import * as WatchPositionScreen from '../screenobjects/WatchPositionScreen';

describe('[TestSuite, Description("Watch Position")]', () => {

   const allowPermissionIfNeeded = (allow: boolean) => {
        Context.switchToContext(Context.CONTEXT_REF.NATIVE);

        if (PermissionAlert.isShown(true, browser)) {
            PermissionAlert.allowPermission(allow, browser);
            PermissionAlert.isShown(false, browser);
        }
        Context.switchToContext(Context.CONTEXT_REF.WEBVIEW);
    };

   const waitForScreen = (title: string) => {
        WatchPositionScreen.getTitle().waitForDisplayed(DEFAULT_TIMEOUT);
        const screenTitle: string = WatchPositionScreen.getTitle().getText();
        expect(screenTitle).toContain(title);
    };

   beforeAll(() => {
        // Enable Location
        browser.capabilities.locationContextEnabled = true;

        // Wait for webview to load
        Context.waitForWebViewContextLoaded();

        // Switch the context to WEBVIEW
        Context.switchToContext(Context.CONTEXT_REF.WEBVIEW);

        // Wait for Home Screen
        waitForScreen(HomeScreen.SCREENTITLE.HOME_SCREEN);

        // Enter Home Screen
        HomeScreen.getTitle().waitForDisplayed(DEFAULT_TIMEOUT);

        // Click Watch Position Link
        const watchPositionBtn = HomeScreen.getWatchPositionLink();
        watchPositionBtn.waitForDisplayed(DEFAULT_TIMEOUT);
        watchPositionBtn.click();

        // Wait for Watch Position Screen
        waitForScreen(WatchPositionScreen.SCREENTITLE.WATCH_POSITION_SCREEN);
    });

   beforeEach(() => {
    // Wait for Watch Position Screen
    waitForScreen(WatchPositionScreen.SCREENTITLE.WATCH_POSITION_SCREEN);
    });

   afterEach(() => {
        //  Choose Watch Position Bottom Screen
        BottomScreen.getBottomWatchPositionLink().waitForDisplayed(DEFAULT_TIMEOUT);
        const bottomWatchScreen = BottomScreen.getBottomWatchPositionLink();
        bottomWatchScreen.waitForDisplayed(DEFAULT_TIMEOUT);
        bottomWatchScreen.click();
    });

   it('[Test, Description("Add watch"), Priority="P0", ID="LO0008"]', () => {

        // Setup of the test
        const setupTimeouttButton = WatchPositionScreen.SetupTimeoutAndMaxAgeParameters();
        setupTimeouttButton.waitForDisplayed(DEFAULT_TIMEOUT);
        setupTimeouttButton.click();
        WatchPositionScreen.SetupEnableHighAccuracy().click();

         // click watch position button
        const watchPositionButton = WatchPositionScreen.getStartWatchButton();
        watchPositionButton.waitForDisplayed(DEFAULT_TIMEOUT);
        watchPositionButton.click();

        // In case an alert message appears to allow permissions to the phone, it clicks ALLOW
        allowPermissionIfNeeded(true);

        // The expected result is for the contact to be created (message text = true)
        const successCard = WatchPositionScreen.getSuccessCard();
        successCard.waitForDisplayed(DEFAULT_TIMEOUT);
        successCard.scrollIntoView();

        // a success message will appear
        const successMessageText = WatchPositionScreen.getSuccessCard().getText();
        expect(successMessageText).toEqual('Watch Position added.');

        // the watch will be added to the list of created watches, in clear watch screen
        //  Choose Bottom Screen
        BottomScreen.getBottomClearWatchLink().waitForDisplayed(DEFAULT_TIMEOUT);
        const bottomScreen = BottomScreen.getBottomClearWatchLink();
        bottomScreen.waitForDisplayed(DEFAULT_TIMEOUT);
        bottomScreen.click();

        // Position exists in clear watch screen
        waitForScreen(ClearWatchScreen.SCREENTITLE.CLEAR_WATCH_SCREEN);
        ClearWatchScreen.getListWatches().waitForDisplayed(DEFAULT_TIMEOUT);
        ClearWatchScreen.getListWatches().isExisting();

        // return to Watch Screen
        //  Choose Bottom Screen
        BottomScreen.getBottomWatchPositionLink().waitForDisplayed(DEFAULT_TIMEOUT);
        const bottomWatchPositionScreen = BottomScreen.getBottomClearWatchLink();
        bottomWatchPositionScreen.waitForDisplayed(DEFAULT_TIMEOUT);
        bottomWatchPositionScreen.click();

         // Clean Watch Positions
        // list of created watches, in clear watch screen
        // Choose Bottom Screen
        BottomScreen.getBottomClearWatchLink().waitForDisplayed(DEFAULT_TIMEOUT);
        const bottomClearWatchScreen = BottomScreen.getBottomClearWatchLink();
        bottomClearWatchScreen.waitForDisplayed(DEFAULT_TIMEOUT);
        bottomClearWatchScreen.click();
        // Position exists in clear watch screen
        waitForScreen(ClearWatchScreen.SCREENTITLE.CLEAR_WATCH_SCREEN);
        if (ClearWatchScreen.getListWatches().isExisting()) {
                    ClearWatchScreen.clearAllWatchesButton().click();
        }

    });

    // WIP
   it('[Test, Description("Add watch without phone GPS"), Priority="P0", ID="LO0012"]', () => {
        if (browser.capabilities.locationContextEnabled)  {
            if (browser.isAndroid) {
            browser.capabilities.locationContextEnabled = false;
            browser.toggleLocationServices();

            browser.waitUntil(() => {
             return browser.capabilities.locationContextEnabled === false;
          });
        } else {
            // browser.setGeoLocation("{'\"io.cloudgrey.the-app\": {\"location\": \"inuse\"'}");
        }
          // Context.switchToContext(Context.CONTEXT_REF.WEBVIEW);
        }

        // clicks in start watch
        // Setup of the test
        const setupTimeouttButton = WatchPositionScreen.SetupTimeoutAndMaxAgeParameters();
        setupTimeouttButton.waitForDisplayed(DEFAULT_TIMEOUT);
        setupTimeouttButton.click();

        // click watch position button
        const watchPositionButton = WatchPositionScreen.getStartWatchButton();
        watchPositionButton.waitForDisplayed(DEFAULT_TIMEOUT);
        watchPositionButton.scrollIntoView();
        watchPositionButton.click();

        // In case an alert message appears to allow permissions to the phone, it clicks ALLOW
        allowPermissionIfNeeded(true);

        // an error message will be displayed And it fails to add the watch because location is disabled
        // The expected result is for the contact to be created (message text = true)
        const failureCard = WatchPositionScreen.getFailureCard();
        failureCard.waitForDisplayed(DEFAULT_TIMEOUT);
        failureCard.scrollIntoView();

        // a failure message will appear
        const failureMessageText = WatchPositionScreen.getErrorMessage().getText();
        expect(failureMessageText).toEqual('Current location settings can not satisfy this request');

    });

});
