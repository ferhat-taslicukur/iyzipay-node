'use strict';

var Address = require('./Address');

function CreateSubscriptionCustomerRequest() {
}

CreateSubscriptionCustomerRequest.body = function (data) {
    return typeof data !== 'undefined' ? {
        locale: data['locale'],
        conversationId: data['conversationId'],
        name: data['name'],
        surname: data['surname'],
        identityNumber: data['identityNumber'],
        email: data['email'],
        gsmNumber: data['gsmNumber'],
        billingAddress: Address.body(data['billingAddress']),
        shippingAddress: Address.body(data['shippingAddress'])
    } : undefined;
};

module.exports = CreateSubscriptionCustomerRequest;
