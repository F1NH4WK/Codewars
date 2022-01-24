function highAndLow(numbers){
    let x = numbers.split(' ').map(y => Number.parseInt(y));
    var b = x[0], l = x[0];
    for (i of x){
        b = b < i? i:b;
        l = l > i?  i:l;
    };
    return `${b} ${l}` 
};

console.log(highAndLow('1989 2049 2797 799 939 1111 3269 3462 2934 3400 3406 2425 3245 3707 2356 1110 3856 1499 999 1373 1297'));