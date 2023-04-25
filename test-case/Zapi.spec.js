var chai = require('chai')
var assert = chai.assert
var should = chai.should()
var expect = chai.expect
let chaiHttp = require('chai-http')
chai.use(chaiHttp)
var server = require('../index')

describe('-------------API---------------', function(){
    it('get user', function(done){
        chai.request('http://localhost:3000')
        .get('/')
        .end((err,response)=>{
            console.log(response.status)
            expect(response.status).to.be.equal(200);
            expect(response.body).to.have.nested.property('data.list')
            done();
        })
        
    })
})