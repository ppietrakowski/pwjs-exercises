

let divisible = function(a) {
    let isDivisible = true;

    for (let i = 0; i < arguments.length; i++) {
        if (a % arguments[i] != 0)
            isDivisible = false;
    }

    return isDivisible;
}