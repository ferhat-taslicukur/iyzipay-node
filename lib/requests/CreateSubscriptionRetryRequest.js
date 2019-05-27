'use strict';

var BaseRequest = require('./BaseRequest'),
    util = require('util');

function CreateSubscriptionRetryRequest(request) {
    BaseRequest.call(this, {
        locale: request["locale"],
        conversationId: request["conversationId"],
        referenceCode: request["referenceCode"]
    });
}

util.inherits(CreateSubscriptionRetryRequest, BaseRequest);

module.exports = CreateSubscriptionRetryRequest;
