let maybe = function(predicate, fn, c) {
    if (predicate(c) === true)
        return fn(c);
    else
        return c;

}

