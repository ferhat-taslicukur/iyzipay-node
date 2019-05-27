'use strict';

var BaseRequest = require('./BaseRequest'),
    util = require('util'),
    Pagination = require('./model/Pagination');

function UpdateSubscriptionProductRequest(request) {
    BaseRequest.call(this, Pagination.body(request));
}

util.inherits(UpdateSubscriptionProductRequest, BaseRequest);

module.exports = UpdateSubscriptionProductRequest;
