'use strict';

var IyzipayResource = require('../IyzipayResource');

function SubscriptionCard() {
    this._config = arguments[0];
    this._api = {
        create: {
            path: '/v2/subscription/card-update/checkoutform/initialize',
            method: 'POST',
            requestModel: 'CreateSubscriptionCardRequest'
        }
    };
}

SubscriptionCard.prototype = new IyzipayResource();

module.exports = SubscriptionCard;
