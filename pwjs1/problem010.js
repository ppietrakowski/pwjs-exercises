
let deepCopy = function(arr) {
    var copy = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            copy[i] = deepCopy(arr[i]);
        }
        return copy;
    }

    // !Array.isArray(arr) -> element of array
    return arr;
}