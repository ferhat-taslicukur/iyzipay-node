var should = require('should'),
    Iyzipay = require('../lib/Iyzipay'),
    options = require('./data/options');

describe('Iyzipay Subscription API Test', function () {

    var iyzipay;

    before(function (done) {
        iyzipay = new Iyzipay(options);
        done();
    });

    describe('Subscription Product', function () {

        it('should create subscription product', function (done) {
            var createRequest = {
                locale: Iyzipay.LOCALE.EN,
                conversationId: "123456789",
                name: 'test name',
                description: 'test description'
            };

            iyzipay.subscriptionProduct.create(createRequest, function (err, result) {
                console.log(err, result);
                should.not.exist(err);
                should.exist(result);
                done();
            });
        });

        it('should update subscription product', function (done) {
            var updateRequest = {
                locale: Iyzipay.LOCALE.EN,
                conversationId: "123456789",
                referenceCode: 'e5725839-96c2-452a-835a-a4ba870139f6',
                name: 'test name',
                description: 'test descriptionnnn'
            };

            iyzipay.subscriptionProduct.update(updateRequest, function (err, result) {
                console.log(err, result);
                done();
            });
        });

        it('should delete subscription product', function (done) {
            var deleteRequest = {
                referenceCode: 'e5725839-96c2-452a-835a-a4ba870139f6'
            };

            iyzipay.subscriptionProduct.delete(deleteRequest, function (err, result) {
                console.log(err, result);
                done();
            });
        });

        it('should retrieve subscription product', function (done) {
            var retrieveRequest = {
                referenceCode: 'e5725839-96c2-452a-835a-a4ba870139f6'
            };

            iyzipay.subscriptionProduct.retrieve(retrieveRequest, function (err, result) {
                console.log(err, result);
                done();
            });
        });

        it('should retrieve all subscription products', function (done) {
            var retrieveRequest = {
                locale: Iyzipay.LOCALE.EN,
                conversationId: "123456789",
                page: '1',
                count: '10'
            };

            iyzipay.subscriptionProduct.retrieveAll(retrieveRequest, function (err, result) {
                console.log(err, result);
                done();
            });
        });
    });

    describe('Subscription Customer', function () {

        it('should create subscription customer', function (done) {
            var createRequest = {
                locale: Iyzipay.LOCALE.EN,
                conversationId: '123456789',
                name: 'name',
                surname: 'surname',
                identityNumber: '11111111111',
                email: 'test@test.com',
                gsmNumber: '+9005555555555',
                billingAddress: {
                    contactName: 'Jane Doe',
                    city: 'Istanbul',
                    country: 'Turkey',
                    address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
                    zipCode: '34742'
                },
                shippingAddress:{
                    contactName: 'Jane Doe',
                    city: 'Istanbul',
                    country: 'Turkey',
                    address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
                    zipCode: '34742'
                }
            };

            iyzipay.subscriptionCustomer.create(createRequest, function (err, result) {
                console.log(err, result);
                should.not.exist(err);
                should.exist(result);
                done();
            });
        });

        it('should update subscription customer', function (done) {
            var updateRequest = {
                locale: Iyzipay.LOCALE.EN,
                conversationId: '123456789',
                referenceCode: 'ba562488-4956-4817-acc5-d67b6c7de0a0',
                name: 'namee',
                surname: 'surnamee',
                identityNumber: '11111111111',
                email: 'test@test.com',
                gsmNumber: '+9005555555555',
                billingAddress: {
                    contactName: 'Jane Doe',
                    city: 'Istanbul',
                    country: 'Turkey',
                    address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
                    zipCode: '34742'
                },
                shippingAddress:{
                    contactName: 'Jane Doe',
                    city: 'Istanbul',
                    country: 'Turkey',
                    address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
                    zipCode: '34742'
                }
            };

            iyzipay.subscriptionCustomer.update(updateRequest, function (err, result) {
                console.log(err, result);
                should.not.exist(err);
                should.exist(result);
                done();
            });
        });

        it('should delete subscription customer', function (done) {
            var deleteRequest = {
                referenceCode: 'e5725839-96c2-452a-835a-a4ba870139f6'
            };

            iyzipay.subscriptionCustomer.delete(deleteRequest, function (err, result) {
                console.log(err, result);
                done();
            });
        });

        it('should retrieve subscription customer', function (done) {
            var retrieveRequest = {
                referenceCode: 'ba562488-4956-4817-acc5-d67b6c7de0a0'
            };

            iyzipay.subscriptionCustomer.retrieve(retrieveRequest, function (err, result) {
                console.log(err, result);
                done();
            });
        });

        it('should retrieve all subscription customer', function (done) {
            var retrieveRequest = {
                locale: Iyzipay.LOCALE.EN,
                conversationId: "123456789",
                page: '1',
                count: '10'
            };

            iyzipay.subscriptionCustomer.retrieveAll(retrieveRequest, function (err, result) {
                console.log(err, result);
                done();
            });
        });
    });

    describe('Subscription Checkout Form', function () {
        it('should initialize checkout form for subscription', function (done) {
            var initializeRequest = {
                locale: Iyzipay.LOCALE.EN,
                conversationId: "123456789",
                customerReferenceCode: 'ba562488-4956-4817-acc5-d67b6c7de0a0',
                callbackUrl: 'e5725839-96c2-452a-835a-a4ba870139f6'
            };

            iyzipay.subscriptionCard.create(initializeRequest, function (err, result) {
                console.log(err, result);
                done();
            });
        });
    });

    describe('Subscription Retry', function () {
        it('should retry subscription', function (done) {
            var retryRequest = {
                locale: Iyzipay.LOCALE.EN,
                conversationId: "123456789",
                referenceCode: 'ba562488-4956-4817-acc5-d67b6c7de0a0'
            };

            iyzipay.subscriptionRetry.create(retryRequest, function (err, result) {
                console.log(err, result);
                done();
            });
        });
    });
});
