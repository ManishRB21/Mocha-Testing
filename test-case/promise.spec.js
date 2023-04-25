var sinon = require('sinon')
var chai =require('chai')
var expect = chai.expect;
const chaiaspromise =require('chai-as-promised')
chai.use(chaiaspromise)
var Student = require('../controllers/studentCtrl')
const userCtrl = require('../controllers/userCtrl')
var studentObj = new Student();

describe('-----------------promise----------------', function(){

    it('Normal check function', function(done){
        //expect(studentObj.dbData()).to.be.equal(10)
        this.timeout(1500)
        studentObj.dbData().then(function(result){
            expect(result).to.be.equal(10)
            done();
        });
        
    })

    it('Promised check function', function(){
        this.timeout(0)
        return expect(studentObj.dbData()).to.eventually.equal(10)
         
    })

    it('OTP function', function(){
        this.timeout(0)
        return expect(userCtrl.newsData()).to.eventually.have.deep.property('otp')
         
    })
})