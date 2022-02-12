const reducer = (previousValue, currentValue) => previousValue + currentValue;

const sumAll = function(num1, num2) {
    if (num2 < num1) {
        a = num1;
        num1 = num2;
        num2 = a;
    }
    if (typeof(num1) != "number" || typeof(num2) != "number") {
        return "ERROR";
    }
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    array = [];
    for (i = num1; i < num2 + 1; i++) {
        array.push(i);
    }
    return array.reduce(reducer);
};

// Do not edit below this line
module.exports = sumAll;
