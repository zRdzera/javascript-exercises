const sumAll = function(initialNumber, finalNumber) {
    if(initialNumber < 0 || finalNumber < 0) return "ERROR";

    if(typeof initialNumber != 'number' || typeof finalNumber != 'number') return "ERROR";

    let sum = 0;
    
    if(initialNumber > finalNumber){
        let aux = initialNumber;
        initialNumber = finalNumber;
        finalNumber = aux;
    }
    
    for(let i = initialNumber; i <= finalNumber; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
