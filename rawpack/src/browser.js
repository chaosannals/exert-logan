import * as Logan from 'logan-web';

function timeFormat2Day(date) {
    var Y = date.getFullYear();
    var M = date.getMonth() + 1;
    var D = date.getDate();
    return Y + '-' + (M < 10 ? '0' + M : M) + '-' + (D < 10 ? '0' + D : D);
}

export const initLogan = () => {
    Logan.initConfig({
        /* Demo Key */
        publicKey:
            '-----BEGIN PUBLIC KEY-----\n' +
            'MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgG2m5VVtZ4mHml3FB9foDRpDW7Pw\n' +
            'Foa+1eYN777rNmIdnmezQqHWIRVcnTRVjrgGt2ndP2cYT7MgmWpvr8IjgN0PZ6ng\n' +
            'MmKYGpapMqkxsnS/6Q8UZO4PQNlnsK2hSPoIDeJcHxDvo6Nelg+mRHEpD6K+1FIq\n' +
            'zvdwVPCcgK7UbZElAgMBAAE=\n' +
            '-----END PUBLIC KEY-----'
    });
};

export const log = (data) => {
    Logan.log(data, new Date().getTime());
}

export const report = (data, url='https://yourServerAddressToAcceptLogs') => {
    var now = new Date();
    var sevenDaysAgo = new Date(+now - 6 * 24 * 3600 * 1000);
    Logan.report({
        reportUrl: url,
        deviceId: 'test-logan-web',
        fromDayString: timeFormat2Day(sevenDaysAgo),
        toDayString: timeFormat2Day(now),
        webSource: 'browser',
        environment: navigator.userAgent,
        customInfo: JSON.stringify(data)
    });
};

window.$logan = {
    initLogan,
    report,
    log,
}
