function newHouse(flowerType, flowerCount, budget) {
    flowerCount = Number(flowerCount);
    budget = Number(budget);
    let totalPrice = 0.00;

    switch (flowerType) {
        case "Roses":
            totalPrice = flowerCount * 5;
            if (flowerCount > 80) {
                totalPrice *= 0.90; // Apply 10% discount for Roses
            }
            break;
        case "Dahlias":
            totalPrice = flowerCount * 3.80;
            if (flowerCount > 90) {
                totalPrice *= 0.85; // Apply 15% discount for Dahlias
            }
            break;
        case "Tulips":
            totalPrice = flowerCount * 2.80;
            if (flowerCount > 80) {
                totalPrice *= 0.85; // Apply 15% discount for Tulips
            }
            break;
        case "Narcissus":
            totalPrice = flowerCount * 3;
            if (flowerCount < 120) {
                totalPrice *= 1.15; // Add 15% surcharge for fewer than 120 Narcissus
            }
            break;
        case "Gladiolus":
            totalPrice = flowerCount * 2.50;
            if (flowerCount < 80) {
                totalPrice *= 1.20; // Add 20% surcharge for fewer than 80 Gladiolus
            }
            break;
    }

    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`);
    }
}

// Test cases
newHouse("Roses", "55", "250");
newHouse("Tulips", "88", "260");
newHouse("Dahlias", "112", "460");
