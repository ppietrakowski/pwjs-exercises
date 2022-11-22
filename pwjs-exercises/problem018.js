let reduce = function (arr, fn, initial) {
    let accum = initial

    for (let i = 0; i < arr.length; i++) {
        accum = fn(accum, arr[i], i, arr)
    }

    return accum
}