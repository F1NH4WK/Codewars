function square(values){
    let total = 0;
    for (i of values){
        total += Math.pow(i, 2);
    };
    return total;
};

console.log(square([1, 2]));