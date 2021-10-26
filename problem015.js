let getShortMessages = function(messages) {
    //     copy                             deleting some objects
    return messages.map(obj => obj.message).filter(obj => obj.length <= 50);
}