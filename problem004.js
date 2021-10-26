

let getTotalNumberOfNewYaersEveSundays = function(from, to) {
    let count = 0;    

    for (let currentYear = from; currentYear <= to; currentYear++) {
        let temp = new Date(currentYear, 0, 1);
        if (temp.getDay() == 0)
            count++;
    }

    return count;
}

