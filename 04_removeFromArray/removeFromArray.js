const removeFromArray = function(element, ...args) {

    // while (count > 0){
    //     for(let j = 0; j < args.length; j++){
    //         if(element[count] === args[j]){
    //             element.splice(count, 1);
    //             console.log(element.length);
    //         }
    //     }
    //     count--;
    // } 

    /* Both structures (above and below) work on this exercise */

    for(let i = element.length-1; i >= 0; i--){
        for(let j = 0; j < args.length; j++){
            if(element[i] === args[j]){
                element.splice(i, 1);
            }
        }
    }

    return element;
};

// Do not edit below this line
module.exports = removeFromArray;
