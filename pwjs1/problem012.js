
// adds to key from symetric difference set of keys A and B
let addOwnKeys = function(keys, a, b) {
    for (keyA in a) {
        if (!b.hasOwnProperty(keyA)) {
            keys.push(keyA);
        }
    }
}


let objectsDiff = function(a, b) {
    let keys = []
    addOwnKeys(keys, a, b);
    addOwnKeys(keys, b, a);

    return keys;
}