'use strict';

var IyzipayResource = require('../IyzipayResource');

function SubscriptionRetry() {
    this._config = arguments[0];
    this._api = {
        create: {
            path: '/v2/subscription/operation/retry',
            method: 'POST',
            requestModel: 'CreateSubscriptionRetryRequest'
        }
    };
}

SubscriptionRetry.prototype = new IyzipayResource();

module.exports = SubscriptionRetry;
