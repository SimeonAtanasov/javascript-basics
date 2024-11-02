function cleverLily(liliAge, washingMachine, singleToyPrice){

    liliAge = Number(liliAge);
    washingMachine = Number(washingMachine);
    singleToyPrice = Number(singleToyPrice);
    let toysCount = 0;
    let savedMoney = 0;
    let lastMoney = 0;

    for(let year = 1; year <= liliAge; year++){

        if(year % 2 !== 0){ 
            toysCount++;
        }
        else {
            savedMoney += (lastMoney + 9);
            lastMoney += 10;
        }
    }

    let totalSavedMoneyFromToys = toysCount * singleToyPrice;
    let TotalSavedMoney = savedMoney + totalSavedMoneyFromToys;

    if(TotalSavedMoney >= washingMachine){
        let leftMoney = (TotalSavedMoney - washingMachine).toFixed(2);
        console.log(`Yes! ${leftMoney}`);
    }
    else{
        let neededMoney = (washingMachine - TotalSavedMoney).toFixed(2);
        console.log(`No! ${neededMoney}`);        
    }
}

cleverLily(
    "10",
    "170.00",
    "6"
);