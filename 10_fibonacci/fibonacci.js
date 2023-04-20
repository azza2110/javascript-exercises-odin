const fibonacci = function(a) {
    if (a < 1) return "OOPS";
    let sequence = [];
    for (i=0; i<a; i++){
        if (i==0 || i==1) {
            sequence[i] = 1;
        } else {
            sequence[i] = sequence[i-1]+sequence[i-2];
        }
    }
    return sequence[a-1];
};
fibonacci(3);

// Do not edit below this line
module.exports = fibonacci;
