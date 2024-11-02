function minNumber(input){
    let totalCount = Number(input.shift());
    count = 0;

    let minNumber = Number.MAX_SAFE_INTEGER;
    
    while (count < totalCount){
        let num = Number(input.shift())
        if (num < minNumber){
            minNumber = num;
        }
        count++;
    }
    console.log(minNumber);
}

minNumber([
    "2",
    "100",
    "99"
    ])