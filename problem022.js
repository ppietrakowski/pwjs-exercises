let carry = function(fn) {
    
    return function _carry(...args) {
        // if there is not enough args
        // just remember last argument
        if (args.length < fn.length) {
            return function(...arg2) {
                return _carry.apply(null, args.concat(arg2));
            }
        } else {
            return fn.apply(null, args);
        }
    }
}