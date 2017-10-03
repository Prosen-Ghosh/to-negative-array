const negative = require('../negative');
const assert = require('chai').assert;
describe('Negative Array',function(){
    it('Function Shuld Return All Element To Negative',function(){
        assert.deepEqual(negative([1,2,-1,5]),[-1,-2,-1,-5]);
        assert.deepEqual(negative([1]),[-1]);
        assert.equal(negative([]),null);
        assert.deepEqual(negative([10,-2,1,{},-100]),[-10,-2,-1,{},-100]);
    });
    it('Function Shuld Return A Type Error',function(){
        assert.equal(negative(),'TypeError: negative() expects an array parameter');
    });
})