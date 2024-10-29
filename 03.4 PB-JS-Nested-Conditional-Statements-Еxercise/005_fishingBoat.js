function fishBoat(budget, season, fishermen) {
    budget = Number(budget);
    fishermen = Number(fishermen);
    let price = 0.00;

    switch (season) {
        case "Spring":
            if (fishermen <= 6) {
                price = 3000 * 0.90;
            } else if (fishermen > 6 && fishermen <= 11) {
                price = 3000 * 0.85;
            } else if (fishermen > 12) {
                price = 3000 * 0.75;
            }
            else {
                price = 3000;
            }
        break;
        case "Summer":
            if (fishermen <= 6) {
                price = 4200 * 0.90;
            } else if (fishermen > 6 && fishermen <= 11) {
                price = 4200 * 0.85;
            } else if (fishermen > 12) {
                price = 4200 * 0.75;
            }
            else {
                price = 4200;
            }
        break;
        case "Autumn":
            if (fishermen <= 6) {
                price = 4200 * 0.90;
            } else if (fishermen > 6 && fishermen <= 11) {
                price = 4200 * 0.85;
            } else if (fishermen > 12) {
                price = 4200 * 0.75;
            }
            else {
                price = 4200;
            }
        break;
        case "Winter":
            if (fishermen <= 6) {
                price = 2600 * 0.90;
            } else if (fishermen > 6 && fishermen <= 11) {
                price = 2600 * 0.85;
            } else if (fishermen > 12) {
                price = 2600 * 0.75;
            }
            else {
                price = 2600;
            }
        break;
    }
    if (fishermen % 2 == 0 && season !== "Autumn") {
        price = price * 0.95;
    } 
    if (budget > price) {
        console.log(`Yes! You have ${(budget-price).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(price-budget).toFixed(2)} leva.`)
    }
}

fishBoat("3000", "Summer", "11");
fishBoat("3600", "Autumn", "6");
