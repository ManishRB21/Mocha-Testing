var sinon = require('sinon')
var chai =require('chai')
var expect = chai.expect;
var Student = require('../controllers/studentCtrl')
var studentObj = new Student();

describe('------------------spy---------------', function(){
    it('test user function', function(){
        expect(studentObj.userId()).to.be.equal(12)
    })

    // it('function count', function(){
    //     var spyObj = sinon.spy(studentObj, 'getInfo')
    //     studentObj.home(5);
    //     expect(spyObj.calledOnce).to.be.true;
    // })

    it('function arg check', function(){
        var spyObj = sinon.spy(studentObj, 'getInfo')
        studentObj.home(5);
        expect(spyObj.calledWith(5,1)).to.be.true;
    })
})