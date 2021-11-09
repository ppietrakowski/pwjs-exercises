let compose = function(...functions) {
    functions.reverse();


    return function(x) {
        let value = x;
        for (let fun of functions) {
            value = fun(value);
        }
        return value;
    };
}