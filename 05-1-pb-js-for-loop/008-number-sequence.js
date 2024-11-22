function NumberSeqeunce(arg1, arg2, arg3){
    let start = Number(arg1);
    let end = Number(arg2);
    let n = Number(arg3);

    for (let i = start; i <= end; i++){
        let numberPow = Math.pow(n, 2);
        if(i % numberPow === 0) {
            console.log(`Very special number: ${i}`);
        }
        else if (i % n === 0) {
            console.log(`Special number: ${i}`);
        }
        else {
            console.log(i);
        }
    }


}

NumberSeqeunce(
    "1",
    "25",
    "3"
    )