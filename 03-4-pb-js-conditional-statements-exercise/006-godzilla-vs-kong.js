function godzillaVsKong(budget, extras, clothPrice) {
    budget = Number(budget);
    extras = Number(extras);
    clothPrice = Number(clothPrice);

    let decor = 0.10 * budget;

    if (extras > 150) {
        clothPrice = clothPrice * 0.90;
    }

    let totalClothPrice = clothPrice * extras;
    let totalcost = decor + totalClothPrice;

    if (totalcost > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalcost - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalcost).toFixed(2)} leva left.`);
    }
}

godzillaVsKong("20000", "120", "55.5");
godzillaVsKong("15437.", "186", "57.99");
godzillaVsKong("9587.88", "222", "55.68");