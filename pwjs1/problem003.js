let isLeapYear = function(year) {
    if (!Number.isInteger(year))
        return false;

    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}
