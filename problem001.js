let roundToFixedDecimal = function(number, decimals) {
    return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

let heronEquation = function(a, b, c) {
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p-a) * (p-b) * (p-c));
}

let triangleArea = function(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0)
        return -1;

    let area = heronEquation(a, b, c);

    if (area > 0)
        return roundToFixedDecimal(area, 2);
    else
        return -1;
}