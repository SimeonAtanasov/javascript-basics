function cruiseShip(input) {
    let type = input.shift();
    let typeCabin = input.shift();
    let countNight = Number(input.shift());
    let price = 0;

    switch (type) {
        case "Mediterranean":
            switch (typeCabin) {
                case "standard cabin":
                    price = countNight * 27.50;
                    break;
                case "cabin with balcony":
                    price = countNight * 30.20;
                    break;
                case "apartment":
                    price = countNight * 40.50;
                    break;
            }
            break;
        case "Adriatic":
            switch (typeCabin) {
                case "standard cabin":
                    price = countNight * 22.99;
                    break;
                case "cabin with balcony":
                    price = countNight * 25.00;
                    break;
                case "apartment":
                    price = countNight * 34.99;
                    break;
            }
            break;
        case "Aegean":
            switch (typeCabin) {
                case "standard cabin":
                    price = countNight * 23.00;
                    break;
                case "cabin with balcony":
                    price = countNight * 26.60;
                    break;
                case "apartment":
                    price = countNight * 39.80;
                    break;
            }
            break;
    }
    price *= 4;
    let totalPrice = 0;

    if (countNight > 7) {
        totalPrice = price - (price * 0.25);
    }
    else {
        totalPrice = price;
    }
    console.log(`Annie's holiday in the ${type} sea costs ${totalPrice.toFixed(2)} lv.`);

}

cruiseShip([
    "Aegean",
    "standard cabin",
    "10"
]);
