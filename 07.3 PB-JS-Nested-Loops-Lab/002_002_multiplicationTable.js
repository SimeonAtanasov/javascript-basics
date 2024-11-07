function multiplicationTable(){
    let number = 1;

    while(number <= 10){
        let  multiplier = 1;
        while(multiplier <=10){
            let  result = number * multiplier;
            console.log(`${number} * ${multiplier} = ${result}`);
            multiplier++
        }
    number++;
    }
}

multiplicationTable();