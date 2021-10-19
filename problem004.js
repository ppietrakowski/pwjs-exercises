


let getTotalNumberOfNewYaersEveSundays = function(a, b) {
    const BASE_YEAR = 1905;
    let count = 0;

    if (a < BASE_YEAR)
        return 0;
    
    const OFFSETS = [6, 11, 6, 5, 6];
    let currentIndex = 0;
    let firstYear = BASE_YEAR;

    // find first year that is more or equal the a-year
    while (firstYear <= a) {
        firstYear += OFFSETS[currentIndex];
        currentIndex = (currentIndex + 1) % 4;
    }

    // count a new year sundays
    while (firstYear <= b) {
        count++;
        firstYear += OFFSETS[currentIndex];
        currentIndex = (currentIndex + 1) % 4;
    }


    return count;
}

