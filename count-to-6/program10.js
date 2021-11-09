function html(textBetweenArgs, ...args) {
    const replaceEscapeCharacters = function(str) {
        return str.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/'/g, "&apos;")
        .replace(/"/g, "&quot;");
    }
    let htmlCode = textBetweenArgs[0];

    for (let i = 0; i < args.length; i++) {
        htmlCode += replaceEscapeCharacters(args[i]) + textBetweenArgs[i + 1];
    }

    return htmlCode;
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);