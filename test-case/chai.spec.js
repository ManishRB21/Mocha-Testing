var chai = require('chai')
var assert = chai.assert
var should = chai.should()
var expect = chai.expect


//####################ASSERT###########################//

describe('Assert check', function(){
    
    let userName= 'manish'
    let list =  {
        item :[{
            id:1, name:'demo'
        }],
        title:'list'
    }
    
    it('check string', function(){
        assert.typeOf(userName,'string')
    })

    it('equal match', function(){
        assert.equal(userName,'manish')
    })

    it('length', function(){
        assert.lengthOf(list.item,1)
    })
})

//####################SHOULD###########################//

describe('Should check', function(){
    
    let userName= 'manish'
    let list =  {
        item :[{
            id:1, name:'demo'
        }],
        title:'list'
    }
    
    it('check string', function(){
        userName.should.be.a('string')
    })

    it('equal match', function(){
        userName.should.equal('manish')
    })
    
    it('equal length', function(){
        list.item.should.have.lengthOf(1)
    })
})

//####################EXPECT###########################//

describe('Expect check', function(){
    
    let userName= 'manish'
    let list =  {
        item :[{
            id:1, name:'demo'
        }],
        title:'list',
        address :{
            country:"India",
            phone : ['1234', '5678']
        }
    }
    
    it('check string', function(){
        expect(userName).to.be.a('string')
    })

    it('equal match', function(){
        expect(userName).to.equal('manish')
    })
    
    it('equal length', function(){
        expect(list.item).to.have.lengthOf(1)
    })

    it('object match', function(){
        expect(list).to.have.all.keys('item','title','address')
    })

    it('phone no', function(){
        expect(list).to.have.nested.property('address.phone[1]')
    })
    
    it('country name', function(){
        expect(list).to.have.nested.include({'address.country':'India'})
    })
})