var sinon = require('sinon')
var chai =require('chai')
var expect = chai.expect;
var Student = require('../controllers/studentCtrl')
var studentObj = new Student();

describe('-----------------stub----------------', function(){

    it('function arg check', function(){
        var stub = sinon.stub(studentObj, 'getExternal')
        stub.withArgs(40).returns(5)
        expect(studentObj.finalMarks(40)).to.be.equal(54);
    })
})