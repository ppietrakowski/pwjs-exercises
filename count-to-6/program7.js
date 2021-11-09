module.exports = function average(...args) {
    return args.reduce((prev, current) => {prev += current; return prev;}, 0) / args.length;
}