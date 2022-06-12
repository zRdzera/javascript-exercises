const getTheTitles = function(obj) {
    let array = [];

    for (let index = 0; index < obj.length; index++) {
        array[index] = obj[index].title;
    }

    return array;
};

  /* OTHER WAY TO SOLVE THE EXERCISE */

// const getTheTitles = function(obj) {
//     return obj.map(book => book.title);
// };

// Do not edit below this line
module.exports = getTheTitles;
