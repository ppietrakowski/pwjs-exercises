let isLeapYear = function(a) {
    if (!Number.isInteger(a))
        return false;

    return (a % 4 == 0 && a % 100 != 0) || (a % 400 == 0);
}