'use strict';

var BaseRequest = require('./BaseRequest'),
    util = require('util');

function SubscriptionCustomerPathRequest(request) {

    BaseRequest.call(this, {
        referenceCode: request["referenceCode"]
    });
}

util.inherits(SubscriptionCustomerPathRequest, BaseRequest);

module.exports = SubscriptionCustomerPathRequest;
