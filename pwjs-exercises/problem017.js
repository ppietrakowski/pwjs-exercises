let countWords = function(words) {
    return words.reduce(
        (dictionary, current) => { 
            if (!(current in dictionary))
                dictionary[current] = 0;
            dictionary[current]++;
            return dictionary;
        }, {});
}
