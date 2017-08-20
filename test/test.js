var chai = require('chai');
var request = require('request');

var expect = chai.expect;

describe('Getting a post', function () {
        var url = "http://localhost:3000/posts/5999bf79b631b61f4894b7e0"
        it('returns status code 200', function () {
            request(url, function (err, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it('returns a post', function () {
            request(url, function (err, response, body) {
                expect(body).contain('upvotes');
                done();
            });
        });
    });
    describe('Getting all posts', function () {
        var url = "http://localhost:3000/posts"
        it('returns status code 200', function () {
            request(url, function (err, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it('returns all posts', nfunction(){
            request(url, function(err, response, body){
                expect(body).contain('title');
                done();
            });
        });
    });
    describe('Posting a post', function () {
        var url = "http://localhost:3000/posts"
        var post= {
            title: "ik ben een test",
            link: "testing.be",
            comments : [],
            upvotes : 5
        }
        it('returns status code 200', function () {
            request(url, post, function (err, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it('returns added post', function(){
            request(url, post, function(err, response, body){
                expect(body).contain('5');
                done();
            });
        });
    });
describe('Getting the homepage', function () {
        var url = "http://localhost:3000/"
        it('returns status code 200', function () {
            request(url, function (err, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it('returns the homepage', function(){
            request(url, function(err, response, body){
                expect('/')n;
                done();
            });
        });
    });
