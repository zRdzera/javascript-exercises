const findTheOldest = function(obj) {
    const todayDate = new Date();
    const thisYear = todayDate.getFullYear();

    const sortArray = obj.sort((element, nextOne) => 
    {
        if(!element.yearOfDeath) element.yearOfDeath = thisYear;    
        if(!nextOne.yearOfDeath) nextOne.yearOfDeath = thisYear;

        return (element.yearOfDeath - element.yearOfBirth) > (nextOne.yearOfDeath - nextOne.yearOfBirth) ? -1 : 1;
    });

    return sortArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
