function maxNumber(input){
    let numberCount = Number(input.shift());
    let count = 0;

    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (count < numberCount){
        let num = Number(input.shift());
        if (num > maxNumber){
            maxNumber = num;
        }
        count++;
    }
    console.log(maxNumber);
    
}

maxNumber([
    "4",
    "100",
    "99",
    "-60000000",
    "1313"
    
    ])
