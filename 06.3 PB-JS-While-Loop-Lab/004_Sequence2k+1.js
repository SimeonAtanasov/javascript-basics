function sequence2k1(input){
    let num = input.shift();
    let k = 1;

    while (k <= num) {
        console.log(k);
        k = (k * 2) + 1;
    }
}

sequence2k1([31]);