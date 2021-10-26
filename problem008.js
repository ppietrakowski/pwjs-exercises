let magicSequence = function(a) {
    if (a == 1)
        return -1;
    else if (a <= 3)
        return -2;
    else
        return magicSequence(a - 1) * (a - 3);
}