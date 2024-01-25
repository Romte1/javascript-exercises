
const repeatString = function(string, number) {
    let sentence= "";
    for (i=1; i<=number; i++){
        sentence+=string;
        }
    
    if (number<0) {
        return 'ERROR';
    }
    return sentence;
};


// Do not edit below this line
module.exports = repeatString;

