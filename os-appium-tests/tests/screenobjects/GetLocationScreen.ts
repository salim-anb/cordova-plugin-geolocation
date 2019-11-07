import * as Context from '../helpers/Context';

// APPLICATION DEFAULTS


export function getLocationButton(): WebdriverIO.Element {
    return Context.getElemBySelector('#watchPositionLink');
}

// SETUP BUTTONS - Get Location

export function SetupTimeoutAndMaxAgeParameters(): WebdriverIO.Element {
    return Context.getElemBySelector('#btSetTimeoutAndMaxAge');
}

export function SetupTimeoutPhone(): WebdriverIO.Element {
    return Context.getElemBySelector('#Name1_changephone');
}

export function SetupMaxAge(): WebdriverIO.Element {
    return Context.getElemBySelector('#Name1_changeemail');
}

export function SetupEmptyTimeout(): WebdriverIO.Element {
    return Context.getElemBySelector('#Name1_changephoneandemail');
}

export function SetupEmptyMaxAge(): WebdriverIO.Element {
    return Context.getElemBySelector('#Name2_nophone');
}

export function SetupEnableHighAccuracy(): WebdriverIO.Element {
    return Context.getElemBySelector('#onlyphone');
}

export function getTitle(): WebdriverIO.Element {
    return Context.getElemBySelector('#b1-Title');
}

// Result Cards

export function getSuccessCard(): WebdriverIO.Element {
    return Context.getElemBySelector('#msgSuccessGetLocation');
}

// TODO?
/*export function getCloseSuccessCardButton(): WebdriverIO.Element {
    return Context.getElemBySelector('#closeSuccessCard');
}*/

export function getSuccessDetails(): WebdriverIO.Element {
    return Context.getElemBySelector('#detailPosition');
}

export function getFailureCard(): WebdriverIO.Element {
    return Context.getElemBySelector('#msgErrorGetLocation');
}

// msgFailedGetLocation - Failed to obtain location.
export function getFailureMessage(): WebdriverIO.Element {
    return Context.getElemBySelector('#msgFailedGetLocation');
}

// TODO?
/*export function getCloseFailureCardButton(): WebdriverIO.Element {
    return Context.getElemBySelector('#closeFailureCard');
} */

export function getErrorCode(): WebdriverIO.Element {
    return Context.getElemBySelector('#valueFailedCode');
}

export function getErrorMessage(): WebdriverIO.Element {
    return Context.getElemBySelector('#valueFailedMsg');
}


// SCREEN NAME

export const SCREENTITLE = {
    LOCATION_SCREEN: 'GET LOCATION',
  };
