let Spy = function(obj, methodName) {
    const stats = {
        func: obj[methodName],
        count: 0
    };

    /* Overriding object method */
    obj[methodName] = function() {
        stats.count++;
        stats.func.apply(this, arguments);
    }
    return stats;
}