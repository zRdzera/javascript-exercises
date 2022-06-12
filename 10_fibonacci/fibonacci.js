const fibonacci = function(num) {
    let array = new Array();
    array[0] = 1;
    array[1] = 1;

    if (num < 0) return "OOPS";

    for (let index = 2; index < num; index++) {
        let result = array[index-1] + array[index-2];
        array[index] = result;
    }

    return array[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
