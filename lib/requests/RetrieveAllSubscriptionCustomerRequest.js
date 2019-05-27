'use strict';

var BaseRequest = require('./BaseRequest'),
    util = require('util'),
    Pagination = require('./model/Pagination');

function RetrieveAllSubscriptionCustomerRequest(request) {
    BaseRequest.call(this, Pagination.body(request));
}

util.inherits(RetrieveAllSubscriptionCustomerRequest, BaseRequest);

module.exports = RetrieveAllSubscriptionCustomerRequest;
