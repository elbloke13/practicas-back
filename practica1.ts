function hanoi (ndiscos : number , tinicial = 'torre inicial', tfinal = 'torre final', tauxiliar = 'torre auxiliar'){

    if(ndiscos == 1){
        console.log(tinicial+ ' a ' + tfinal)
    }
    else{
        hanoi(ndiscos-1,tinicial,tauxiliar,tfinal)
        console.log(tinicial + ' a ' + tfinal)
        hanoi(ndiscos-1, tauxiliar, tfinal, tinicial)
    }
    return ndiscos ;
}


hanoi(4);

