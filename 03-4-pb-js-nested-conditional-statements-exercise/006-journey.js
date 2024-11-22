function journey(budget, season) {
    budget = Number(budget);
    let destination = "";
    let accommodation = "";
    let moneySpent = 0.00;
    
    if (budget <= 100) {
        destination = "Bulgaria";
        switch(season){
            case "summer":
                moneySpent = 0.30 * budget;
                accommodation = "Camp";
                break;
            case "winter":
                moneySpent = 0.70 * budget;
                accommodation = "Hotel";
                break;
        }
    }
    else if (budget > 100 && budget <= 1000){
        destination = "Balkans";
        switch(season){
            case "summer":
                moneySpent = 0.40 * budget;
                accommodation = "Camp";
                break;
            case "winter":
                moneySpent = 0.80 * budget;
                accommodation = "Hotel";
            break;
        }
    }
    else {
        destination = "Europe";
        accommodation = "Hotel";
        moneySpent = 0.90 * budget;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${accommodation} - ${moneySpent.toFixed(2)}`)
}

journey("50", "summer");