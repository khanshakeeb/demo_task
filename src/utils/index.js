export const normalizePort = (val) => {
    const PORT = parseInt(val, 10);
    if (isNaN(PORT)) return val;
    if (PORT >= 0) return PORT;
    return false;
};

export const HTTP_STATUS_CODE = {
    SUCCESS: 200,
    BAD_REQUEST: 400
};

export const APP_CONST = {
    SUCCESS_CODE: 0,
    SUCCESS_MESSAGE: "SUCCESS",
    BAD_INPUT: 'Invalid input; please provide correct input values e.g startDate, endDate, minCount, maxCount',
}

export const appResponse = (records, code, msg) => {
    return {
        code,
        msg,
        records,
    }
}

export const validateInput = (input) => {
    const keys = ['startDate', 'endDate', 'minCount', 'maxCount'];
    return keys.every(key => Object.keys(input).includes(key));
}