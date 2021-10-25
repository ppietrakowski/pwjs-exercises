
let deepFindAndCount = function(arr, number) {
    let count = 0;

    if (Array.isArray(arr)) {
        for (let obj of arr) {
            count += deepFindAndCount(obj, number);
        }
        return count;
    }

    // function has received number so check it for equality with number
    return arr === number ? 1 : 0;
}
