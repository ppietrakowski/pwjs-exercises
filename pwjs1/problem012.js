
// adds to key from difference A from B
let keyDifference = function(keys, a, b) {
    for (keyA in a) {
        if (!b.hasOwnProperty(keyA)) {
            keys.push(keyA);
        }
    }
}


let objectsDiff = function(a, b) {
    let keys = []
    keyDifference(keys, a, b);
    keyDifference(keys, b, a);

    return keys;
}
