let getShortMessages = function(messages) {
    return messages.map(obj => obj.message).filter(obj => obj.length <= 50);
}