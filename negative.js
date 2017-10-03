const negative = (function(){
    'use strict';
    const fn = function(arr){
        if(Object.prototype.toString.call(arr).toLowerCase() !== '[object array]'){
            return new TypeError('negative() expects an array parameter');
        }
        return arr.length === 0 ? null : arr.map(function(v){
            if(typeof v === 'number'){
                if(v > 0)return -1 * v;
            }
            return v;
        })
    }
    return fn;
})();

if (typeof module === 'object' && module.exports) {
    module.exports = negative;
}