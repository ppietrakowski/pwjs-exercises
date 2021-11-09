
let deepCopy = function(obj) {
    let copy = [];
    if (Array.isArray(obj)) {
        for (element of obj) {
            copy.push(deepCopy(element));
        }
        return copy;
    }

    // !Array.isArray(obj) -> element of array
    return obj;
}
