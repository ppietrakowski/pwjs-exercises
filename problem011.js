
let deepFindAndCount = function(arr, number) {
    let count = 0;

    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            count += deepFindAndCount(arr[i], number);
        }
        return count;
    }

    // function has received number so check it for equality with number
    return arr === number ? 1 : 0;
}