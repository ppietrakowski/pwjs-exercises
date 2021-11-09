let reduce = function(arr, fn, initial) {   
    return (function inside(index, current) {
        if (index >= 0)
            return fn(inside(index - 1, current), arr[index], index, arr);
        else // has reached index=-1, beyond array
            return initial;
     } )(arr.length - 1, initial);
}