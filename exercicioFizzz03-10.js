function numero(num) {
    var num = 0;
    while(num < 1000) {
        console.log(`${num}`);
        num++;
        if (num % 3 === 0) {
            console.log("fizzzz");        
     }           
    }
}

numero(980)
