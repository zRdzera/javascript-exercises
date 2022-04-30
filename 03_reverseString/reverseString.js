const reverseString = function(string) {
    let subString = '';

    for(let i = string.length-1; i >= 0; i --){
        subString += string.charAt(i);
    }

    return subString;
};

// Do not edit below this line
module.exports = reverseString;
