let carry = function(fn) {
    
    return function _carry(...args) {
        let isEnoughArguments = args.length >= fn.length
        if (!isEnoughArguments) {
            return function(...arg2) {
                // remember last argument
                return _carry.apply(null, args.concat(arg2));
            }
        } else {
            return fn.apply(null, args);
        }
    }
}
