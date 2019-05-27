'use strict';

var IyzipayResource = require('../IyzipayResource');

function SubscriptionProduct() {
    this._config = arguments[0];
    this._api = {
        create: {
            path: '/v2/subscription/products',
            method: 'POST',
            requestModel: 'CreateSubscriptionProductRequest'
        },
        update: {
            path: '/v2/subscription/products/{referenceCode}',
            method: 'POST',
            requestModel: 'UpdateSubscriptionProductRequest',
            pathVariables: 'SubscriptionProductPathRequest'
        },
        delete: {
            path: '/v2/subscription/products/{referenceCode}',
            method: 'DELETE',
            pathVariables: 'SubscriptionProductPathRequest'
        },
        retrieve: {
            path: '/v2/subscription/products/{referenceCode}',
            method: 'GET',
            pathVariables: 'SubscriptionProductPathRequest'
        },
        retrieveAll: {
            path: '/v2/subscription/products',
            method: 'GET',
            queryString: 'RetrieveAllSubscriptionProductRequest'
        }
    };
}

SubscriptionProduct.prototype = new IyzipayResource();

module.exports = SubscriptionProduct;
