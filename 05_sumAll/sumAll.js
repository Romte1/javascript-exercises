const sumAll = function(firstNumber,lastNumber) {
    let sum = 0;
    if (typeof firstNumber !== 'number' || typeof lastNumber !== 'number'){
        return 'ERROR';
    }

    if (firstNumber <0 || lastNumber < 0){
        return 'ERROR';
    }
    smallNumber = lastNumber > firstNumber ? firstNumber : lastNumber;
    bigNumber = lastNumber > firstNumber ? lastNumber : firstNumber;
    for (i=smallNumber; i<=bigNumber;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
