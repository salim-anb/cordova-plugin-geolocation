import * as Context from '../helpers/Context';

// APPLICATION DEFAULTS

export function getStartWatchButton(): WebdriverIO.Element {
    return Context.getElemBySelector('#btnWatchPosition');
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

export function getSuccessCard(): WebdriverIO.Element {
    return Context.getElemBySelector('#msgSuccessWatchPosition');
}

/*export function getCloseSuccessCardButton(): WebdriverIO.Element {
    return Context.getElemBySelector('#closeSuccessCard');
}*/

export function getDetailSuccessMessage(): WebdriverIO.Element {
    return Context.getElemBySelector('#detailWatchPosition');
}

export function getFailureCard(): WebdriverIO.Element {
    return Context.getElemBySelector('#msgErrorWatchPosition');
}

/*export function getCloseFailureCardButton(): WebdriverIO.Element {
    return Context.getElemBySelector('#closeFailureCard');
}*/

export function getErrorCode(): WebdriverIO.Element {
    return Context.getElemBySelector('#valueErrorCode');
}

export function getErrorMessage(): WebdriverIO.Element {
    return Context.getElemBySelector('#valueErrorMsg');
}

// SCREEN NAME

export const SCREENTITLE = {
    WATCH_POSITION_SCREEN: 'Watch Position',
};
