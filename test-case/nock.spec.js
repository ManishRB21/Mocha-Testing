var sinon = require('sinon')
var chai =require('chai')
var expect = chai.expect;
var Student = require('../controllers/studentCtrl')
var stdClass = new Student();
const nock = require('nock')
describe('------------------nock---------------', function(){
    it('API test', function(done){
        this.timeout(0)
        const obj = {data:[]}

        const scope = nock('https://reqres.in/api')
        .get('/unknown')
        .reply(200,obj)

        stdClass.thirdAPI().then(function(record){
            console.log(record)
            expect(record).to.be.deep.equal(obj)
            done();
        }).catch((error)=>{
            done(new Error('error'+error))
        })
        
    })
})