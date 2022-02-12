const removeFromArray = function(array, ...elements) {
    for (let i = 0; i < elements.length; i++) {
        if (array.indexOf(elements[i]) >= 0) {
            let index = array.indexOf(elements[i]);
            array.splice(index, 1);
        }
        else {
            continue;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
