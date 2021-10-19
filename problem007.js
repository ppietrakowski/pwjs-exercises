let findMax = function(a, b) {
    let max = a;

    for (let i = 1; i < arguments.length; i++) {
        if (max < arguments[i])
            max = arguments[i];
    }

    return max;
}