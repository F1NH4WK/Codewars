function countSheeps(arrayOfSheep){
    var cont = 0;
    for (i of arrayOfSheep){
        cont += i? 1:0;
    };
    return cont;
};