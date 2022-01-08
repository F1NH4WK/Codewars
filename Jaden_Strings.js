function exe(str){
    str = str.split(' ');
    var string = '';
    for (i of str){
        string += i[0].toUpperCase();
        string += i.slice(1) + ' ';
    };
    return string;
};

console.log(exe('oi amigo você Está Feliz'))

