
let deepCopy = function(obj) {
    let copy = [];
    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepCopy(obj[i]);
        }
        return copy;
    }

    // !Array.isArray(obj) -> element of array
    return obj;
}
