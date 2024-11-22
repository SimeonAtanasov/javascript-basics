function combination(inputData){
    let start = Number(inputData.shift());
    let end = Number(inputData.shift());
    let magicNumber = Number(inputData.shift());
    let flag = false;
    let combination = 0;

    for (let leftNum = start; leftNum <= end; leftNum++){
        for (let rightNum = start; rightNum <= end; rightNum++){
            combination++;
            if((leftNum + rightNum) === magicNumber){
                let expression = `(${leftNum} + ${rightNum} = ${magicNumber})`;
                console.log(`Combination N:${combination} ${expression}`);
                flag = true;
                break;
            }
        }
    if(flag){
        break;
    }
    }
    if(flag === false){
        console.log(`${combination} combinations - neither equals ${magicNumber}`);
    }
    
}
combination([
    "1",
    "10",
    "5"
])

combination([
    "23",
    "24",
    "20"
])


combination([
    "88",
    "888",
    "1000"
])
