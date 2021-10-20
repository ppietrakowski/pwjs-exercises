
let deepCopy = function(arr) {
    var copy = [];
    /* Schodzenie rekurencyjne do elementow */
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            copy[i] = deepCopy(arr[i]);
        }
        return copy;
    }

    return arr;
}