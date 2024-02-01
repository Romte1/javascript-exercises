
const fibonacci = function(n) {
    if (n<0) {
        return 'OOPS';
    }
    

    let fibo = 0;
    let lastNumber = 1;
    let save = 0;
    for (i = 0; i<n ; i++) {
         save = fibo;
         fibo += lastNumber;
         lastNumber = save;
    }
    return fibo;
};

// Do not edit below this line
module.exports = fibonacci;
