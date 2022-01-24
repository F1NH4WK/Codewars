function filter_list(l){
    var array = [];
    for (i of l){
        Number.isInteger(i)? array.push(i): null;
    };
    return array;
};
