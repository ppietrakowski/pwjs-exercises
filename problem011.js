
let deepFindAndCount = function(arr, number) {
    let count = 0;
    /* Schodzenie rekurencyjne do elementow */
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            count += deepFindAndCount(arr[i], number);
        }
        return count;
    }

    return arr === number ? 1 : 0;
}