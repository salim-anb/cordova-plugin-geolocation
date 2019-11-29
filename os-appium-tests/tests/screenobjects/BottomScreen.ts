import * as Context from '../helpers/Context';

// APPLICATION DEFAULTS

export function getBottomLocationLink(): WebdriverIO.Element {
    return Context.getElemBySelector('a[href*=GetLocation]');
}

export function getBottomWatchPositionLink(): WebdriverIO.Element {
    return Context.getElemBySelector('a[href*=WatchPosition]');
}

export function getBottomClearWatchLink(): WebdriverIO.Element {
    return Context.getElemBySelector('a[href*=ClearWatch]');
}
export function getBottomPositionLink(): WebdriverIO.Element {
    return Context.getElemBySelector('a[href*=PositionChange]');
}
