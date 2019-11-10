"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Context = require("../helpers/Context");
// APPLICATION DEFAULTS
function getLocationLink() {
    return Context.getElemBySelector('#getLocationLink');
}
exports.getLocationLink = getLocationLink;
function getWatchPositionLink() {
    return Context.getElemBySelector('#watchPositionLink');
}
exports.getWatchPositionLink = getWatchPositionLink;
function getClearWatchLink() {
    return Context.getElemBySelector('#clearWatchScreen');
}
exports.getClearWatchLink = getClearWatchLink;
function getPositionLink() {
    return Context.getElemBySelector('#positionScreenLink');
}
exports.getPositionLink = getPositionLink;
function getTitle() {
    return Context.getElemBySelector('#b1-Title');
}
exports.getTitle = getTitle;
// SCREEN NAME
exports.SCREENTITLE = {
    HOME_SCREEN: 'Location plugin',
};
