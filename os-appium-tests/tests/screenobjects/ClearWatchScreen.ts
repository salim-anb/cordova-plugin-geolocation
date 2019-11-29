import * as Context from '../helpers/Context';

// APPLICATION DEFAULTS

export function getAddtWatchButton(): WebdriverIO.Element {
    return Context.getElemBySelector('#btnAddWatchPosition');
}

// SETUP BUTTONS - Clear All Watches

//
export function clearAllWatchesButton(): WebdriverIO.Element {
    return Context.getElemBySelector('#clearAllWatchesButton');
}

// SETUP BUTTONS - Watch Position

export function SetupTimeoutAndMaxAgeParameters(): WebdriverIO.Element {
    return Context.getElemBySelector('#btSetTimeoutAndMaxAge');
}

export function SetupTimeout(): WebdriverIO.Element {
    return Context.getElemBySelector('#btSetTimeout');
}

export function SetupMaxAge(): WebdriverIO.Element {
    return Context.getElemBySelector('#btSetAge');
}

export function SetupEmptyTimeout(): WebdriverIO.Element {
    return Context.getElemBySelector('#btEmptyTimeout');
}

export function SetupEmptyMaxAge(): WebdriverIO.Element {
    return Context.getElemBySelector('#btEmptyMaxAge');
}

export function SetupEnableHighAccuracy(): WebdriverIO.Element {
    return Context.getElemBySelector('#switchEnableHighAccuracy');
}


// SCREEN ELEMENTS

export function getTitle(): WebdriverIO.Element {
    return Context.getElemBySelector('#b1-Title');
}

// Result Cards

// listWatches
export function getListWatches(): WebdriverIO.Element {
    return Context.getElemBySelector('#listWatches');
}

export function getSuccessCard(): WebdriverIO.Element {
    return Context.getElemBySelector('#msgSuccessWatchPosition');
}

export function getDetailSuccessMessage(): WebdriverIO.Element {
    return Context.getElemBySelector('#detailWatchPosition');
}

export function getFailureCard(): WebdriverIO.Element {
    return Context.getElemBySelector('#msgErrorWatchPosition');
}

export function getErrorCode(): WebdriverIO.Element {
    return Context.getElemBySelector('#valueErrorCode');
}

export function getErrorMessage(): WebdriverIO.Element {
    return Context.getElemBySelector('#valueErrorMsg');
}

// SCREEN NAME

export const SCREENTITLE = {
    CLEAR_WATCH_SCREEN: 'Clear Watch',
};
