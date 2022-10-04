function anos (numero) {
    if(numero % 4 == 0 || numero % 400 == 0){
        return `Ano bissexto`
    }else{
        return false
    }
}

console.log(anos(425))