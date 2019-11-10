"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Context = require("../helpers/Context");
// APPLICATION DEFAULTS
function getStartWatchButton() {
    return Context.getElemBySelector('#btnWatchPosition');
}
exports.getStartWatchButton = getStartWatchButton;
// SETUP BUTTONS - Watch Position
function SetupTimeoutAndMaxAgeParameters() {
    return Context.getElemBySelector('#btSetTimeoutAndMaxAge');
}
exports.SetupTimeoutAndMaxAgeParameters = SetupTimeoutAndMaxAgeParameters;
function SetupTimeout() {
    return Context.getElemBySelector('#btSetTimeout');
}
exports.SetupTimeout = SetupTimeout;
function SetupMaxAge() {
    return Context.getElemBySelector('#btSetAge');
}
exports.SetupMaxAge = SetupMaxAge;
function SetupEmptyTimeout() {
    return Context.getElemBySelector('#btEmptyTimeout');
}
exports.SetupEmptyTimeout = SetupEmptyTimeout;
function SetupEmptyMaxAge() {
    return Context.getElemBySelector('#btEmptyMaxAge');
}
exports.SetupEmptyMaxAge = SetupEmptyMaxAge;
function SetupEnableHighAccuracy() {
    return Context.getElemBySelector('#switchEnableHighAccuracy');
}
exports.SetupEnableHighAccuracy = SetupEnableHighAccuracy;
// SCREEN ELEMENTS
function getTitle() {
    return Context.getElemBySelector('#b1-Title');
}
exports.getTitle = getTitle;
// Result Cards
function getSuccessCard() {
    return Context.getElemBySelector('#msgSuccessWatchPosition');
}
exports.getSuccessCard = getSuccessCard;
/*export function getCloseSuccessCardButton(): WebdriverIO.Element {
    return Context.getElemBySelector('#closeSuccessCard');
}*/
function getDetailSuccessMessage() {
    return Context.getElemBySelector('#detailWatchPosition');
}
exports.getDetailSuccessMessage = getDetailSuccessMessage;
function getFailureCard() {
    return Context.getElemBySelector('#msgErrorWatchPosition');
}
exports.getFailureCard = getFailureCard;
/*export function getCloseFailureCardButton(): WebdriverIO.Element {
    return Context.getElemBySelector('#closeFailureCard');
}*/
function getErrorCode() {
    return Context.getElemBySelector('#valueErrorCode');
}
exports.getErrorCode = getErrorCode;
function getErrorMessage() {
    return Context.getElemBySelector('#valueErrorMsg');
}
exports.getErrorMessage = getErrorMessage;
// SCREEN NAME
exports.SCREENTITLE = {
    WATCH_POSITION_SCREEN: 'Watch Position',
};
