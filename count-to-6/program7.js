module.exports = function average(...args) {
    let sum = args.reduce((prev, current) => prev + current, 0);

    return  sum / args.length;
}