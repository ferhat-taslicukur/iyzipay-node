'use strict';

var BaseRequest = require('./BaseRequest'),
    util = require('util');

function CreateSubscriptionCardRequest(request) {
    BaseRequest.call(this, {
        locale: request["locale"],
        conversationId: request["conversationId"],
        customerReferenceCode: request["customerReferenceCode"],
        callbackUrl: request["callbackUrl"]
    });
}

util.inherits(CreateSubscriptionCardRequest, BaseRequest);

module.exports = CreateSubscriptionCardRequest;
