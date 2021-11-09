module.exports = function makeImportant(str, howMany = str.length) {
    let exclamationMark = "";
    for (let i = 0; i < howMany; i++) {
        exclamationMark += '!';
    }
    return `${str}${exclamationMark}`;
}