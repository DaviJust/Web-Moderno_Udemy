function teste1(num) {
    if(num>7)
        console.log(num)
    }

// teste1(6)
// teste1(10)

function teste2(num) {
    if(num > 7) { //cuidado com o `;`, portanto nao usar o block
        console.log(num)
    }
}

teste2(6)
teste2(8)