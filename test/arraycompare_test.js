'use strict'

var chai = require('chai')

var expect = chai.expect

var arraycompare = require('../arraycompare')

describe('Array Compare', function(){
	it('method compare arrays exists', function(){
		expect(arraycompare.compare).to.exist
	})
	it('returns a result array', function(){
		expect(arraycompare.compare()).to.be.instanceOf(Array)
	})
	it('returns the one item', function(){
		var input1 = [1]
		var input2 = []

		expect(arraycompare.compare(input1, input2)).to.eql([1])
	})
	it('returns the correct results', function(){
		var input1 = [1,2,3,4]
		var input2 = [2,3,5]

		expect(arraycompare.compare(input1, input2)).to.eql([1,4])
	})
})