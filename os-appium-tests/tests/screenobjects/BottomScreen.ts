import * as Context from '../helpers/Context';

// APPLICATION DEFAULTS

export function getBottomLocationLink(): WebdriverIO.Element {
    return Context.getElemBySelector('#b7-bottomGetLocationLink');
}

export function getBottomWatchPositionLink(): WebdriverIO.Element {
    return Context.getElemBySelector('#b7-bottomGetWatchPositionLink');
}

export function getBottomClearWatchLink(): WebdriverIO.Element {
    return Context.getElemBySelector('#b7-bottomClearWatchLink');
}
export function getBottomPositionLink(): WebdriverIO.Element {
    return Context.getElemBySelector('#b7-bottomPositionsLink');
}