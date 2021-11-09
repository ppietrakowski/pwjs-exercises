let reverse = function(fn) {
    return function(...params) {
        return fn(...params.reverse());
    }
}

