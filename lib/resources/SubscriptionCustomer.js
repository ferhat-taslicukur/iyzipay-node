'use strict';

var IyzipayResource = require('../IyzipayResource');

function SubscriptionCustomer() {
    this._config = arguments[0];
    this._api = {
        create: {
            path: '/v2/subscription/customers',
            method: 'POST',
            requestModel: 'CreateSubscriptionCustomerRequest'
        },
        update: {
            path: '/v2/subscription/customers/{referenceCode}',
            method: 'POST',
            requestModel: 'UpdateSubscriptionCustomerRequest',
            pathVariables: 'SubscriptionCustomerPathRequest'
        },
        delete: {
            path: '/v2/subscription/customers/{referenceCode}',
            method: 'DELETE',
            pathVariables: 'SubscriptionCustomerPathRequest'
        },
        retrieve: {
            path: '/v2/subscription/customers/{referenceCode}',
            method: 'GET',
            pathVariables: 'SubscriptionCustomerPathRequest'
        },
        retrieveAll: {
            path: '/v2/subscription/customers',
            method: 'GET',
            queryString: 'RetrieveAllSubscriptionCustomerRequest'
        }
    };
}

SubscriptionCustomer.prototype = new IyzipayResource();

module.exports = SubscriptionCustomer;
