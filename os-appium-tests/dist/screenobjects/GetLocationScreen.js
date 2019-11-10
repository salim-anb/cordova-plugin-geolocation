"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Context = require("../helpers/Context");
// APPLICATION DEFAULTS
function getTitle() {
    return Context.getElemBySelector('#b1-Title');
}
exports.getTitle = getTitle;
function getLocationLink() {
    return Context.getElemBySelector('#getLocationLink');
}
exports.getLocationLink = getLocationLink;
// SETUP BUTTONS - Get Location
function SetupTimeoutAndMaxAgeParameters() {
    return Context.getElemBySelector('#btSetTimeoutAndMaxAge');
}
exports.SetupTimeoutAndMaxAgeParameters = SetupTimeoutAndMaxAgeParameters;
function SetupTimeoutPhone() {
    return Context.getElemBySelector('#Name1_changephone');
}
exports.SetupTimeoutPhone = SetupTimeoutPhone;
function SetupMaxAge() {
    return Context.getElemBySelector('#Name1_changeemail');
}
exports.SetupMaxAge = SetupMaxAge;
function SetupEmptyTimeout() {
    return Context.getElemBySelector('#Name1_changephoneandemail');
}
exports.SetupEmptyTimeout = SetupEmptyTimeout;
function SetupEmptyMaxAge() {
    return Context.getElemBySelector('#Name2_nophone');
}
exports.SetupEmptyMaxAge = SetupEmptyMaxAge;
function SetupEnableHighAccuracy() {
    return Context.getElemBySelector('#onlyphone');
}
exports.SetupEnableHighAccuracy = SetupEnableHighAccuracy;
function getLocationBtn() {
    return Context.getElemBySelector('#GetLocationBtn');
}
exports.getLocationBtn = getLocationBtn;
// Result Cards
function getSuccessCard() {
    return Context.getElemBySelector('#msgSuccessGetLocation');
}
exports.getSuccessCard = getSuccessCard;
// TODO?
/*export function getCloseSuccessCardButton(): WebdriverIO.Element {
    return Context.getElemBySelector('#closeSuccessCard');
}*/
function getSuccessDetails() {
    return Context.getElemBySelector('#detailPosition');
}
exports.getSuccessDetails = getSuccessDetails;
function getFailureCard() {
    return Context.getElemBySelector('#msgErrorGetLocation');
}
exports.getFailureCard = getFailureCard;
// msgFailedGetLocation - Failed to obtain location.
function getFailureMessage() {
    return Context.getElemBySelector('#msgFailedGetLocation');
}
exports.getFailureMessage = getFailureMessage;
// TODO?
/*export function getCloseFailureCardButton(): WebdriverIO.Element {
    return Context.getElemBySelector('#closeFailureCard');
} */
function getErrorCode() {
    return Context.getElemBySelector('#valueFailedCode');
}
exports.getErrorCode = getErrorCode;
function getErrorMessage() {
    return Context.getElemBySelector('#valueFailedMsg');
}
exports.getErrorMessage = getErrorMessage;
// SCREEN NAME
exports.SCREENTITLE = {
    LOCATION_SCREEN: 'GET LOCATION',
};
