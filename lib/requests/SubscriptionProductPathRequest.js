'use strict';

var BaseRequest = require('./BaseRequest'),
    util = require('util');

function SubscriptionProductPathRequest(request) {

    BaseRequest.call(this, {
        referenceCode: request["referenceCode"]
    });
}

util.inherits(SubscriptionProductPathRequest, BaseRequest);

module.exports = SubscriptionProductPathRequest;
