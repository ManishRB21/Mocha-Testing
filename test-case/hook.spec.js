var sinon = require('sinon')
var chai =require('chai')
var expect = chai.expect;

describe('-------------hook 1-------------',function(){
    // after(function(){
    //     console.log('=========last=========')
    // })

    // before(function(){
    //     console.log('=========first=========')
    // })

    // afterEach(function(){
    //     console.log('=========after every testcase=========')
    // })

    // beforeEach(function(){
    //     console.log('=========before every testcase=========')
    // })

    let data = 'code';

    it('check string', function(){
        expect(data).to.be.a('string')
    })
    
    it('value', function(){
        expect(data).to.be.equal('code')
    })

    it('value 2', function(){
        expect(data).to.be.equal('code')
    })
})

describe('-------------hook 2-------------',function(){
    
    let data = 'code';

    it('check string 2', function(){
        expect(data).to.be.a('string')
    })
})

