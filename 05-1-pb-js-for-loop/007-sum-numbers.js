function sumNumbers(arg1, arg2, arg3){
    let productName = arg1;
    let num = Number(arg2);
    let budget = Number(arg3);
    result = 0;

    for (let i = 0; i < productName.length; i++) {
            let letter = productName[i]
            if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y") {
                result += 3;
            } else {
                result +=1;
            }
        }
    
    result *= num;

    if (result <= budget){
        let diff = Math.abs(budget-result);
        console.log(`${productName} bought. Money left: ${diff.toFixed(2)}`)
    }
    else {
        console.log(`Cannot buy ${productName}. Product value: ${result.toFixed(2)}`)
    }
}

sumNumbers("apple", 2, 20);
