const repeatString = function(string, int) {
    let helper = string;
    if (int == 0) {
        return '';
    }
    else if (int < 1) {
        return "ERROR";
    }
    for (let i = 1; i < int; i++) {
        string = string + helper;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
