module.exports = function makeImportant(str, howMany = str.length) {
    return `${str}${"!".repeat(howMany)}`;
}