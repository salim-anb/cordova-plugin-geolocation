import * as Context from '../helpers/Context';

// APPLICATION DEFAULTS

export function getLocationLink(): WebdriverIO.Element {
    return Context.getElemBySelector('#getLocationLink');
}

export function getWatchPositionLink(): WebdriverIO.Element {
    return Context.getElemBySelector('#watchPositionLink');
}

export function getClearWatchLink(): WebdriverIO.Element {
    return Context.getElemBySelector('#clearWatchScreen');
}
export function getPositionLink(): WebdriverIO.Element {
    return Context.getElemBySelector('#positionScreenLink');
}

export function getTitle(): WebdriverIO.Element {
    return Context.getElemBySelector('#b1-Title');
}

// SCREEN NAME

export const SCREENTITLE = {
    HOME_SCREEN: 'Location plugin',
};
