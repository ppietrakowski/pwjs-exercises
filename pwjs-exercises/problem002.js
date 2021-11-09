let stringRotate = function(str, b) {
    if (!Number.isInteger(b) || b < 0)
        return "";
    let tmp = str.slice(0, b);
    let result = str.substring(b, str.length).concat(tmp);

    return result;
}