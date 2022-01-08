function tribonacci(signature, n){
    var final = [].concat(signature);
    if (n >= 3){
        for (let i = 0; i <= n-4; i++){
            final.push(sum(final.slice(i, i+3)));
            console.log(final)
        };
    }
    else if (n >= 1){
        final = [];
        for (let i = 0; i <= n-1; i++){
            final.push(signature[i])
        };
    }
    else final = [];
    return final;
};

function sum(x){
    let sum = 0;
    for (i of x){sum += i;};
    return sum;
};

console.log(tribonacci([1, 1, 1], 2))

// OUTRA SOLUÇÃO:

function tribonacci(signature,n){  
    for (var i = 0; i < n-3; i++) { // aqui nós fazemos o mesmo que o meu, desconsideramos os 3 primeiros
      signature.push(signature[i] + signature[i+1] + signature[i+2]); // como o i aumenta 1, então fazer desta maneira funciona;
    }
    return signature.slice(0, n); //retornar o valor requisitado
  }

  