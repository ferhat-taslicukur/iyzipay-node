'use strict';

var BaseRequest = require('./BaseRequest'),
    util = require('util'),
    SubscriptionCustomer = require('./model/SubscriptionCustomer');

function CreateSubscriptionCustomerRequest(request) {
    BaseRequest.call(this, SubscriptionCustomer.body(request));
}

util.inherits(CreateSubscriptionCustomerRequest, BaseRequest);

module.exports = CreateSubscriptionCustomerRequest;
