

let ascComparator = function(a, b) {
    if (a > b)
        return 1;
    else if(a < b)
        return -1;
    else
        return 0;
}

let descComparator = function(a, b) {
    return -ascComparator(a, b);
}


let parametricSort = function(a, type) {
    if (type == 'asc')
        return a.sort(ascComparator);
    else if (type == 'desc')
        return a.sort(descComparator);
    else
        return false;

}