function accountBalance(input){
    let transactionCount = Number(input.shift());
    let currentTransactionCount = 0;
    let total = 0;

    while(currentTransactionCount < transactionCount){
        currentTransactionCount++;

        let money = Number(input.shift())

        if (money < 0){
            console.log("Invalid operation!");
            break;
        }

        console.log("Increase: " + money.toFixed(2));
        total =+ money;
    }
    console.log(`Total: ${total.toFixed(2)}`);

}

accountBalance([
    "3",
    "5.51",
    "-150",
    "69.42",
    "100"
    ])