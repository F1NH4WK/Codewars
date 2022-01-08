function countEqual(str){
    str = str.toLowerCase();
    var x = 0;
    var o = 0;
    for (let i = 0; i < str.length; i++){
        console.log(str[i])
        if (str[i] == 'x') x++
        else if (str[i] == 'o') o++; 
    };
    if (x == o) return true
    else return false
};

console.log(countEqual('xxxm'));