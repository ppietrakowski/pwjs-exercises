

let divisible = function(a) {
    let isDivisible = true;

    for (arg in arguments) {
        if (a % arg != 0)
            isDivisible = false;
    }

    return isDivisible;
}